import { FC, useMemo } from 'react';
import Terms from '../../shared/terms';
import { CloseIcon } from '../../shared/icons';
import {
  CustomDialog,
  CustomDialogTitle,
  CustomDialogContent,
  Content,
  Title,
  CloseBtn,
  Description,
  ActionWrapper,
  InputWrapper,
  Input,
  ActionBtn,
  TermsWrapper
} from './Styled';

interface IAcceptOfferDialogProps {
  open: boolean;
  offerPrice: number | null;
  handleAcceptOffer: () => void;
  handleClose: () => void;
}

export const AcceptOfferDialog: FC<IAcceptOfferDialogProps> = (props) => {
  const { offerPrice, open, handleClose, handleAcceptOffer } = props;

  const modalTitleEl = useMemo(() => {
    return (
      <CustomDialogTitle>
        <Title>Accept offer</Title>
        <CloseBtn onClick={() => handleClose()}>
          <CloseIcon />
        </CloseBtn>
      </CustomDialogTitle>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const descriptionEl = useMemo(() => {
    return (
      <Description>
        {`Please type ${offerPrice} SOL to confirm that you accept the bid at ${offerPrice} SOL, which is 64.36% of listing price`}
      </Description>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offerPrice]);

  const actionsEl = useMemo(() => {
    return (
      <>
        <ActionWrapper>
          <InputWrapper>
            <Input type={'number'} min='0' />
          </InputWrapper>
          <ActionBtn onClick={() => handleAcceptOffer()} disabled>
            OK
          </ActionBtn>
        </ActionWrapper>
      </>
    );
  }, [handleAcceptOffer]);

  const termEl = useMemo(() => {
    return (
      <TermsWrapper>
        <Terms text={`By clicking "Cancel offer"`} />
      </TermsWrapper>
    );
  }, []);

  return (
    <CustomDialog open={open} aria-describedby='make-offer-dialog-description' className='make-offer-dialog'>
      {modalTitleEl}
      <CustomDialogContent id='make-offer-dialog-description'>
        <Content>
          {descriptionEl}
          {actionsEl}
          {termEl}
        </Content>
      </CustomDialogContent>
    </CustomDialog>
  );
};

export default AcceptOfferDialog;
