import styled from 'styled-components';
import { StyledComponentProps } from '../../../theme/theme';

export const BreadcrumbWrapper = styled.div`
  width: 100%;
  max-width: 1312px;
  margin: 0 auto;
  a {
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: ${(props: StyledComponentProps) => props.theme.color.white};
    opacity: 0.5;
    color: #886f55;
    &:hover {
      color: #886f55;
    }
    svg {
      margin-right: 12px;
    }
  }
`;
