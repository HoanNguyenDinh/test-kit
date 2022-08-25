import styled from 'styled-components';
import { primaryOutlinedButton } from '../../../theme/utility/mixin';
import { StyledComponentProps } from '../../../theme/theme';
import mediaDevice from '../../../theme/utility/mediaDevice';

export const Wrapper = styled.div`
  position: relative;
  padding-bottom: 70px;

  &.grid-five {
    .grid {
      @media ${mediaDevice.xl} {
        margin: 0 -10px;
      }
    }
    .ntf-item {
      @media ${mediaDevice.xl} {
        flex: 0 0 20%;
        width: 20%;
        padding: 0 10px;
        margin: 0 0 20px;
      }
    }
  }

  .grid {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 -10px;
    padding-top: 5px;

    @media ${mediaDevice.ml} {
      margin: 0 -26px;
    }
  }

  .ntf-item {
    @media ${mediaDevice.xs} {
      flex: 0 0 50%;
      width: 50%;
    }

    @media ${mediaDevice.sm} {
      flex: 0 0 33.33%;
      width: 33.33%;
    }

    @media ${mediaDevice.md} {
      flex: 0 0 50%;
      width: 50%;
    }

    @media ${mediaDevice.lg} {
      flex: 0 0 33.33%;
      width: 33.33%;
    }

    @media ${mediaDevice.xl} {
      flex: 0 0 25%;
      width: 25%;
    }

    @media ${mediaDevice.xgl} {
    }
  }
`;

export const Item = styled.div`
  flex: 0 0 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  margin-bottom: 20px;

  @media ${mediaDevice.ml} {
    padding: 0 26px;
    margin-bottom: 54px;
  }
`;

export const BoxLoading = styled.div`
  text-align: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 15px;

  svg {
    color: #916b46;
  }
`;

export const Total = styled.div`
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  color: ${(props: StyledComponentProps) => props.theme.color.okay_bear.t1};
`;

export const SeeAllBtn = styled.button`
  ${primaryOutlinedButton}
`;
