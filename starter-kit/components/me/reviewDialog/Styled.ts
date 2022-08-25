import styled from 'styled-components';
import {
  resetList,
  primaryDialog,
  primaryDialogContent,
  primaryDialogTitleWrapper,
  primaryDialogTitle,
  primaryDialogCloseBtn,
  primaryDialogMessage,
  primaryDialogMeNTFName,
  primaryDialogMeNTFPrice,
  primaryDialogMeListTitle,
  primaryContainedButton,
  primaryOutlinedButton,
  customScrollY,
  baseInput
} from '../../../theme/utility/mixin';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import CircularProgress from '@mui/material/CircularProgress';

export const CustomDialog = styled(Dialog)`
  ${primaryDialog}
`;

export const CustomDialogContent = styled(DialogContent)`
  ${primaryDialogContent}
`;

export const CustomDialogTitle = styled.div`
  ${primaryDialogTitleWrapper}
`;

export const Title = styled.h2`
  ${primaryDialogTitle}
  margin: 0 0 20px;
`;

export const CloseBtn = styled.button`
  ${primaryDialogCloseBtn}
`;

export const ActionsWrapper = styled.div`
  border-top: var(--dialog-actions-border);
  padding: 20px 0 0;
  margin: 0 16px 0 0;
`;

export const TermsWrapper = styled.p`
  font-weight: var(--dialog-actions-weight);
  font-size: var(--dialog-actions-size);
  line-height: var(--dialog-actions-line-height);
  color: var(--dialog-actions-color);
  margin: 0 0 10px;

  a {
    color: var(--dialog-terms-link-color);

    &:hover {
      color: var(--dialog-terms-link-color);
    }
  }
`;

export const Actions = styled.div`
  color: var(--dialog-actions-color);
  text-align: right;
`;

export const ActionBtn = styled.button`
  ${primaryContainedButton}
  margin-right: 16px;

  &:last-child {
    margin-right: 0;
  }
`;

export const CancelBtn = styled.button`
  ${primaryOutlinedButton}
`;

export const ProgressBtn = styled.button`
  ${primaryContainedButton}
  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

export const ListTitle = styled.ul`
  ${resetList}
  ${primaryDialogMeListTitle}
  margin: 0 16px 17px 0;
  padding: 0 0 7px;
`;

export const ListTitleItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
`;

export const ItemTitleName = styled.div`
  padding-left: 120px;
`;

export const ItemTitleAction = styled.div`
  min-width: 132px;
`;

export const Message = styled.div`
  ${primaryDialogMessage}
  margin: 0 0 24px;
`;

export const List = styled.ul`
  ${resetList}
  ${customScrollY}
  margin: 0 0 15px;
  max-height: 16rem;
  padding: 0 16px 0 0;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 0 20px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex: auto;
  flex-direction: row;
`;

export const ImageWrapper = styled.div`
  font-size: 0;
  line-height: 0;
  border-radius: var(--dialog-ntf-image-radius);
  overflow: hidden;
`;

export const Image = styled.img``;

export const Info = styled.div`
  padding: 0 20px;
  flex: auto;
`;

export const Name = styled.h3`
  ${primaryDialogMeNTFName}
  margin: 0 0 5px;
`;

export const Price = styled.div`
  ${primaryDialogMeNTFPrice}
`;

export const InfoActions = styled.div`
  display: flex;
  align-items: center;
  width: 132px;
`;

export const Status = styled.div`
  margin-left: 5px;

  .error {
    width: 10px;
    height: 10px;
    path {
      stroke: var(--dialog-message-error-color);
    }
  }

  .success {
    width: 12px;
    height: 12px;
  }
`;

export const CircularProgressIcon = styled(CircularProgress).attrs({
  sx: {
    color: '#989caa'
  }
})``;

export const PriceInput = styled.input`
  ${baseInput}
  width: 100%;
  text-align: center;
`;

export const RemoveBtn = styled.button``;
