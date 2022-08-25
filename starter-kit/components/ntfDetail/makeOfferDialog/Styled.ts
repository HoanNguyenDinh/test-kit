import styled from 'styled-components';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import {
  resetList,
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

export const Options = styled.ul`
  ${resetList}
`;

export const Option = styled.li`
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 16px;
  margin: 0 0 1.5rem;
  cursor: pointer;
  min-height: 93px;

  &.selected {
    border-color: rgba(145, 107, 70, 0.1);
    background: rgba(145, 107, 70, 0.1);

    p {
      color: #fff;
    }
  }

  p {
    &:last-child {
      margin: 0;
    }
  }
`;

export const OptionTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  margin: 0 0 5px;
`;

export const OptionInfo = styled.p`
  color: rgba(255, 255, 255, 0.5);
`;

export const ActionWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  margin: 0 0 2rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: auto;
  padding: 0 1rem 0 0;
`;

export const Input = styled.input`
  ${baseInput}
  height: 48px;
  width: 100%;
`;

export const Error = styled.span`
  color: rgba(187, 151, 114, 1);
  margin: 10px 0 0;
`;

export const MakeOfferBtn = styled.button`
  ${primaryContainedButton}
  white-space: nowrap;
  min-height: 48px;
`;

export const Info = styled.div`
  margin: 0 0 1rem;
`;

export const Name = styled.h3`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;

export const ColletionTitle = styled.p`
  font-weight: 700;
  line-height: 21px;
  color: rgba(187, 151, 114, 1);
`;

export const Prices = styled.ul`
  ${resetList}
  border-top: 1px solid rgba(255,255,255,0.2);
  padding: 1rem 0;
`;

export const PriceItem = styled.li`
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  padding: 3px 0;

  &.buyNow-price {
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const Label = styled.span`
  display: flex;
  align-items: center;
`;

export const PriceInfo = styled.span``;

export const Sub = styled.span`
  display: inline-flex;
  white-space: nowrap;
  color: rgba(0, 219, 128, 1);
  margin-left: 8px;

  &.sub {
    color: rgba(187, 151, 114, 1);
  }
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
