import styled from 'styled-components';
import { NewPriceTagIcon } from '../../shared/icons/index';
import { pageTitle, resetList, h5 } from '../../../theme/utility/mixin';
import mediaDevice from '../../../theme/utility/mediaDevice';

// Container

export const Container = styled.div`
  margin: 0 0 24px;
  display: flex;
  flex-direction: column;

  @media ${mediaDevice.md} {
    margin: 89px 0 60px;
    flex-direction: row;
  }
`;

export const ColLeft = styled.div`
  width: 182px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 91px;
  height: 182px;

  @media ${mediaDevice.md} {
    margin: 45px auto 24px;
  }
`;

export const ColRight = styled.div`
  flex: 1;
  text-align: center;

  @media ${mediaDevice.md} {
    padding: 0 0 0 48px;
    text-align: left;
  }

  @media ${mediaDevice.ml} {
    padding: 0 0 0 102px;
  }
`;

export const PageTitle = styled.h1`
  ${pageTitle}
  margin: 22px auto 20px;
`;

// Avatar Image
export const ImageWrapper = styled.div`
  overflow: hidden;
  margin: 0;
  flex-shrink: 0;
  width: calc(100% + 8px);
  height: calc(100% + 8px);
  text-align: center;
  font-size: 0;
  line-height: 0;
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
  padding-bottom: 100%;
  border-radius: 50%;
  margin: -4px;
`;

export const ImageInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

// Info Listing
export const List = styled.ul`
  ${resetList}
  display: flex;
  flex-wrap: wrap;
  margin: 0 -7.5px;

  @media ${mediaDevice.sm} {
    margin: 0 auto;
    max-width: 524px;
  }

  @media ${mediaDevice.md} {
    margin: 0 -7.5px;
  }
`;

export const Item = styled.li`
  padding: 0 7.5px;
  margin: 0 0 15px;
  display: flex;
  width: 50%;
`;

export const InfoWrapper = styled.div`
  ${h5}
  background: var(--box-info-bg-color);
  border-radius: var(--box-info-radius);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 15px;
  min-height: 40px;
`;

export const InfoLabel = styled.span`
  padding: 0 5px 0 0;
  color: var(--box-info-label-color);
`;

export const InfoValue = styled.span`
  padding: 0 0 0 5px;
  display: flex;
  align-items: center;
  color: var(--box-info-value-color);

  svg {
    margin: 0 4px 0 0;
    width: 12px;
    height: 12px;
  }
`;

export const PriceIcon = styled(NewPriceTagIcon)``;
