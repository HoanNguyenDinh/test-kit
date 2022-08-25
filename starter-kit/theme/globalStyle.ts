import { createGlobalStyle } from 'styled-components';
import { StyledComponentProps } from './theme';
import { fontStyle, reset, pBase, h1, h2, h3, h4, h5, tdTable } from './utility/mixin';
import CheddarGothicSansWOff from '../fonts/CheddarGothicSans.woff';
import CheddarGothicSansWOff2 from '../fonts/CheddarGothicSans.woff2';

const globalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Cheddar Gothic Sans';
    src: url(${CheddarGothicSansWOff2}) format('woff2'), url(${CheddarGothicSansWOff}) format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  :root {
    --primary-font:  'Outfit', sans-serif, ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
    --secondary-font: 'Cheddar Gothic Sans', ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;

    --white: #fff;
    --black: #000;
    --green-300: #19AB6E;
    --green-700: #008056;
    --yellow-300: #FFF9F0;
    --beige-400: #F3EADB;
    --brown-300: #BB9772;
    --brown-500: #916B46;
    --brown-600: #886F55;
    --brown-700: #402D28;
    --green-color: var(--green-300);
    --yellow-color: var(--yellow-300);
    --brown-color: var(--brown-300);
    --brown-rgba-500: rgba(145,107,70,0.5);

    --primary-color: var(--brown-500);
    --secondary-color: var(--brown-700);

    --border-primary-color: var(--beige-400);
    --border-secondary-color: rgba(136, 111, 85, 0.2);
    --border-brown-color: var(--brown-300);
    --border-brown-bolder-color: var(--brown-700);
    --border-white-color: var(--white);

    --body-font: var(--primary-font);
    --body-color: var(--primary-color);
    --body-size: 14px;
    --body-line-height: 18px;
    --body-weight: 400;
    --body-bg-color: var(--yellow-color);

    --h1-font: var(--primary-font);
    --h1-color: var(--brown-500);
    --h1-size: 48px;
    --h1-line-height: 60px;
    --h1-weight: 400;
    --h1-spacing: 0.15em;
    --h1-transform: uppercase;

    --h2-font: var(--primary-font);
    --h2-color: var(--brown-300);
    --h2-size: 20px;
    --h2-line-height: 25px;
    --h2-weight: 700;
    --h2-spacing: 0.05em;
    --h2-transform: uppercase;

    --h3-font: var(--primary-font);
    --h3-color: var(--brown-300);
    --h3-size: 18px;
    --h3-line-height: 23px;
    --h3-weight: 500;
    --h3-spacing: 0.15em;
    --h3-transform: uppercase;

    --h4-font: var(--primary-font);
    --h4-color: var(--brown-500);
    --h4-size: 16px;
    --h4-line-height: 20px;
    --h4-weight: 400;
    --h4-spacing: 0.05em;
    --h4-transform: uppercase;

    --h5-font: var(--primary-font);
    --h5-color: var(--brown-500);
    --h5-size: 12px;
    --h5-line-height: 15px;
    --h5-weight: 500;
    --h5-spacing: 0;
    --h5-transform: uppercase;

    --page-title-font: var(--secondary-font);
    --page-title-color: var(--brown-700);
    --page-title-size: 50px;
    --page-title-line-height: 62px;
    --page-title-weight: 400;
    --page-title-spacing: 0;
    --page-title-transform: none;

    --p-size: var(--body-size);
    --p-line-height: var(--body-line-height);
    --p-margin: 0 0 1rem;
    --p-small-size: var(--body-size);
    --p-small-line-height: var(--body-line-height);
    --p-large-size: 20px;
    --p-large-line-height: 25px;

    --layout-max-width: 94vw;
    --layout-main-max-width: 1368px;

    --copyright-color: var(--brown-300);

    --nav-bg-color: var(--beige-400);
    --nav-color: var(--brown-300);
    --nav-item-color: var(--brown-300);
    --nav-item-bg-color: var(--beige-400);
    --nav-item-border: 1px solid var(--border-primary-color);
    --nav-item-hover-color: var(--brown-300);
    --nav-item-hover-bg-color: var(--white);
    --nav-item-hover-border: 1px solid var(--border-white-color);
    --nav-item-active-color: var(--brown-300);
    --nav-item-active-bg-color: none;
    --nav-item-active-border: 1px solid var(--border-brown-color);
    --nav-item-badge-bg-color: var(--green-300);
    --nav-item-badge-color: var(--white);
    --nav-social-bg-color: var(--beige-400);
    --nav-social-hover-bg-color: var(--white);
    --nav-social-color: var(--brown-300);
    --nav-social-hover-color: var(--brown-300);
    --nav-mobile-bg-color: var(--green-700);
    --nav-icon-bg-color: var(--beige-400);
    --nav-icon-color: var(--brown-300);
    --nav-account-bg-color: var(--beige-400);
    --nav-account-color: var(--brown-300);
    --nav-account-hover-bg-color: var(--white);
    --nav-account-hover-color: var(--brown-300);
    --nav-account-icon-bg-color: var(--brown-700);

    --tab-controls-width: 100%;
    --tab-controls-border-color: var(--border-primary-color);
    --tab-control-color:var(--brown-rgba-500);
    --tab-control-weight: 400;
    --tab-control-size: 16px;
    --tab-control-line-height: 20px;
    --tab-control-active-color: var(--brown-700);
    --tab-control-active-border-color: var(--border-brown-bolder-color);

    --table-tr-border: 1px solid var(--border-secondary-color);
    --table-th-color: var(--brown-700);
    --table-th-weight: 500;
    --table-th-size: 12px;
    --table-th-line-height: 15px;
    --table-th-transform: uppercase;
    --table-th-padding: 10px 12px 4px;
    --table-th-align: left;
    --table-td-padding: 13px 12px;
    --table-td-align: left;
    --table-td-color: var(--brown-700);
    --table-td-weight: 400;
    --table-td-size: 12px;
    --table-td-line-height: 15px;
    --table-scroll-bg-color: var(--brown-700);
    --table-link-color: var(--brown-700);
    --table-link-hover-color: var(--brown-700);
    --table-link-hover-decoration: underline;
    --table-link-hover-opacity: 0.8;
    --table-transc-sale-color: var(--green-color);
    --table-transc-cancel-color: #9c93a5;
    --table-transc-place-color: #6d79c9;
    --table-source-val-color: rgba(64, 45, 40, 0.5);
    --table-source-margin: 0 0 0 3px;
    --table-secondary-tr-border: 0;
    --table-secondary-th-color: var(--brown-600);
    --table-secondary-td-padding: 15px 12px;
    --table-secondary-td-size: 16px;
    --table-secondary-td-line-height: 20px;
    --table-secondary-source-margin: 0 0 0 14px;
    --table-secondary-source-val-color: var(--brown-600);
    --table-secondary-transc-sale-color: var(--brown-700);
    --table-secondary-transc-cancel-color: var(--brown-700);
    --table-secondary-transc-place-color: var(--brown-700);

    --btn-contained-bg: var(--green-300);
    --btn-contained-radius: 3px;
    --btn-contained-height: 50px;
    --btn-contained-padding: 0px 15px;
    --btn-contained-weight: 500;
    --btn-contained-size: 18px;
    --btn-contained-line-height: 23px;
    --btn-contained-spacing: 0.15em;
    --btn-contained-transform: uppercase;
    --btn-contained-color: var(--yellow-300);

    --btn-contained-sm-height: 28px;
    --btn-contained-sm-weight: 600;
    --btn-contained-sm-size: 16px;
    --btn-contained-sm-line-height: 20px;

    --btn-outline-bg: none;
    --btn-outline-border: 2px solid var(--green-300);
    --btn-outline-radius: 3px;
    --btn-outline-height: 50px;
    --btn-outline-padding: 0px 15px;
    --btn-outline-weight: 500;
    --btn-outline-size: 18px;
    --btn-outline-line-height: 23px;
    --btn-outline-spacing: 0.15em;
    --btn-outline-transform: uppercase;
    --btn-outline-color: var(--green-300);

    --btn-outline-second-bg: none;
    --btn-outline-second-border: 2px solid var(--white);
    --btn-outline-second-color: var(--white);

    --btn-text-weight: 500;
    --btn-text-size: 16px;
    --btn-text-line-height: 20px;
    --btn-text-spacing: 0;
    --btn-text-transform: none;
    --btn-text-color: var(--green-300);

    // Form
    --input-bg: none;
    --input-border: 1px solid var(--white);
    --input-radius: 3px;
    --input-weight: 400;
    --input-size: 16px;
    --input-line-height: 20px;
    --input-color: var(--white);
    --input-padding: 0 15px;
    --input-height: 50px;
    --input-placeholder-color: rgba(255, 255, 255, 0.5);
    --input-second-bg: none;
    --input-second-border: 1px solid var(--border-brown-color);
    --input-second-radius: 3px;
    --input-second-weight: 400;
    --input-second-size: 16px;
    --input-second-line-height: 20px;
    --input-second-color: var(--brown-700);
    --input-second-padding: 0 15px;
    --input-second-height: 50px;
    --input-second-placeholder-color: rgba(64, 45, 40, 0.4);

    // Dialog
    --dialog-overlay-bg: rgba(0, 0, 0, 0.6);
    --dialog-bg: var(--brown-700);
    --dialog-radius: 8px;
    --dialog-width: 600px;
    --dialog-title-weight: 700;
    --dialog-title-size: 20px;
    --dialog-title-line-height: 25px;
    --dialog-title-spacing: 0.05em;
    --dialog-title-transform: uppercase;
    --dialog-title-color: var(--white);
    --dialog-close-btn-bg: var(--beige-400);
    --dialog-close-btn-radius: 3px;
    --dialog-close-btn-width: 20px;
    --dialog-close-btn-height: 20px;
    --dialog-close-btn-color: var(--brown-500);
    --dialog-actions-color: var(--white);
    --dialog-actions-weight: 400;
    --dialog-actions-size: 12px;
    --dialog-actions-line-height: 15px;
    --dialog-actions-border: 1px solid rgba(255, 255, 255, 0.2);
    --dialog-terms-link-color: rgba(187, 151, 114, 1);
    --dialog-terms-link-hover-color: rgba(187, 151, 114, 1);
    --dialog-message-color: red;
    --dialog-message-error-color: red;
    --dialog-message-success-color: var(--green-300);
    --dialog-list-title-color: var(--white);
    --dialog-list-title-weight: 500;
    --dialog-list-title-size: 12px;
    --dialog-list-title-line-height: 15px;
    --dialog-list-title-transform: uppercase;
    --dialog-list-title-border: 1px solid rgba(255, 255, 255, 0.2);
    --dialog-ntf-image-radius: 3px;
    --dialog-ntf-name-weight: 400;
    --dialog-ntf-name-size: 20px;
    --dialog-ntf-name-line-height: 25px;
    --dialog-ntf-name-color: var(--white);
    --dialog-ntf-price-weight: 400;
    --dialog-ntf-price-size: 16px;
    --dialog-ntf-price-line-height: 20px;
    --dialog-ntf-price-color: #ffffff;
    --dialog-ntf-price-opacity: 0.5;

    // pagination
    --pg-color: var(--brown-700);
    --pg-action-bg-color: var(--beige-400);
    --pg-action-color: var(--brown-700);
    --pg-action-hover-bg-color: var(--beige-400);
    --pg-action-hover-color: var(--brown-700);
    --pg-action-hover-opacity: 0.9;
    --pg-action-disable-bg-color: var(--beige-400);
    --pg-action-disable-color: var(--brown-500);
    --pg-action-disable-opacity: 0.7;
    --pg-input-border: 1px solid var(--border-secondary-color);
    --pg-input-bg-color: none;
    --pg-input-size: 14px;
    --pg-input-height: 36px;
    --pg-input-width: 100px;
    --pg-line-border-color: var(--brown-500);

    // drop-down
    --dropdown-color: var(--brown-500);
    --dropdown-input-border: 1px solid var(--border-secondary-color);
    --dropdown-input-size: 14px;
    --dropdown-input-height: 36px;
    --dropdown-input-width: 100px;
    --dropdown-icon-color: var(--brown-500);
    --dropdown-content-bg-color: var(--beige-400);
    --dropdown-content-color: var(--brown-500);
    --dropdown-content-svg-color: var(--brown-500);
    --dropdown-content-active-color: var(--green-300);
    --dropdown-content-svg-active-color: var(--green-300);

    // collapse
    --collapse-bg: none;
    --collapse-radius: 0;
    --collapse-padding: 0;
    --collapse-margin: 0 0 20px;
    --collapse-title-bg: #F3EADB;
    --collapse-title-radius: 3px;
    --collapse-title-padding: 15px 17px 15px 20px;
    --collapse-title-height: 70px;
    --collapse-title-weight: 700;
    --collapse-title-size: 20px;
    --collapse-title-line-height: 25px;
    --collapse-title-spacing: 0.05em;
    --collapse-title-transform: uppercase;
    --collapse-title-color: var(--brown-700);
    --collapse-title-arrow-color: var(--brown-500);
    --collapse-content-bg: none;
    --collapse-content-radius: 0;
    --collapse-content-border: 1px solid var(--border-primary-color);
    --collapse-content-margin: 10px 0 0;
    --collapse-content-padding: 20px;

    --collapse-title-second-border: 1px solid #f3eadb;
    --collapse-title-second-padding: 12px 0;

    // notify message
    --snackbar-font: var(--primary-font);
    --snackbar-weight: 500;
    --snackbar-size: 16px;
    --snackbar-line-height: 20px;
    --snackbar-color: var(--white);
    --snackbar-padding: 8px 15px;
    --snackbar-radius: 3px;
    --snackbar-success-bg: #003467;
    --snackbar-successIcon-size: 29px;
    --snackbar-successIcon-margin: 0 10px 0 0;
    --snackbar-successIcon-color: #42F425;

    // media
    --loading-icon-color: var(--body-color);
    --media-bg: none;
    --media-radius: 6px;

    --box-info-bg-color: var(--beige-400);
    --box-info-radius: 3px;
    --box-info-label-color: var(--brown-500);
    --box-info-value-color: var(--brown-700);

    --me-brand-group-color: var(--body-color);
    --me-brand-group-name-weight: 700;
    --me-brand-group-name-size: 18px;
    --me-brand-group-name-line-height: 27px;
    --me-brand-group-img-width: 40px;
    --me-brand-group-img-height: 40px;
    --me-brand-group-img-radius: 100%;
    --me-brand-group-img-border: 3px solid var(--border-primary-color);
    --me-brand-group-price-border: 1px solid var(--border-brown-color);
    --me-brand-group-price-radius: 4px;

    --grid-item-bg: var(--beige-400);
    --grid-item-border: 0;
    --grid-item-radius: 6px;
    --grid-item-ouline-hover: 5px solid var(--white);
    --grid-item-img-margin: 0;
    --grid-item-img-width: 100%;
    --grid-item-info-padding: 12px 10px 15px;
    --grid-item-name-weight: 400;
    --grid-item-name-size: 16px;
    --grid-item-name-line-height: 20px;
    --grid-item-name-spacing: 0.06em;
    --grid-item-name-transform: uppercase;
    --grid-item-name-color: var(--primary-color);
    --grid-item-name-margin: 0 0 11px;
    --grid-item-nameSpan-color: var(--brown-700);
    --grid-item-price-color: var(--brown-700);
    
    --collection-card-title-size: 20px;
    --collection-card-title-line-height: 25px;
    --collection-card-title-transform: uppercase;
    --collection-card-title-color: var(--brown-700);
    --collection-card-title-size: 16px;
    --collection-card-des-line-height: 25px;
    --collection-card-des-color: var(--brown-700);

    --me-selected-items-bg: var(--brown-700);
    --me-selected-items-radius: 16px 16px 0 0;
    --me-selected-items-title-weight: 400;
    --me-selected-items-title-size: 16px;
    --me-selected-items-title-line-height: 20px;
    --me-selected-items-title-color: var(--white);

    // detail
    --detail-row-margin: 0 -15px;
    --detail-colLeft-width: 50%;
    --detail-colLeft-padding: 0 15px 0 0 ;
    --detail-colRight-width: 50%;
    --detail-colRight-padding: 0  0 0 15px;
    --detail-title-font: var(--h1-font);
    --detail-title-color: var(--h1-color);
    --detail-title-size: var(--h1-size);
    --detail-title-line-height: var(--h1-line-height);
    --detail-title-weight: var(--h1-weight);
    --detail-title-spacing: var(--h1-spacing);
    --detail-title-transform: var(--h1-transform);
    --detail-title-span-color: var(--brown-700);
    --detail-reload-btn-color: var(--brown-300);
    --detail-moonrank-bg: var(--brown-700);
    --detail-moonrank-radius: 3px;
    --detail-moonrank-padding: 0 3px 0 0;
    --detail-moonrank-weight: 500;
    --detail-moonrank-size: 18px;
    --detail-moonrank-line-height: 23px;
    --detail-moonrank-spacing: 0.15em;
    --detail-moonrank-transform: uppercase;
    --detail-moonrank-color: var(--white);
    --detail-priceBox-bg: none;
    --detail-priceBox-border: 1px solid var(--brown-300);
    --detail-priceBox-radius: 3px;
    --detail-priceBox-margin: 0 0 20px;
    --detail-priceBox-padding: 27px 25px 40px;
    --detail-priceLabel-color: var(--brown-700);
    --detail-priceLabel-weight: 400;
    --detail-priceLabel-size: 16px;
    --detail-priceLabel-line-height: 20px;
    --detail-priceLabel-spacing: 0.05em;
    --detail-priceLabel-transform: uppercase;
    --detail-priceLabel-margin: 0 0 19px;
    --detail-priceNotListed-margin: 0 0 45px;
    --detail-price-weight: 700;
    --detail-price-size: 38px;
    --detail-price-line-height: 48px;
    --detail-price-color: var(--brown-700);
    --detail-price-margin: 0 0 32px;
    --detail-priceIcon-width: 28px;
    --detail-priceIcon-height: 28px;
    --detail-hBid-bg: var(--brown-700);
    --detail-hBid-radius: 3px;
    --detail-hBid-padding: 4px 10px;
    --detail-hBid-width: 131px;
    --detail-hBid-weight: 400;
    --detail-hBid-size: 16px;
    --detail-hBid-line-height: 20px;
    --detail-hBid-spacing: 0.05em;
    --detail-hBid-transform: uppercase;
    --detail-hBid-color: #ffffff;
    --detail-actions-width: 492px;
    --detail-actions-margin: 20px 0 0;
    --detail-actionBtn-margin: 0 0 0 10px;
    --detail-terms-weight: 500;
    --detail-terms-size: 14px;
    --detail-terms-line-height: 18px;
    --detail-terms-color: #886f55;
    --detail-terms-padding: 10px 0 0;
    --detail-terms-margin: 0 0 -11px;
    --detail-termLink-color: var(--brown-300);
    --detail-termLink-hover-color: var(--brown-300);

    // history chart
    --history-chart-bg: none;
    --history-chart-border: 0;
    --history-chart-radius: 0;
    --history-chart-padding: 5px 0 0 5%;
    --history-chart-weight: 500;
    --history-chart-size: 14px;
    --history-chart-line-height: 18px;
    --history-chart-transform: uppercase;
    --history-chart-color: var(--brown-600);
    --history-tooltip-bg: var(--beige-400);
    --history-tooltip-border: 1px solid var(--beige-400);
    --history-tooltip-radius: 8px;
    --history-tooltip-color: var(--brown-600);

    // activities filter
    --acts-filter-margin: 0 10px 10px 0;
    --acts-filter-padding: 2px 8px;
    --acts-filter-mwidth: 52px;
    --acts-filter-height: 26px;
    --acts-filter-bg: var(--beige-400);
    --acts-filter-border: 1px solid var(--beige-400);
    --acts-filter-radius: 3px;
    --acts-filter-weight: 600;
    --acts-filter-size: 16px;
    --acts-filter-line-height: 20px;
    --acts-filter-spacing: 0.15em;
    --acts-filter-transform: uppercase;
    --acts-filter-color: var(--brown-600);
    --acts-filter-active-bg: none;
    --acts-filter-active-border: 1px solid var(--brown-500);

    // details tab
    --details-margin: 0 0 18px;
    --details-label-weight: 500;
    --details-label-size: 12px;
    --details-label-line-height: 15px;
    --details-label-transform: uppercase;
    --details-label-color: var(--brown-600);
    --details-value-weight: 400;
    --details-value-size: 20px;
    --details-value-line-height: 25px;
    --details-value-color: var(--brown-700);

    // attributes & custom attributes tab
    --attrs-item-margin: 0 0 20px;
    --attrs-item-padding: 0;
    --attrs-box-bg: none;
    --attrs-box-radius: 0;
    --attrs-box-padding: 0;
    --attrs-label-weight: 500;
    --attrs-label-size: 14px;
    --attrs-label-line-height: 18px;
    --attrs-label-transform: uppercase;
    --attrs-label-color: var(--brown-600);
    --attrs-label-spacing: 0.04em;
    --attrs-label-margin: 0;
    --attrs-value-weight: 400;
    --attrs-value-size: 20px;
    --attrs-value-line-height: 25px;
    --attrs-value-color: var(--brown-700);
    --attrs-rarity-weight: 400;
    --attrs-rarity-size: 16px;
    --attrs-rarity-line-height: 20px;
    --attrs-rarity-color: var(--brown-700);

    // About NTF
    --about-NTF-size: 16px;
    --about-NTF-line-height: 24px;
    --about-NTF-color: var(--brown-700);

    // NTF Sharing
    --sharing-color: var(--brown-500);
    --sharing-weight: 500;
    --sharing-size: 14px;
    --sharing-line-height: 18px;
    --sharing-spacing: 0.04em;
    --sharing-transform: uppercase;
    --sharing-content-bg: var(--brown-700);
    --sharing-content-color: var(--white);
    --sharing-content-radius: 8px;

    // Not found
    --not-found-color: var(--body-color);
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  main,
  footer,
  header,
  nav,
  section,
  summary {
      display: block;
  }

  audio,
  canvas,
  video {
      display: inline-block;
  }

  audio:not([controls]) {
      display: none;
      height: 0;
  }

  nav ul,
  nav ol {
      list-style: none none;
  }

  img {
      max-width: 100%;
      height: auto;
      border: 0;
  }

  video,
  embed,
  object {
      max-width: 100%;
  }

  svg:not(:root) {
      overflow: hidden;
  }

  figure {
      margin: 0;
  }

  /* .lib-typography-all(); */

  table {
      /* .lib-table(); */
  }

  button {
      /* .lib-button(); */
      &::-moz-focus-inner {
          border: 0;
          padding: 0;
      }
  }

  /* .lib-form-element-all(); */
  form {
      -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  input[type=text],
  input[type=password],
  input[type=url],
  input[type=tel],
  input[type=search],
  input[type=number],
  input[type=datetime],
  input[type=email] {
      box-shadow: none;

      &:focus {
          box-shadow: none;
          outline: 0;
      }
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active  {
    -webkit-box-shadow: 0 0 0 30px #120C18 inset !important;
    border-radius: 0!important;
    color: #fff!important;
    -webkit-text-fill-color: #fff!important;
  }

  address {
    font-style: normal;
  }

  * {
      &:focus {
          box-shadow: none;
          outline: 0;
      }
  }

  ._keyfocus *,
  input:not([disabled]),
  textarea:not([disabled]),
  select:not([disabled]) {
      &:focus {
          /* .lib-css(box-shadow, @focus__box-shadow); */
      }
  }

  :root{
      font-size: ${(props: StyledComponentProps) => props.theme.root.fontSize.val}${(props: StyledComponentProps) =>
  props.theme.root.fontSize.unit};
  }

  ::placeholder {
      color: ${(props: StyledComponentProps) => props.theme.color.primary.grey}.variants.a300;
  }

  :focus {outline:none;}

  html {
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    font-size-adjust: 100%;
  }

  *{
      box-sizing: border-box;
  }

  html,
  body {
    ${fontStyle.family_outfit}
    ${reset.body}
  }

  body {
    color: var(--body-color);
    background-color: var(--body-bg-color);
    line-height: var(--body-line-height);
    font-size: var(--body-size);
    font-weight: var(--body-weight);
    font-family: var(--body-font);
    overflow-x: hidden;

    &.nav-open {
      overflow: hidden;
    }
  }

  main{
      position: relative;
      display: block;
  }

  svg{
      display: block;
  }

  p {
    ${pBase}
  }

  /* h1 {
    ${h1}
  }
  h2 {
    ${h2}
  }
  h3 {
    ${h3}
  }
  h4 {
    ${h4}
  }
  h5 {
    ${h5}
  }
  h6 {${fontStyle.H6}} */

  .caption    {${fontStyle.C1}}
  .caption_sm {${fontStyle.C2}}

  button {
      ${reset.button}
  }

  *{
      box-sizing: border-box;
  }

  a {
    color: ${(props: StyledComponentProps) => props.theme.color.links.primary.default};
    text-decoration: none;

    &:hover {
      color: ${(props: StyledComponentProps) => props.theme.color.links.primary.hover};
    }
  }

  .MuiTooltip-tooltip {
    color: rgba(248,247,248,1)!important;
    font-size: .95rem!important;
    border-radius: 0.375rem!important;
    border: 2px solid rgba(51,39,63,1)!important;
    background: rgba(18,12,24,1)!important;
    padding: 0.5rem!important;
    line-height: 1.5!important;
    margin: 0 0 10px 0!important;
  }

  .MuiTooltip-tooltip-detail {
    border-radius: 4px!important;
    border: 0!important;
    background: rgb(51 51 51)!important;
    padding: 0.5rem 1rem!important;
    line-height: 1.2!important;
  }

  .MuiTooltip-tooltip-detail-action {
    border-radius: 4px!important;
    border: 0!important;
    background: rgb(51 51 51)!important;
    padding: 0.5rem 1rem!important;
    line-height: 1.2!important;
    text-align: center;
    max-width: 400px!important;
  }

  table {
    width: 100%;
    border-color: inherit;
    text-indent: 0;
    border-collapse: collapse;
  }

  td,
  th {
    ${tdTable}
  }

  tbody, td, tfoot, th, thead, tr {
    border-color: inherit;
    border-style: solid;
    border-width: 0;
  }

  body {
    .SnackbarContainer-top.SnackbarContainer-center {
      width: 100%;
      top: 80px;

      .MuiCollapse-root {
        width: 100%;
        max-width: 640px;
        >.MuiCollapse-wrapper {
          width: 100%;
        }
      }

      .SnackbarItem-contentRoot {
        box-shadow: none;
        font-family: var(--snackbar-font);
        font-weight: var(--snackbar-weight);
        font-size: var(--snackbar-size);
        line-height: var(--snackbar-line-height);
        color: var(--snackbar-color);
        padding: var(--snackbar-padding);
        border-radius: var(--snackbar-radius);
        position: relative;

        &.SnackbarItem-variantSuccess {
          background: var(--snackbar-success-bg);

          .MuiSvgIcon-root {
            color: var(--snackbar-successIcon-color);
          }
        }
      }

      .SnackbarItem-action{
        padding-left: 16px;
        margin-right: -8px;
        position: absolute;
        right: 30px;
        top: 20px;
      }

      .SnackbarItem-message {
        padding: 3px 0;
      }

      .MuiSvgIcon-root {
        font-size: var(--snackbar-successIcon-size)!important;
        margin: var(--snackbar-successIcon-margin)!important;
      }
    }
  }
`;

export default globalStyle;
