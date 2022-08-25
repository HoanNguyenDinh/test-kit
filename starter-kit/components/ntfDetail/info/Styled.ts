import styled from 'styled-components';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import Tooltip from '@mui/material/Tooltip';
import { MarketPlaceIcon, NewPriceTagIcon } from '../../shared/icons/index';
import { secondInput, primaryContainedButton, primaryOutlinedButton } from '../../../theme/utility/mixin';
import mediaDevice from '../../../theme/utility/mediaDevice';

export const Row = styled.div`
  @media ${mediaDevice.ml} {
    display: flex;
    flex-flow: row wrap;
    margin: var(--detail-row-margin);
  }
`;

export const Col = styled.div`
  @media ${mediaDevice.ml} {
    flex: 1 1 auto;

    &.col-left {
      max-width: var(--detail-colLeft-width);
      padding: var(--detail-colLeft-padding);
    }

    &.col-right {
      max-width: var(--detail-colRight-width);
      padding: var(--detail-colRight-padding);
    }
  }
`;

export const ImageSection = styled.div`
  max-width: 100%;
`;

export const InfoWrapper = styled.div``;

export const Title = styled.h1`
  font-family: var(--detail-title-font);
  font-weight: var(--detail-title-weight);
  font-size: var(--detail-title-size);
  line-height: var(--detail-title-line-height);
  letter-spacing: var(--detail-title-spacing);
  text-transform: var(--detail-title-transform);
  color: var(--detail-title-color);
  margin: 0 0 20px;

  span {
    color: var(--detail-title-span-color);
  }
`;

export const MarketPlaceShare = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 30px;
`;

export const ReloadWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-right: 20px;
`;

export const Rarity = styled.div`
  background: var(--detail-moonrank-bg);
  border-radius: var(--detail-moonrank-radius);
  font-weight: var(--detail-moonrank-weight);
  font-size: var(--detail-moonrank-size);
  line-height: var(--detail-moonrank-line-height);
  letter-spacing: var(--detail-moonrank-spacing);
  text-transform: var(--detail-moonrank-transform);
  color: var(--detail-moonrank-color);
  display: flex;
  align-items: center;
  padding: var(--detail-moonrank-padding);
  margin: 0 20px 0 0;

  svg {
    margin: 0 3px 0 0;
  }
`;

export const RarityTooltip = styled(Tooltip).attrs({
  sx: {}
})``;

export const RarityLink = styled.a`
  display: flex;
  align-items: center;
`;

export const Image = styled.img``;

export const Reload = styled.button`
  color: var(--detail-reload-btn-color);
  svg {
    width: 21px;
    height: 21px;
  }
`;

export const MarketPlaceLink = styled.a`
  font-weight: bold;
  flex: auto;
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 1.5rem;
  color: #d92391;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  font-weight: 400;
  font-size: 21px;
  line-height: 26px;
  letter-spacing: 0.04em;
  color: #886f55;

  &:hover {
    color: color: #886f55;
    opacity: 0.8;
  }
`;

export const MarketPlace = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const MarketIcon = styled(MarketPlaceIcon)`
  width: 18px;
  margin-right: 0.5rem;
  min-width: 18px;
`;

export const PriceWrappper = styled.div`
  background: var(--detail-priceBox-bg);
  border: var(--detail-priceBox-border);
  border-radius: var(--detail-priceBox-radius);
  margin: var(--detail-priceBox-margin);
  padding: var(--detail-priceBox-padding);
  position: relative;
`;

export const PriceLabel = styled.span`
  display: block;
  color: var(--detail-priceLabel-color);
  font-weight: var(--detail-priceLabel-weight);
  font-size: var(--detail-priceLabel-size);
  line-height: var(--detail-priceLabel-line-height);
  letter-spacing: var(--detail-priceLabel-spacing);
  text-transform: var(--detail-priceLabel-transform);
  margin: var(--detail-priceLabel-margin);
`;

export const NotListedPrice = styled.div`
  color: var(--detail-priceLabel-color);
  font-weight: var(--detail-priceLabel-weight);
  font-size: var(--detail-priceLabel-size);
  line-height: var(--detail-priceLabel-line-height);
  letter-spacing: var(--detail-priceLabel-spacing);
  text-transform: var(--detail-priceLabel-transform);
  margin: var(--detail-priceNotListed-margin);
`;

export const Price = styled.div`
  align-items: flex-end;
  align-items: center;
  display: flex;
  font-weight: var(--detail-price-weight);
  font-size: var(--detail-price-size);
  line-height: var(--detail-price-line-height);
  color: var(--detail-price-color);
  margin: var(--detail-price-margin);

  svg {
    width: var(--detail-priceIcon-width);
    height: var(--detail-priceIcon-height);
    position: relative;
    top: 2px;
    margin-right: 5px;
  }
`;

export const PriceIcon = styled(NewPriceTagIcon)``;

export const PriceValue = styled.span`
  position: relative;
  bottom: -2px;
`;

export const Description = styled.div`
  font-size: var(--about-NTF-size);
  line-height: var(--about-NTF-line-height);
  color: var(--about-NTF-color);
`;

export const HBidWrapper = styled.div`
  align-items: center;
  display: flex;
  background: var(--detail-hBid-bg);
  border-radius: var(--detail-hBid-radius);
  padding: var(--detail-hBid-padding);
  min-width: var(--detail-hBid-width);
  font-weight: var(--detail-hBid-weight);
  font-size: var(--detail-hBid-size);
  line-height: var(--detail-hBid-line-height);
  letter-spacing: var(--detail-hBid-spacing);
  text-transform: var(--detail-hBid-transform);
  color: var(--detail-hBid-color);
  position: absolute;
  top: 25px;
  right: 23px;

  svg {
    width: 20px;
    height: 20px;
    margin: 0 5px 0 0;
  }
`;

export const HBidTitle = styled.span`
  margin: 0 7px 0 0;
`;

// Actions
export const ActionWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: var(--detail-actions-width);
  margin: var(--detail-actions-margin);

  &:first-child {
    margin: 0;
  }

  &.acts-full {
    flex-wrap: wrap;
  }

  button {
    margin: var(--detail-actionBtn-margin);

    &:first-child {
      margin: 0;
    }
  }
`;

export const ConnectBtn = styled(WalletMultiButton)`
  ${primaryContainedButton}

  &.wallet-adapter-button[disabled],
  &.wallet-adapter-button-trigger,
  &.wallet-adapter-button {
    ${primaryContainedButton}

    .wallet-adapter-button-start-icon {
      display: none;
    }
  }
`;

export const ActionBtn = styled.button`
  ${primaryContainedButton}
  justify-content: center;
  text-align: center;

  &.btn-nowrap {
    @media ${mediaDevice.xsm} {
      white-space: nowrap;
    }
  }

  &.full {
    width: 100%;
    max-width: var(--detail-actions-width);
  }

  &.btn-fixed-w {
    width: 100%;
    margin: 0 0 15px;

    &:first-child {
      margin: 0 0 15px;
    }

    &:last-child {
      margin: 0;
    }

    @media ${mediaDevice.xsm} {
      width: auto;
      min-width: 208px;
      margin: var(--detail-actionBtn-margin);

      &:first-child {
        margin: 0;
      }

      &:last-child {
        margin: var(--detail-actionBtn-margin);
      }
    }

    @media ${mediaDevice.ml} {
      min-width: 100%;
      margin: 0 0 15px;

      &:first-child {
        margin: 0 0 15px;
      }
    }

    @media ${mediaDevice.lg} {
      min-width: 208px;
      margin: var(--detail-actionBtn-margin);

      &:first-child {
        margin: 0;
      }

      &:last-child {
        margin: var(--detail-actionBtn-margin);
      }
    }
  }
`;

export const ActionOutlineBtn = styled.button`
  ${primaryOutlinedButton}

  &.full {
    width: 100%;
    max-width: var(--detail-actions-width);
  }

  &.btn-fixed-w {
    width: 100%;
    margin: 0;

    @media ${mediaDevice.xsm} {
      width: auto;
      min-width: 208px;
      margin: var(--detail-actionBtn-margin);
    }

    @media ${mediaDevice.ml} {
      min-width: 100%;
      margin: 0;
    }

    @media ${mediaDevice.lg} {
      min-width: 208px;
      margin: var(--detail-actionBtn-margin);
    }
  }
`;

export const ListNowInput = styled.input`
  ${secondInput}
  flex: auto;
  width: 100%;
`;

export const CancelBtn = styled.button`
  ${primaryOutlinedButton}
  width: 100%;

  &.offer-made {
    margin-top: 0;
  }
`;

export const TermsWrapper = styled.div`
  font-weight: var(--detail-terms-weight);
  font-size: var(--detail-terms-size);
  line-height: var(--detail-terms-line-height);
  color: var(--detail-terms-color);
  padding: var(--detail-terms-padding);
  margin: var(--detail-terms-margin);

  a {
    color: var(--detail-termLink-color);
    &:hover {
      color: var(--detail-termLink-hover-color);
    }
  }
`;

export const ActionTooltip = styled(Tooltip).attrs({
  sx: {}
})``;
