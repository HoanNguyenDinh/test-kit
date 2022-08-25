import styled from 'styled-components';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import {
  primaryDialog,
  primaryDialogContent,
  primaryDialogTitleWrapper,
  primaryDialogTitle,
  primaryDialogCloseBtn,
  baseInput,
  primaryContainedButton
} from '../../../theme/utility/mixin';
// import mediaDevice from '../../../theme/utility/mediaDevice';
// import { StyledComponentProps } from '../../../theme/theme';
// import { NewPriceTagIcon } from '../../shared/icons';

export const CustomDialog = styled(Dialog)`
  ${primaryDialog}
`;

export const CustomDialogContent = styled(DialogContent)`
  ${primaryDialogContent}
`;

export const CustomDialogTitle = styled.div`
  ${primaryDialogTitleWrapper}
`;

export const Content = styled.div`
  padding: 0 16px 0 0;
`;

export const Title = styled.h2`
  ${primaryDialogTitle}
  margin: 0 0 2rem;
`;

export const CloseBtn = styled.button`
  ${primaryDialogCloseBtn}
`;

export const Description = styled.p`
  font-size: 1rem;
  margin: 0 0 2rem;
  color: #fff;
`;

export const ActionWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  flex-direction: column;
  margin: 0 0 2rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: auto;
  width: 100%;
`;

export const Input = styled.input`
  ${baseInput}
  height: 48px;
  width: 100%;
  margin-bottom: 24px;
`;

export const ActionBtn = styled.button`
  ${primaryContainedButton}
  white-space: nowrap;
  min-height: 48px;
  width: 100%;
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
