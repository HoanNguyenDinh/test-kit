import { FC, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Transaction } from '@solana/web3.js';
import { observer } from 'mobx-react';
import { useSnackbar } from 'notistack';
import { useParams, useNavigate } from 'react-router-dom';
import { ENTFActionTypes } from '../../../base/constants/collection';
import { EControllers, ENTFActivityType } from '../../../base/constants/common';
import { ITransaction } from '../../../base/interfaces/schema';
import { formatPriceToSOL } from '../../../base/utils/price.helper';
import { CollectionStoreContext } from '../../../base/stores/collection';
import { useNTF } from '../../../base/hooks/useNTF';
import { useMoreNTFs } from '../../../base/hooks/useNTFs';
import { useNTFActivities } from '../../../base/hooks/useActivities';
import { useBiddings } from '../../../base/hooks/useBiddings';
import { useNTFAttributes, useNTFCustomAttributes } from '../../../base/hooks/useNTFAttributes';
import { useNTFAuctions } from '../../../base/hooks/useNTFAuctions';
import { useWalletAddress } from '../../../base/hooks/useWalletAddress';
import { useEscrowStats } from '../../../base/hooks/useEscrowStats';
import { useMainBalance, useEscrowBalance } from '../../../base/hooks/useBalance';
import { CloseIcon } from '../shared/icons';
import AcceptOfferDialog from './acceptOfferDialog';
import NTFActivities from '../ntf/activities';
import CancelOfferDialog from './cancelOfferDialog';
import NTFInfo from './info';
import LoadingDialog from './loadingDialog';
import LowListingDialog from './lowListingDialog';
import MakeOfferDialog from './makeOfferDialog';
import NTFMoreCollection from './moreCollection';
// import PageLoading from '../shared/pageLoading';
import _ from 'lodash';
import { Row, RowTop, Wrapper, ErrorWrapper, ErrorTitle, ErrorDes } from './Styled';

export type TransactionError = {
  code?: number;
  type: string;
  message: string;
};

type ActionReloadType = '' | 'buyNow' | 'changePrice' | 'listNow' | 'cancelListing' | 'cancelOffer' | 'makeOffer';

interface NTFDetailProps {
  handleSetSeo: (value: object) => void;
}

const NTFDetail: FC<NTFDetailProps> = ({ handleSetSeo }) => {
  const collectionStore = useContext(CollectionStoreContext);
  const navigate = useNavigate();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { publicKey, connected, sendTransaction, wallet } = useWallet();
  const { connection } = useConnection();
  const { mintAddress } = useParams();
  const { walletAddress } = useWalletAddress();
  const { ntf, getNTF } = useNTF(mintAddress);
  const { activities, getNTFActivities } = useNTFActivities(mintAddress);
  const { ntfs, getMoreNTFs } = useMoreNTFs(ntf?.collectionName);
  const { biddings, getBiddings } = useBiddings(mintAddress);
  const { ntfStats, getNTFAttributes } = useNTFAttributes(mintAddress);
  const { customAttrs, getCustomAttributes } = useNTFCustomAttributes(mintAddress);
  const { auctions, getNTFAuctions } = useNTFAuctions(mintAddress);
  const collectionName = ntf?.collectionName;
  const { escrowStats, getEscrowStats } = useEscrowStats(collectionName);
  const floorPrice = formatPriceToSOL(escrowStats?.floorPrice, false) || 0;
  const [isLoadingModal, setIsLoadingModal] = useState<boolean>(false);
  const [isMakeOfferModal, setIsMakeOfferModal] = useState<boolean>(false);
  const [isLowerPriceModal, setIsLowerPriceModal] = useState<boolean>(false);
  const [isCancelOfferModal, setIsCancelOfferModal] = useState<boolean>(false);
  const [isAcceptOfferModal, setIsAcceptOfferModal] = useState<boolean>(false);
  const [priceUpdated, setPriceUpdated] = useState<number | null>(null);
  let auctionHouseKey = ntf?.v2?.auctionHouseKey;
  let expiry = ntf?.v2?.expiry;
  let sellerReferral = ntf?.v2?.sellerReferral;
  if (!auctionHouseKey && ntfs && ntfs.length > 0) {
    auctionHouseKey = ntfs[ntfs.length - 1]?.v2?.auctionHouseKey;
    expiry = ntfs[ntfs.length - 1]?.v2?.expiry;
    sellerReferral = ntfs[ntfs.length - 1]?.v2?.sellerReferral;
  }
  auctionHouseKey = auctionHouseKey ?? '';
  expiry = expiry ? expiry : 0;
  sellerReferral = sellerReferral || '';

  const { mainWallet, getMainWallet } = useMainBalance(connection, publicKey);
  const { escrowBlance, getEscrowBalance } = useEscrowBalance(walletAddress, auctionHouseKey);

  const offerData = useMemo(() => {
    let isOffer = false;
    let bidding = null;
    let highestOffer = null;
    let percentHighestOffer = null;
    let offerPrice = null;
    let actionType = ENTFActionTypes.CONNECTION;

    if (!biddings) return { isOffer, bidding, highestOffer };

    highestOffer = _.maxBy(biddings, (item) => item.bidderPubkey) || null;
    bidding = _.find(biddings, (item) => item.bidderPubkey === walletAddress) || null;

    const ntfPrice = ntf?.price;
    const highestPrice = formatPriceToSOL(highestOffer?.bidderAmountLamports, false) ?? 0;

    if (ntfPrice && highestPrice > 0) {
      percentHighestOffer = _.ceil((+highestPrice / ntfPrice) * 100, 2);
    }

    offerPrice = highestPrice;
    if (bidding) {
      isOffer = true;
      offerPrice = +(formatPriceToSOL(bidding?.bidderAmountLamports, false) ?? 0);
    }

    if (connected) {
      actionType = ENTFActionTypes.CONNECTION;
      let type = ENTFActionTypes.BUY;
      const ntfPrice = ntf?.price;
      const owner = ntf?.owner;
      const haveBiddings = biddings && biddings.length > 0;
      type = connected && !ntfPrice ? ENTFActionTypes.MAKEOFFERONLY : type;
      type = connected && !ntfPrice && owner === walletAddress ? ENTFActionTypes.LIST : type;
      type = connected && ntfPrice && owner === walletAddress ? ENTFActionTypes.LISTED : type;
      type = connected && !ntfPrice && owner === walletAddress && haveBiddings ? ENTFActionTypes.OFFERRECEIVEDLIST : type;
      type = connected && ntfPrice && owner === walletAddress && haveBiddings ? ENTFActionTypes.OFFERRECEIVEDLISTED : type;
      type = connected && isOffer ? ENTFActionTypes.OFFERMADE : type;
      type = connected && ntfPrice && owner !== walletAddress && isOffer ? ENTFActionTypes.CANCELOFFERLISTED : type;
      actionType = type;
    }

    return { isOffer, bidding, highestOffer, percentHighestOffer, offerPrice, actionType };
  }, [ntf, biddings, walletAddress, connected]);

  const offerPrice = offerData?.offerPrice ? +offerData?.offerPrice : null;

  // if (auctionHouseKey && walletAddress) {
  //   collectionStore.getEscrowBalance(walletAddress, auctionHouseKey);
  // }

  const hideAllModal = () => {
    setIsLoadingModal(false);
    setIsMakeOfferModal(false);
    setIsLowerPriceModal(false);
    setIsCancelOfferModal(false);
    setIsAcceptOfferModal(false);
  };

  const handleMakeOffer = () => {
    setIsMakeOfferModal(true);
  };

  const handleCancelOffer = () => {
    setIsCancelOfferModal(true);
  };

  const handleProcesss = useCallback(
    async (tx: ITransaction | null, type: ActionReloadType = '') => {
      hideAllModal();
      setIsLoadingModal(true);

      if (!tx) {
        console.log('tx missing');
        enqueueSnackbar(
          <ErrorWrapper>
            <ErrorTitle>Something went wrong.</ErrorTitle>
            <ErrorDes>Please refresh the page and try again</ErrorDes>
          </ErrorWrapper>,
          {
            variant: 'error',
            action: (snackbarId) => (
              <button onClick={() => closeSnackbar(snackbarId)}>
                <CloseIcon />
              </button>
            ),
            autoHideDuration: 1000000
          }
        );
        hideAllModal();
        return;
      }

      if (!publicKey || !wallet) throw new WalletNotConnectedError();

      const txSigned = tx.txSigned;
      const transaction = Transaction.from(Buffer.from(txSigned.data));

      try {
        const signature = await sendTransaction(transaction, connection, { preflightCommitment: 'recent' });
        if (!signature) {
          console.log('signature error');
          enqueueSnackbar(
            'Something went wrong with listing cancellation, please make sure your wallet has balance to cover gas fee. Please try again later.',
            {
              variant: 'error',
              action: (snackbarId) => (
                <button onClick={() => closeSnackbar(snackbarId)}>
                  <CloseIcon />
                </button>
              )
            }
          );
          hideAllModal();
          return;
        }

        const txInstruction = await collectionStore.submitTx(signature);

        if (!txInstruction) {
          console.log('txinstruction error');
          enqueueSnackbar(
            'Something went wrong with listing cancellation, please make sure your wallet has balance to cover gas fee. Please try again later.',
            {
              variant: 'error',
              action: (snackbarId) => (
                <button onClick={() => closeSnackbar(snackbarId)}>
                  <CloseIcon />
                </button>
              )
            }
          );
          hideAllModal();
          return;
        }
        enqueueSnackbar('Congrats! Your purchase is fulfilled', {
          variant: 'success',
          action: (snackbarId) => (
            <button onClick={() => closeSnackbar(snackbarId)}>
              <CloseIcon />
            </button>
          )
        });
        const isReloadCollection = (type === 'buyNow' || type === 'changePrice' || type === 'listNow') && collectionName;
        const isReloadMe = type === 'cancelListing';
        if (isReloadCollection) {
          navigate(EControllers.MARKETPLACE.replace(':symbol', collectionName));
        }
        if (isReloadMe) {
          navigate(EControllers.MYACCOUNT);
        }
        if (!isReloadCollection && !isReloadMe && mintAddress) {
          handleReloadData();
          navigate(EControllers.NTFDETAIL.replace(':mintAddress', mintAddress));
        }
        hideAllModal();
      } catch (err: any) {
        console.log('cancel error', err);
        hideAllModal();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [publicKey, wallet, collectionName]
  );

  const handleBuyNow = useCallback(
    async () => {
      closeSnackbar();

      if (!ntf || !walletAddress || !auctionHouseKey || !expiry || !sellerReferral) {
        hideAllModal();
        console.log('missing data: ntf or wallet Address or price or auctionHouseKey or expiry or sellerReferral', {
          ntf,
          walletAddress,
          auctionHouseKey,
          expiry,
          sellerReferral
        });
        return;
      }

      const tx: ITransaction = await collectionStore.getInstructionsBuyNow({
        buyer: walletAddress,
        seller: ntf.owner,
        auctionHouseAddress: auctionHouseKey,
        tokenMint: ntf.mintAddress,
        tokenATA: ntf.id,
        price: ntf.price,
        sellerReferral: sellerReferral,
        sellerExpiry: expiry
      });

      handleProcesss(tx, 'buyNow');
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [ntf, walletAddress, auctionHouseKey, expiry, sellerReferral, handleProcesss]
  );

  const handleProcessMakeOffer = useCallback(
    async (usedBiddingWallet: boolean, price: number) => {
      closeSnackbar();

      if (!ntf || !walletAddress || !price || !auctionHouseKey) {
        hideAllModal();
        console.log('missing data: ntf or wallet address or price or auctionHouseKey', { ntf, walletAddress, price, auctionHouseKey });
        return;
      }

      let tx: ITransaction | null = null;
      if (!usedBiddingWallet) {
        tx = await collectionStore.getInstructionsBuyAndDeposit({
          price: price,
          buyer: walletAddress,
          auctionHouseAddress: auctionHouseKey,
          tokenMint: ntf.mintAddress
        });
      } else {
        tx = await collectionStore.getInstructionsBuy({
          price: price,
          buyer: walletAddress,
          auctionHouseAddress: auctionHouseKey,
          tokenMint: ntf.mintAddress
        });
      }

      handleProcesss(tx);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [ntf, walletAddress, auctionHouseKey, handleProcesss]
  );

  const handleCancelOfferProcess = useCallback(async () => {
    closeSnackbar();

    if (!ntf || !walletAddress || !offerPrice || !auctionHouseKey) {
      hideAllModal();
      console.log('missing data: ntf or wallet address or price or auctionHouseKey', { ntf, walletAddress, offerPrice, auctionHouseKey });
      return;
    }

    const tx = await collectionStore.getInstructionsBuyCancel({
      buyer: walletAddress,
      auctionHouseAddress: auctionHouseKey,
      price: offerPrice,
      tokenMint: ntf.mintAddress
    });

    handleProcesss(tx);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ntf, walletAddress, offerPrice, auctionHouseKey, handleProcesss]);

  const handleProcessAddListing = useCallback(
    async (value: number | null) => {
      closeSnackbar();

      if (!ntf || !walletAddress || !value || !auctionHouseKey || !expiry) {
        console.log('missing data: ntf or wallet Address or price or auctionHouseKey or expiry', {
          ntf,
          walletAddress,
          value,
          auctionHouseKey,
          expiry
        });
        hideAllModal();
        return;
      }

      const tx: ITransaction | null = await collectionStore
        .getInstructionsSell({
          seller: ntf.owner || walletAddress,
          auctionHouseAddress: auctionHouseKey,
          tokenMint: ntf.mintAddress,
          tokenAccount: ntf.id,
          price: value,
          expiry: expiry
        })
        .catch((error: any) => {
          hideAllModal();
          console.log('tx error', error);
        });

      handleProcesss(tx, 'listNow');
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [ntf, walletAddress, priceUpdated, auctionHouseKey, expiry, handleProcesss]
  );

  const handleAddListing = useCallback(
    (value: number | null) => {
      if (!value) return;
      setPriceUpdated(value);
      if (floorPrice && +floorPrice > value) {
        setIsLowerPriceModal(true);
      } else {
        handleProcessAddListing(value);
      }
    },
    [floorPrice, handleProcessAddListing]
  );

  const handleChangePrice = (value: number | null) => {
    handleAddListing(value);
  };

  const handleCancelListing = useCallback(async () => {
    closeSnackbar();

    if (!ntf || !walletAddress || !auctionHouseKey || !expiry) {
      hideAllModal();
      console.log('missing data: ntf or wallet Address or price or auctionHouseKey or expiry', {
        ntf,
        walletAddress,
        auctionHouseKey,
        expiry,
        sellerReferral
      });
      return;
    }

    const tx: ITransaction = await collectionStore.getInstructionsSellCancel({
      seller: ntf.owner,
      auctionHouseAddress: auctionHouseKey,
      tokenMint: ntf.mintAddress,
      tokenAccount: ntf.id,
      price: ntf.price,
      sellerReferral: sellerReferral,
      expiry: expiry
    });

    handleProcesss(tx, 'cancelListing');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ntf, walletAddress, auctionHouseKey, expiry, sellerReferral, handleProcesss]);

  const handleAcceptHighestOffer = () => {
    setIsAcceptOfferModal(true);
  };

  const handleAcceptOfferProcess = () => {
    // TODO
  };

  const handleReloadData = useCallback(async () => {
    if (mintAddress) {
      getNTF(mintAddress);
      getNTFActivities(mintAddress);
      if (collectionName) {
        getMoreNTFs(collectionName);
      }
      getBiddings(mintAddress);
      getNTFAttributes(mintAddress);
      getCustomAttributes(mintAddress);
      getNTFAuctions(mintAddress);
      if (collectionName) {
        getEscrowStats(collectionName);
      }
      if (publicKey) {
        getMainWallet(connection, publicKey);
      }
      if (auctionHouseKey) {
        getEscrowBalance(walletAddress, auctionHouseKey);
      }
    }
  }, [
    mintAddress,
    getNTF,
    getNTFActivities,
    collectionName,
    getBiddings,
    getNTFAttributes,
    getCustomAttributes,
    getNTFAuctions,
    publicKey,
    auctionHouseKey,
    getMoreNTFs,
    getEscrowStats,
    getMainWallet,
    connection,
    getEscrowBalance,
    walletAddress
  ]);

  const handleClose = () => {
    hideAllModal();
  };

  // seo info
  useEffect(() => {
    if (ntf) {
      handleSetSeo({
        title: `${ntf.title}`,
        description: ntf.content,
        keywords: '',
        og: {
          title: `${ntf.title}`,
          description: ntf.content,
          image: ntf.img
        }
      });
    }
  }, [ntf, handleSetSeo]);

  // if (!ntf) {
  //   return <PageLoading />;
  // }

  const ntfInfoProps = {
    ntf,
    activities,
    highestOffer: offerData.highestOffer || null,
    percentHighestOffer: offerData.percentHighestOffer || null,
    type: offerData.actionType,
    auctions,
    biddings,
    walletAddress,
    ntfStats,
    customAttrs,
    handleReloadData,
    handleBuyNow,
    handleMakeOffer,
    handleCancelOffer,
    handleAddListing,
    handleChangePrice,
    handleCancelListing,
    handleAcceptHighestOffer
  };

  const mainWalletValue = +(formatPriceToSOL(mainWallet, 6) || 0);
  const makeOfferProps = {
    ntfTitle: ntf?.title || '',
    collectionName: ntf?.collectionName || '',
    buyNowPrice: ntf?.price ?? null,
    minOffer: ntf?.price ? ntf.price * 0.5 : null,
    mainWallet: mainWalletValue,
    biddingWallet: escrowBlance?.balance || 0,
    open: isMakeOfferModal,
    handleMakeOffer: handleProcessMakeOffer,
    handleClose
  };

  const cancelOfferProps = {
    title: ntf?.title || '',
    price: ntf?.price || '',
    offerPrice: offerPrice,
    open: isCancelOfferModal,
    handleCancelOffer: handleCancelOfferProcess,
    handleClose
  };

  return (
    <>
      <Wrapper>
        <RowTop>
          <NTFInfo {...ntfInfoProps} />
        </RowTop>
        <Row>
          <NTFActivities activities={activities} type={ENTFActivityType.TAB} />
        </Row>
        <Row>
          <NTFMoreCollection ntfs={ntfs} mintAddress={mintAddress} />
        </Row>
      </Wrapper>
      <LoadingDialog open={isLoadingModal} />
      <MakeOfferDialog {...makeOfferProps} />
      <LowListingDialog
        floorPrice={floorPrice}
        price={priceUpdated}
        open={isLowerPriceModal}
        handleCancel={handleClose}
        handleContinue={() => handleProcessAddListing(priceUpdated)}
      />
      <CancelOfferDialog {...cancelOfferProps} />
      <AcceptOfferDialog
        offerPrice={offerPrice}
        open={isAcceptOfferModal}
        handleAcceptOffer={handleAcceptOfferProcess}
        handleClose={handleClose}
      />
    </>
  );
};

export default observer(NTFDetail);
