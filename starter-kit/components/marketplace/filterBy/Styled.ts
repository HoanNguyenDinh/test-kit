import styled from 'styled-components';
import Switch from '@mui/material/Switch';
import { secondInput, primaryOutlinedButton, resetList, customScrollY, customSecondScrollY } from '../../../theme/utility/mixin';
import { Link } from 'react-router-dom';
import { Autocomplete, TextField } from '@mui/material';
import mediaDevice from '../../../theme/utility/mediaDevice';

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  z-index: 99;
  left: 0;
  padding: 0 7px 20px 20px;
  background: #fff9f0;
  transform: translateX(-100%);
  transition: all 0.3s ease-in;
  opacity: 0;
  visibility: hidden;

  &.show {
    transform: translateX(0);
    opacity: 1;
    visibility: visible;
  }

  @media ${mediaDevice.md} {
    position: relative;
    width: 244px;
    padding: 0;
    height: auto;
    z-index: 0;
    transform: translateX(0);
    opacity: 1;
    visibility: visible;
    transition: none;
  }
`;

export const MbTitleWrapper = styled.div``;

export const MbTitle = styled.button``;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  color: #402d28;
  border-bottom: 3px solid #f3eadb;
  padding: 25px 0;
  margin: 0 13px 5px 0;

  @media ${mediaDevice.md} {
    margin: 0 0 5px 0;
  }
`;

export const Title = styled.h2`
  display: flex;
  align-items: center;
  align-content: center;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #402d28;
  margin: 0;

  svg {
    margin: 0 10px 0 0;
  }
`;

export const BtnClose = styled.button`
  background: #f3eadb;
  border-radius: 3px;
  width: 26px;
  height: 28px;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  color: #bb9772;

  @media ${mediaDevice.md} {
    display: none;
  }
`;

export const FilteredCount = styled.div`
  min-width: 26px;
  min-height: 28px;
  padding: 0 3px;
  background: #f3eadb;
  border-radius: 3px;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #bb9772;
  position: absolute;
  right: 60px;
  top: 25px;

  @media ${mediaDevice.md} {
    right: 0;
  }
`;

export const FilteredValue = styled.span``;

export const FilterContent = styled.div``;

export const FilterScroll = styled.div`
  ${customScrollY}
  max-height: calc(100vh - 110px);
  padding: 0 13px 0 0;

  @media ${mediaDevice.md} {
    max-height: 100%;
    padding: 0;
  }
`;

export const BuyNowWrapper = styled.div`
  border-bottom: 1px solid #f3eadb;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  padding: 17px 0;
`;

export const Label = styled.span`
  padding: 0 20px 0 0;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #916b46;
`;

export const SwitchWrapper = styled.div``;

export const SwitchBuyNow = styled(Switch).attrs({
  sx: {}
})`
  &.MuiSwitch-root {
    padding: 0;
    width: 54px;
    height: 24px;
    border-radius: 100px;

    .MuiSwitch-switchBase {
      padding: 2px;
      color: #fff;

      &.Mui-checked {
        transform: translateX(30px);

        & + .MuiSwitch-track {
          background: #19ab6e;
          opacity: 1;
        }
      }
      & + .MuiSwitch-track {
        background: grey;
        opacity: 0.5;
      }
    }
  }
`;

export const PriceType = styled.div``;

export const PriceAutoComplete = styled(Autocomplete).attrs({
  sx: {}
})``;

export const AutoCompleteInput = styled(TextField).attrs({
  sx: {}
})`
  .MuiInput-root {
    &.MuiAutocomplete-inputRoot {
      margin: 0 0 10px;
      padding: 0 25px 0 0 !important;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      text-transform: uppercase;
      color: #bb9772;
      font-family: var(--body-font);

      &:before {
        display: none;
      }

      &.Mui-focused {
        &:after {
          display: none;
        }
      }
    }
  }
  .MuiIconButton-root {
    &.MuiAutocomplete-clearIndicator {
      display: none;
    }

    &.MuiAutocomplete-popupIndicator {
      padding: 0;
      width: 20px;
      transform: rotate(180deg);
      color: #bb9772;
    }

    .MuiTouchRipple-root {
      display: none;
    }

    &:hover {
      background: none;
    }
  }

  .MuiAutocomplete-endAdornment {
    right: 2px;
  }
`;

export const PriceFilter = styled.div``;

export const PriceInputs = styled.div`
  margin: 0 0 15px;
`;

export const PriceInput = styled.input`
  ${secondInput}
  width: calc(50% - 17px);
`;

export const PriceLabel = styled.span`
  margin: 0 10px;
`;

export const PriceActions = styled.div``;

export const ApplyBtn = styled.button`
  ${primaryOutlinedButton}
  width: 100%;
`;

export const AttrsScroller = styled.div`
  ${customSecondScrollY}
  max-height: 300px;
`;

export const Attrs = styled.ul`
  ${resetList}
`;

export const Attr = styled.li`
  display: flex;
  align-items: center;
  padding: 6px 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }
`;

export const AttrBtn = styled.button`
  display: flex;
  align-items: center;
`;

export const CheckBox = styled.div`
  width: 18px;
  height: 18px;
  background: #f3eadb;
  border-radius: 3px;
  margin: 0 13px 0 0;
  color: #fff;
  position: relative;

  &.selected {
    background: #19ab6e;
  }

  svg {
    position: absolute;
    left: 5px;
    top: 5px;
  }
`;

export const AttrLabel = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #bb9772;
`;

export const AttrNumber = styled.span`
  color: rgba(187, 151, 114, 0.5);
`;
