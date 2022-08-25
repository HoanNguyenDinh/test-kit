import styled from 'styled-components';
import { StyledComponentProps } from '../../../theme/theme';
import { resetList } from '../../../theme/utility/mixin';
import mediaDevice from '../../../theme/utility/mediaDevice';
import { Link } from 'react-router-dom';
import MeInstructionImage from '../../../assets/images/menu_illustration.png';

/**
 * Nav Content
 */
export const NavWrapper = styled.div`
  @media ${mediaDevice.lg} {
    padding: 13px 0 0;

    &.have-static-nav {
      flex: 1;
    }
  }
`;

export const NavContent = styled.div`
  background-color: var(--nav-mobile-bg-color);
  position: fixed;
  width: 100vw;
  height: 100vh;
  right: 0;
  bottom: 0;
  z-index: 1;
  display: none;
  flex-direction: column;
  padding: 24px 20px 70px 20px;
  align-items: start;

  &:after {
    content: '';
    background: url(${MeInstructionImage}) 100% 100% no-repeat;
    width: 100%;
    height: 100vh;
    display: block;
    position: fixed;
    right: 0;
    bottom: 0;
    left: auto;
    top: auto;
    right: 0%;
    bottom: 7.88%;
    z-index: -1;
    display: block;
    height: 100%;
    max-height: 74vh;
    opacity: 0.6;
    mix-blend-mode: multiply;
    background-size: contain;
  }

  &.active {
    display: flex;
  }

  > * {
    width: 100%;
  }

  @media ${mediaDevice.lg} {
    display: flex;
    flex-direction: row;
    position: static;
    height: auto;
    width: auto;
    padding: 0;
    background: none;

    &:after {
      display: none;
    }
  }
`;

export const NavActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 20px;

  @media ${mediaDevice.lg} {
    display: none;
  }
`;

export const CloseBtn = styled.button`
  background: var(--nav-icon-bg-color);
  color: var(--nav-icon-color);
  border-radius: 3px;
  width: 40px;
  height: 37px;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  margin: 0;
`;

/**
 * Nav Icon
 */

export const NavIconBtn = styled.button`
  background: var(--nav-icon-bg-color);
  color: var(--nav-icon-color);
  border-radius: 3px;
  width: 40px;
  height: 37px;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  margin: 0;

  @media ${mediaDevice.lg} {
    display: none;
  }
`;

/**
 * Nav
 */

export const Nav = styled.ul`
  ${resetList}
  display: flex;
  flex-direction: column;
  overflow-x: none;
  overflow-y: auto;
  padding: 60px 0 0;

  @media ${mediaDevice.lg} {
    flex-direction: row;
    padding: 0;
    overflow: visible;
    padding-right: 16px;
    justify-content: end;

    &.have-static-nav {
      flex-wrap: wrap;
      padding-right: 0;
    }
  }
`;

export const NavItem = styled.li`
  margin: 0 0 25px;

  @media ${mediaDevice.lg} {
    margin: 0 16px 16px 0;

    &:last-child {
      margin-right: 0;
    }
  }

  > a,
  > span {
    background-color: var(--nav-item-bg-color);
    border: var(--nav-item-border);
    color: var(--nav-item-color);
    border-radius: 3px;
    padding: 3px 10px;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.13em;
    text-transform: uppercase;
    min-height: 28px;
    text-align: center;
    display: inline-block;
    transition: background-color 200ms cubic-bezier(0.215, 0.61, 0.355, 1);
    position: relative;

    &.active {
      @media ${mediaDevice.lg} {
        background: var(--nav-item-active-bg-color);
        border: var(--nav-item-active-border);
        color: var(--nav-item-active-color);
        &:hover {
          background: var(--nav-item-active-bg-color);
          border: var(--nav-item-active-border);
          color: var(--nav-item-active-color);
        }
      }
    }

    &.disabled {
      opacity: 0.35;
      pointer-events: none;
      cursor: not-allowed;
    }
  }

  > a {
    &:hover {
      background: var(--nav-item-hover-bg-color);
      border: var(--nav-item-hover-border);
      color: var(--nav-item-hover-color);
    }
  }
`;

export const NavLink = styled(Link)``;

export const NavLinkTo = styled.a``;

export const Badge = styled.span`
  position: absolute;
  background: var(--nav-item-badge-bg-color);
  color: var(--nav-item-badge-color);
  border-radius: 3px;
  min-height: 14px;
  font-weight: 600;
  font-size: 11px;
  line-height: 14px;
  text-align: center;
  padding: 0 6px;
  right: -1px;
  top: -11px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: -0.005rem;
`;

/**
 * Socials
 */

export const Socials = styled.ul`
  ${resetList}
  display: flex;
  position: absolute;
  bottom: 20px;
  top: auto;
  left: 20px;

  @media ${mediaDevice.lg} {
    position: static;
    flex: 1;
    padding-left: 16px;
  }
`;

export const SocialItem = styled.li`
  background-color: var(--nav-social-bg-color);
  color: var(--nav-social-color);
  border-radius: 3px;
  margin: 0 15px 0 0;
  min-width: 39px;
  min-height: 28px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding: 0;
  transition: background-color 200ms cubic-bezier(0.215, 0.61, 0.355, 1);

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    background-color: var(--nav-social-hover-bg-color);
    color: var(--nav-social-color);
  }
`;

export const SocialLink = styled.a`
  padding: 5px 10px;
  color: var(--nav-social-color);

  &:hover {
    color: var(--nav-social-hover-color);
  }
`;

/**
 * Connect Wallet
 */

export const AccountWrapper = styled.div`
  align-items: center;
  background-color: var(--nav-account-bg-color);
  color: var(--nav-account-color);
  border-radius: 100px;
  display: flex;
  height: 28px;
  position: relative;
  border-radius: 3px;
  transition: background-color 200ms cubic-bezier(0.215, 0.61, 0.355, 1);
  width: auto;

  &:hover {
    background-color: var(--nav-account-hover-bg-color);
    color: var(--nav-account-hover-color);
  }

  .wallet-adapter-button {
    height: 100%;
    color: var(--nav-account-color);
    background-color: transparent !important;
    text-transform: uppercase;
    padding: 0 10px;
    line-height: 20px;
    letter-spacing: 0.13em;
    font-weight: 600;
    font-size: 16px;
    font-family: ${(props: StyledComponentProps) => props.theme.font.family.outfit};

    &:hover {
      background-color: transparent !important;
    }

    .wallet-adapter-button-start-icon {
      opacity: 0;
      margin-right: 5px;
    }
  }

  .wallet-adapter-button-trigger {
    .wallet-adapter-button-start-icon {
      display: none;
    }
  }

  .wallet-adapter-dropdown {
    flex: 1;
  }
`;

export const UserAvt = styled.div`
  background: var(--nav-account-icon-bg-color);
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;

  &.connected-wallet {
    position: absolute;
    left: 0;
    z-index: 10;
  }

  svg {
    width: 16px;
  }
`;

export const WalletBtnText = styled.span`
  white-space: nowrap;
`;
