import { createGlobalStyle } from 'styled-components';
import { StyledComponentProps } from './theme';
// import { fontStyle, reset } from './utility/mixin';
import mediaDevice from './utility/mediaDevice';

const solanaWalletStyle = createGlobalStyle`
.wallet-adapter-button {
  background-color: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-family: ${(props: StyledComponentProps) => props.theme.font.family.outfit};
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  padding: 0 24px;
  border-radius: 4px;
}

.wallet-adapter-button-trigger {
  background-color: #512da8;
}

.wallet-adapter-button:not([disabled]):focus-visible {
  outline-color: white;
}

.wallet-adapter-button:not([disabled]):hover {
  background-color: #1a1f2e;
}

.wallet-adapter-button[disabled] {
  background: #404144;
  color: #999;
  cursor: not-allowed;
}

.wallet-adapter-button-end-icon,
.wallet-adapter-button-start-icon,
.wallet-adapter-button-end-icon img,
.wallet-adapter-button-start-icon img {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
}

.wallet-adapter-button-end-icon {
  margin-left: 18px;
}

.wallet-adapter-button-start-icon {
  margin-right: 18px;
}

.wallet-adapter-collapse {
  width: 100%;
}

.wallet-adapter-dropdown {
  position: relative;
  display: inline-block;
}

.wallet-adapter-dropdown-list {
  position: absolute;
  z-index: 99;
  display: grid;
  grid-template-rows: 1fr;
  grid-row-gap: 10px;
  padding: 10px;
  top: 35px;
  left: 0;
  margin: 0;
  list-style: none;
  background: #F3EADB;
  border-radius: 3px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 200ms ease, transform 200ms ease, visibility 200ms;
  font-family: ${(props: StyledComponentProps) => props.theme.font.family.outfit};
  min-width: 232px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #BB9772;
}

.wallet-adapter-dropdown-list-active {
  opacity: 1;
  visibility: visible;
}

.wallet-adapter-dropdown-list-item {
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: left;
  border: none;
  outline: none;
  cursor: pointer;
  white-space: nowrap;
  box-sizing: border-box;
  padding: 0 20px;
  width: 100%;
  border-radius: 6px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #BB9772;
  margin: 3px 0;
}

.wallet-adapter-dropdown-list-item:not([disabled]):hover {
  /* background-color: #1a1f2e; */
}

.wallet-adapter-modal-collapse-button svg {
  align-self: center;
  fill: #999;
}

.wallet-adapter-modal-collapse-button.wallet-adapter-modal-collapse-button-active svg {
  transform: rotate(180deg);
  transition: transform ease-in 150ms;
}

.wallet-adapter-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  transition: opacity linear 150ms;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1040;
  overflow-y: auto;
}

.wallet-adapter-modal.wallet-adapter-modal-fade-in {
  opacity: 1;
}

.wallet-adapter-modal-button-close {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 18px;
  right: 18px;
  padding: 12px;
  cursor: pointer;
  background: #1a1f2e;
  border: none;
  border-radius: 50%;
}

.wallet-adapter-modal-button-close:focus-visible {
  outline-color: white;
}

.wallet-adapter-modal-button-close svg {
  fill: #777;
  transition: fill 200ms ease 0s;
}

.wallet-adapter-modal-button-close:hover svg {
  fill: #fff;
}

.wallet-adapter-modal-overlay {
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 0.6;
}

.wallet-adapter-modal-container {
  display: flex;
  margin: 3rem;
  min-height: calc(100vh - 6rem); /* 100vh - 2 * margin */
  align-items: center;
  justify-content: center;
}

@media (max-width: 480px) {
  .wallet-adapter-modal-container {
      margin: 1rem;
      min-height: calc(100vh - 2rem); /* 100vh - 2 * margin */
  }
}

.wallet-adapter-modal-wrapper {
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 1050;
  max-width: 400px;
  border-radius: 10px;
  background: #10141F;
  border-radius: 3px;
  font-family: ${(props: StyledComponentProps) => props.theme.font.family.outfit};
  flex: 1;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #FFFFFF;
}

.wallet-adapter-modal-wrapper .wallet-adapter-button {
  width: 100%;
}

.wallet-adapter-modal-title {
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  margin: 0;
  padding: 64px 48px 48px 48px;
  text-align: center;
  color: #fff;
}

@media (max-width: 374px) {
  .wallet-adapter-modal-title {
      font-size: 18px;
  }
}

.wallet-adapter-modal-list {
  margin: 0 0 40px 0;
  padding: 0 5px;
  width: 100%;
  list-style: none;
  position: relative;

  &:after {
    content: '';
    background: rgba(255,255,255,0.2);
    width: calc(100% - 62px);
    position: absolute;
    bottom: -31px;
    left: 50%;
    display: none;
    height: 1px;
    transform: translateX(-50%);
    z-index: 1;
  }
}

.wallet-adapter-modal-list .wallet-adapter-button {
  margin: 0 0 15px;
  padding: 5px 24px;
}

.wallet-adapter-modal-list .wallet-adapter-button:not([disabled]):hover {
  background: rgba(0,0,0,0.5)
}

.wallet-adapter-modal-list .wallet-adapter-button-end-icon,
.wallet-adapter-modal-list .wallet-adapter-button-start-icon,
.wallet-adapter-modal-list .wallet-adapter-button-end-icon img,
.wallet-adapter-modal-list .wallet-adapter-button-start-icon img {
  width: 24px;
  height: 24px;
}

.wallet-adapter-modal-list .wallet-adapter-button span {
  margin-left: auto;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  opacity: .5;
}

.wallet-adapter-modal-list-more {
  cursor: pointer;
  border: none;
  padding: 12px 24px 24px 12px;
  align-self: flex-end;
  display: flex;
  align-items: center;
  background-color: transparent;
  color: #fff;
}

.wallet-adapter-modal-list-more svg {
  transition: all 0.1s ease;
  fill: rgba(255, 255, 255, 1);
  margin-left: 0.5rem;
}

.wallet-adapter-modal-list-more-icon-rotate {
  transform: rotate(180deg);
}

.wallet-adapter-modal-middle {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 24px 24px 24px;
  box-sizing: border-box;
}

.wallet-adapter-modal-middle-button {
  display: block;
  cursor: pointer;
  margin-top: 48px;
  width: 100%;
  background-color: #512da8;
  padding: 12px;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  color: #fff;
}

.wallet-adapter-modal-wrapper {
  max-width: 300px;
  @media ${mediaDevice.lg} {
    max-width: 600px;
  }
}

.wallet-adapter-modal-title {
  font-family: ${(props: StyledComponentProps) => props.theme.font.family.outfit};
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 32px;
  text-align: left;
  width: 100%;
}

.wallet-adapter-modal-button-close {
  background: none;
  top: 0;
  right: 0;
  padding: 21px;
}
.wallet-adapter-modal-button-close svg {
  fill: rgba(255,255,255,1);
}
.wallet-adapter-modal-list-more {
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  text-align: right;
  letter-spacing: 0.13em;
  color: #FFFFFF;
  font-family: ${(props: StyledComponentProps) => props.theme.font.family.outfit};
  padding: 24px 32px 32px;
  text-transform: uppercase;
}
.wallet-adapter-modal-list-more svg {
  fill: #FFFFFF;
}
.wallet-adapter-modal-middle-button {
  font-family: ${(props: StyledComponentProps) => props.theme.font.family.outfit};
}
`;

export default solanaWalletStyle;
