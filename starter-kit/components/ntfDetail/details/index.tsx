import { FC, useEffect, useState, useMemo } from 'react';
import { observer } from 'mobx-react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { EControllers } from '../../../../base/constants/common';
import { formatDotDotDot } from '../../../../base/utils/text.helper';
import { DetailIcon } from '../../shared/icons/index';
import SolanaIcon from '../../../assets/icons/solanaIcon.svg';
import ExplorerIcon from '../../../assets/icons/explorerIcon.svg';
import Collapse from '../../shared/collapse';
import { Content, LineBetween, Label, Value, Image, TooltipEl, LBInfoWrapper, LBInfo, Link } from './Styled';

interface NTFDetailsProps {
  mintAddress: string;
  tokenAddress: string;
  owner: string;
  sellerFree: number | string;
}

const NTFDetails: FC<NTFDetailsProps> = (props) => {
  const { mintAddress, tokenAddress, owner, sellerFree } = props;
  const [copiedMintAdress, setCopiedMintAdress] = useState<boolean>(false);
  const [copiedTokenAddress, setCopiedTokenAddress] = useState<boolean>(false);
  const [copiedOwner, setCopiedOwner] = useState<boolean>(false);

  const handCopyMintAdress = () => {
    setCopiedMintAdress(!copiedMintAdress);
  };

  const handCopyTokenAddress = () => {
    setCopiedTokenAddress(!copiedTokenAddress);
  };

  const handCopyOwner = () => {
    setCopiedOwner(!copiedOwner);
  };

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      const refMintAdress = e.target.closest('.copiedMintAddress');
      const refTockenAddress = e.target.closest('.copiedTockenAddress');
      const refOwner = e.target.closest('.copiedOwner');
      if (!refMintAdress) {
        setCopiedMintAdress(false);
      }
      if (!refTockenAddress) {
        setCopiedTokenAddress(false);
      }
      if (!refOwner) {
        setCopiedOwner(false);
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, []);

  const minAddressEl = useMemo(() => {
    if (mintAddress) {
      const mintAddressSum = formatDotDotDot(mintAddress);

      return (
        <LineBetween>
          <Label>Mint address</Label>
          <Value>
            <TooltipEl title='Open in solscan' placement='top' leaveDelay={0} classes={{ tooltip: 'MuiTooltip-tooltip-detail' }}>
              <Link href={EControllers.SOLSCAN.replace(':mintAddress', mintAddress)} title='' target='_blank'>
                <Image src={SolanaIcon} title='Solana Icon' />
              </Link>
            </TooltipEl>
            <TooltipEl title='Open in explorer' placement='top' leaveDelay={0} classes={{ tooltip: 'MuiTooltip-tooltip-detail' }}>
              <Link href={EControllers.EXPLORER.replace(':mintAddress', mintAddress)} title='' target='_blank'>
                <Image className='explorer' src={ExplorerIcon} title='Explorer Icon' />
              </Link>
            </TooltipEl>
            <LBInfoWrapper title={mintAddress} className='copiedMintAddress'>
              <CopyToClipboard text={mintAddress} onCopy={handCopyMintAdress}>
                <TooltipEl
                  title='Copied'
                  placement='top'
                  leaveDelay={0}
                  classes={{ tooltip: 'MuiTooltip-tooltip-detail' }}
                  open={copiedMintAdress}
                  disableHoverListener={true}>
                  <LBInfo>{mintAddressSum}</LBInfo>
                </TooltipEl>
              </CopyToClipboard>
            </LBInfoWrapper>
          </Value>
        </LineBetween>
      );
    }
    return <></>;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mintAddress, copiedMintAdress]);

  const tokenAddressEl = useMemo(() => {
    if (tokenAddress) {
      const tokenAddressSum = formatDotDotDot(tokenAddress);
      return (
        <LineBetween>
          <Label>Token address</Label>
          <Value>
            <TooltipEl title='Open in solscan' placement='top' leaveDelay={0} classes={{ tooltip: 'MuiTooltip-tooltip-detail' }}>
              <Link href={EControllers.SOLSCAN.replace(':mintAddress', tokenAddress)} title='' target='_blank'>
                <Image src={SolanaIcon} title='Solana Icon' />
              </Link>
            </TooltipEl>
            <TooltipEl title='Open in explorer' placement='top' leaveDelay={0} classes={{ tooltip: 'MuiTooltip-tooltip-detail' }}>
              <Link href={EControllers.EXPLORER.replace(':mintAddress', tokenAddress)} title='' target='_blank'>
                <Image className='explorer' src={ExplorerIcon} title='Explorer Icon' />
              </Link>
            </TooltipEl>
            <LBInfoWrapper title={tokenAddress} className='copiedTockenAddress'>
              <CopyToClipboard text={tokenAddress} onCopy={handCopyTokenAddress}>
                <TooltipEl
                  title='Copied'
                  placement='top'
                  leaveDelay={0}
                  classes={{ tooltip: 'MuiTooltip-tooltip-detail' }}
                  open={copiedTokenAddress}
                  disableHoverListener={true}>
                  <LBInfo>{tokenAddressSum}</LBInfo>
                </TooltipEl>
              </CopyToClipboard>
            </LBInfoWrapper>
          </Value>
        </LineBetween>
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tokenAddress, copiedTokenAddress]);

  const ownerEl = useMemo(() => {
    if (owner) {
      const ownerSum = formatDotDotDot(owner);
      return (
        <LineBetween>
          <Label>Owner</Label>
          <Value>
            <TooltipEl title='Open in solscan' placement='top' leaveDelay={0} classes={{ tooltip: 'MuiTooltip-tooltip-detail' }}>
              <Link href={EControllers.SOLSCAN.replace(':mintAddress', owner)} title='' target='_blank'>
                <Image src={SolanaIcon} title='Solana Icon' />
              </Link>
            </TooltipEl>
            <TooltipEl title='Open in explorer' placement='top' leaveDelay={0} classes={{ tooltip: 'MuiTooltip-tooltip-detail' }}>
              <Link href={EControllers.EXPLORER.replace(':mintAddress', owner)} title='' target='_blank'>
                <Image className='explorer' src={ExplorerIcon} title='Explorer Icon' />
              </Link>
            </TooltipEl>

            <LBInfoWrapper title={owner} className='copiedOwner'>
              <CopyToClipboard text={owner} onCopy={handCopyOwner}>
                <TooltipEl
                  title='Copied'
                  placement='top'
                  leaveDelay={0}
                  classes={{ tooltip: 'MuiTooltip-tooltip-detail' }}
                  open={copiedOwner}
                  disableHoverListener={true}>
                  <LBInfo>{ownerSum}</LBInfo>
                </TooltipEl>
              </CopyToClipboard>
            </LBInfoWrapper>
          </Value>
        </LineBetween>
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [owner, copiedOwner]);

  const selerFreeEl = useMemo(() => {
    const sellerFreeValue = sellerFree ? +sellerFree / 100 + '%' : '-';
    return (
      <LineBetween>
        <Label>Artist Royalties</Label>
        <Value>{sellerFreeValue}</Value>
      </LineBetween>
    );
  }, [sellerFree]);

  const transactionFreeEl = useMemo(() => {
    return (
      <LineBetween>
        <Label>Transaction Fee</Label>
        <Value>2%</Value>
      </LineBetween>
    );
  }, []);

  const statusEl = useMemo(() => {
    return (
      <LineBetween>
        <Label>Listing/Bidding/Cancel</Label>
        <Value>Free</Value>
      </LineBetween>
    );
  }, []);

  return (
    <Collapse title='Details' icon={<DetailIcon />} isOpen={true}>
      <Content>
        {minAddressEl}
        {tokenAddressEl}
        {ownerEl}
        {selerFreeEl}
        {transactionFreeEl}
        {statusEl}
      </Content>
    </Collapse>
  );
};

export default observer(NTFDetails);
