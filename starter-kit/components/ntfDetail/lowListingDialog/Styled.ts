import styled from 'styled-components';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { primaryDialog, primaryDialogContent, primaryDialogTitle, primaryContainedButton } from '../../../theme/utility/mixin';
// import mediaDevice from '../../../theme/utility/mediaDevice';
// import { StyledComponentProps } from '../../../theme/theme';
// import { NewPriceTagIcon } from '../../shared/icons';

export const CustomDialog = styled(Dialog)`
  ${primaryDialog}
`;

export const CustomDialogContent = styled(DialogContent)`
  ${primaryDialogContent}
  font-size: 1rem;
`;

export const Content = styled.div`
  padding: 0 16px 0 0;
`;

export const Title = styled.h2`
  ${primaryDialogTitle}
  text-align: center;
  margin: 0 0 24px;
`;

export const Description = styled.p`
  margin: 0 0 0.75rem;
  font-size: 1rem;
  text-align: center;
  color: #fff;
`;

export const Note = styled.div`
  text-align: center;
  margin: 0 0 24px;
`;

export const ActionsWrapper = styled.div`
  display: flex;
  justify-content: center;

  button {
    margin-right: 24px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const ActionBtn = styled.button`
  ${primaryContainedButton}
  white-space: nowrap;
  min-height: 45px;
`;
