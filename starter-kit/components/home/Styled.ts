import styled from 'styled-components';
import mediaDevice from '../../theme/utility/mediaDevice';
import { StyledComponentProps } from '../../theme/theme';

export const HomeWrapper = styled.div`
  margin: 160px 0;
  @media ${mediaDevice.max_ml} {
    margin: 50px 0;
  }
`;

export const OkayDesktopTitle = styled.div`
  display: block;
  @media ${mediaDevice.max_ml} {
    display: none;
  }
`;

export const OkayMobileTitle = styled.div`
  display: none;
  @media ${mediaDevice.max_ml} {
    display: block;
  }
`;

export const HoverTitle = styled.div`
  min-height: 50px;
`;

export const HoverTitleItem = styled.div`
  color: ${(props: StyledComponentProps) => props.theme.color.okay_bear.secondary};
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  display: none;
`;

export const ColourMobileOkay = styled.div`
  display: flex;
  justify-content: center;
`;

export const ColourOkay = styled.div`
  margin: 0 auto;
  position: relative;
  display: flex;
  width: 800px;
  height: 420px;
  max-width: 100%;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: stretch;
  -webkit-align-items: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  @media ${mediaDevice.sxlg} {
    width: 860px;
    height: 480px;
  }
`;

export const ColourOkayItem = styled.div`
  &.o-okay {
    margin-right: -25px;
    img {
      height: 100%;
    }
  }
  &.k-okay {
    margin-right: -47px;
    img {
      height: 98%;
    }
  }
  &.a-okay {
    margin-left: -4%;
    img {
      height: 98%;
    }
  }
  &.y-okay {
    img {
      height: 98%;
      margin-left: 30px;
      &.bears {
        position: absolute;
        left: auto;
        top: auto;
        right: 3.5%;
        bottom: 2%;
        width: 76px;
        height: 201px;
      }
    }
  }
`;

export const ColourOkayItemImage = styled.img`
  @media ${mediaDevice.max_sm} {
    max-width: 110%;
  }
  @media ${mediaDevice.max_md} {
    max-width: 110%;
    max-width: 95%;
  }
  @media ${mediaDevice.max_ml} {
    max-height: 70vh;
  }
`;

export const BlackOkay = styled.div`
  margin: 0 auto;
  position: absolute;
  display: flex;
  width: 800px;
  height: 420px;
  max-width: 100%;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: stretch;
  -webkit-align-items: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  @media ${mediaDevice.sxlg} {
    width: 860px;
    height: 480px;
  }
`;

export const BlackOkayItem = styled.div`
  &.o-okay {
    margin-right: -25px;
    img {
      height: 100%;
      mix-blend-mode: multiply;
      &:hover {
        opacity: 0;
      }
    }
  }
  &.k-okay {
    margin-right: -47px;
    img {
      height: 98%;
      mix-blend-mode: multiply;
      &:hover {
        opacity: 0;
      }
    }
  }

  &.a-okay {
    margin-left: -4%;
    img {
      mix-blend-mode: multiply;
      height: 98%;
      &:hover {
        opacity: 0;
      }
    }
  }

  &.y-okay {
    img {
      height: 98%;
      mix-blend-mode: multiply;
      margin-left: 30px;
      &:hover {
        opacity: 0;
      }
    }
  }
`;

export const BlackOkayItemImage = styled.img``;
