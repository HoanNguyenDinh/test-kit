import styled from 'styled-components';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { primaryDialog, primaryDialogContent } from '../../../theme/utility/mixin';
import CircularProgress from '@mui/material/CircularProgress';

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

export const Progress = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 12px;

  > span {
    margin: 0 5px 0 0;
    color: #fff;
  }
`;

export const CircularProgressIcon = styled(CircularProgress).attrs({
  sx: {}
})``;

export const Description = styled.p`
  margin: 0 0 15px;
`;

export const Note = styled.div`
  background: rgba(145, 107, 70, 0.1);
  padding: 16px;
  border-radius: 8px;
`;

export const Link = styled.a``;
