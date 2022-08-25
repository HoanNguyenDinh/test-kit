import { FC, useEffect, useState } from 'react';
import PriceWithIcon from '../../shared/priceWithIcon';
import Terms from '../../shared/terms';
import { IReviewDialog, IUpdatedReviewDialog, IMyListingDialogAction, IMyListingDialogMessage } from '../../../../base/interfaces/common';
import { getImageUrl } from '../../../../base/utils/image.helper';
import { formatRoundPrice } from '../../../../base/utils/price.helper';
import { EMyListingActionType, EMessageStatus } from '../../../../base/constants/collection';
import { CloseIcon, TickIcon } from '../../shared/icons';
import {
  CustomDialog,
  CustomDialogTitle,
  CloseBtn,
  CustomDialogContent,
  Title,
  ActionsWrapper,
  TermsWrapper,
  Actions,
  ProgressBtn,
  ActionBtn,
  CancelBtn,
  List,
  Item,
  InfoWrapper,
  ImageWrapper,
  Image,
  Info,
  ListTitle,
  ListTitleItem,
  ItemTitleName,
  ItemTitleAction,
  Name,
  Price,
  Status,
  CircularProgressIcon,
  InfoActions,
  PriceInput,
  Message
} from './Styled';

interface Props {
  title: string;
  open: boolean;
  items: IReviewDialog[];
  action: IMyListingDialogAction;
  messages: IMyListingDialogMessage | null;
  updatedItems: IUpdatedReviewDialog[];
  handleClose: () => void;
  type?: string;
  handleUpdate: (data: IUpdatedReviewDialog) => void;
  handleContinueToListing: () => void;
}

export const ReviewDialog: FC<Props> = (props) => {
  const {
    title,
    open,
    items = [],
    action,
    messages = null,
    updatedItems,
    handleClose,
    type = '',
    handleUpdate,
    handleContinueToListing
  } = props;
  const [changedItems, setChangedItems] = useState<IUpdatedReviewDialog[]>(updatedItems);

  const haveMessage = messages && messages?.messages && messages.messages.length > 0;
  const isLoading = messages && messages?.status === EMessageStatus.LOADING;
  const isError = messages && messages?.status === EMessageStatus.ERROR;
  const isSuccess = messages && messages?.status === EMessageStatus.SUCCESS;
  const isDefault = !messages;

  const haveUpdatedItems = changedItems && changedItems.length > 0;

  const isListing = type === EMyListingActionType.ADD_LISTING;
  const isUpdate = type === EMyListingActionType.UPDATE_LISTING;
  const isCancelOffer = type === EMyListingActionType.CANCEL_OFFER;

  const handleChange = (e: any, item: IReviewDialog) => {
    handleUpdate({
      ...item,
      updatedPrice: e.target.value
    });
  };

  useEffect(() => {
    setChangedItems(updatedItems);
  }, [updatedItems, setChangedItems]);

  return (
    <CustomDialog open={open} aria-describedby='review-dialog-description' className='review-dialog'>
      <CustomDialogContent id='review-dialog-description'>
        <CustomDialogTitle>
          <Title>{title}</Title>
          <CloseBtn onClick={() => handleClose()}>
            <CloseIcon />
          </CloseBtn>
        </CustomDialogTitle>
        {haveMessage && messages.messages.map((item, index) => <Message key={`messages-${index}`}>{item}</Message>)}
        <ListTitle>
          <ListTitleItem>
            <InfoWrapper>
              <ItemTitleName>Okay Bear</ItemTitleName>
            </InfoWrapper>
            <InfoActions>
              <ItemTitleAction>List Price</ItemTitleAction>
            </InfoActions>
          </ListTitleItem>
        </ListTitle>
        <List>
          {items.map((item: IReviewDialog, index: number) => (
            <Item key={`review-dialog-${index}`}>
              <InfoWrapper>
                <ImageWrapper>
                  <Image src={getImageUrl(item.image, { w: 100, h: 100 })} alt={item.name} />
                </ImageWrapper>
                <Info>
                  <Name>{item.name}</Name>
                  {(isListing || isUpdate) && <Price>{formatRoundPrice(item.price, 2)} SOL Floor</Price>}
                </Info>
              </InfoWrapper>
              <InfoActions>
                {(isListing || isUpdate) && <PriceInput placeholder='0.00' type='number' onChange={(e: any) => handleChange(e, item)} />}
                {isCancelOffer && <PriceWithIcon price={item.price} />}
                {!isDefault && (
                  <Status>
                    {isLoading && <CircularProgressIcon size={12} thickness={7} />}
                    {isError && <CloseIcon className={'error'} />}
                    {isSuccess && <TickIcon className={'success'} />}
                  </Status>
                )}
              </InfoActions>
            </Item>
          ))}
        </List>
      </CustomDialogContent>
      <ActionsWrapper>
        <TermsWrapper>
          <Terms text={`By clicking "${action.defaultText}"`} />
        </TermsWrapper>
        <Actions>
          {isListing && (isSuccess || isError) && (
            <>
              <ActionBtn onClick={() => handleContinueToListing()}>{action.completeText}</ActionBtn>
              <CancelBtn onClick={() => handleClose()}>Return to profile</CancelBtn>
            </>
          )}
          {(isCancelOffer || isUpdate) && (isSuccess || isError) && (
            <ProgressBtn onClick={() => handleClose()}>{action.completeText}</ProgressBtn>
          )}
          {isLoading && <ProgressBtn disabled>{action.progressText}</ProgressBtn>}
          {isDefault && (
            <ActionBtn onClick={() => action.handle()} disabled={(isListing || isUpdate) && !haveUpdatedItems}>
              {action.defaultText}
            </ActionBtn>
          )}
        </Actions>
      </ActionsWrapper>
    </CustomDialog>
  );
};

export default ReviewDialog;
