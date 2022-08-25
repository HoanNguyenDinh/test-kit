import { css } from 'styled-components';
import { StyledComponentProps } from '../theme';
import mediaDevice from './mediaDevice';

type FontProps = {
  fontSize: {
    val: number;
    unit: string;
  };
  marginBottom?: string;
};

/************************
Function ****************
************************/

/***********************
GRID *******************
************************/
const commonGutter = css`
  @media ${mediaDevice.xl} {
    padding-left: ${(props: StyledComponentProps) => props.theme.gutter.xl.val};
    padding-right: ${(props: StyledComponentProps) => props.theme.gutter.xl.val};
  }

  @media ${mediaDevice.lg} {
    padding-left: ${(props: StyledComponentProps) => props.theme.gutter.lg.val};
    padding-right: ${(props: StyledComponentProps) => props.theme.gutter.lg.val};
  }

  @media ${mediaDevice.md} {
    padding-left: ${(props: StyledComponentProps) => props.theme.gutter.md.val};
    padding-right: ${(props: StyledComponentProps) => props.theme.gutter.md.val};
  }

  @media ${mediaDevice.sm} {
    padding-left: ${(props: StyledComponentProps) => props.theme.gutter.sm.val};
    padding-right: ${(props: StyledComponentProps) => props.theme.gutter.sm.val};
  }

  @media ${mediaDevice.xs} {
    padding-left: ${(props: StyledComponentProps) => props.theme.gutter.xs.val};
    padding-right: ${(props: StyledComponentProps) => props.theme.gutter.xs.val};
  }
`;

const commonGutterLeft = css`
  @media ${mediaDevice.xl} {
    padding-left: ${(props: StyledComponentProps) => props.theme.gutter.xl.val};
  }

  @media ${mediaDevice.lg} {
    padding-left: ${(props: StyledComponentProps) => props.theme.gutter.lg.val};
  }

  @media ${mediaDevice.md} {
    padding-left: ${(props: StyledComponentProps) => props.theme.gutter.md.val};
  }

  @media ${mediaDevice.sm} {
    padding-left: ${(props: StyledComponentProps) => props.theme.gutter.sm.val};
  }

  @media ${mediaDevice.xs} {
    padding-left: ${(props: StyledComponentProps) => props.theme.gutter.xs.val};
  }
`;

const commonGutterRight = css`
  @media ${mediaDevice.xl} {
    padding-right: ${(props: StyledComponentProps) => props.theme.gutter.xl.val};
  }

  @media ${mediaDevice.lg} {
    padding-right: ${(props: StyledComponentProps) => props.theme.gutter.lg.val};
  }

  @media ${mediaDevice.md} {
    padding-right: ${(props: StyledComponentProps) => props.theme.gutter.md.val};
  }

  @media ${mediaDevice.sm} {
    padding-right: ${(props: StyledComponentProps) => props.theme.gutter.sm.val};
  }

  @media ${mediaDevice.xs} {
    padding-right: ${(props: StyledComponentProps) => props.theme.gutter.xs.val};
  }
`;
const commonGutterTop = css`
  @media ${mediaDevice.xl} {
    padding-top: ${(props: StyledComponentProps) => props.theme.gutter.xl.val};
  }

  @media ${mediaDevice.lg} {
    padding-top: ${(props: StyledComponentProps) => props.theme.gutter.lg.val};
  }

  @media ${mediaDevice.md} {
    padding-top: ${(props: StyledComponentProps) => props.theme.gutter.md.val};
  }

  @media ${mediaDevice.sm} {
    padding-top: ${(props: StyledComponentProps) => props.theme.gutter.sm.val};
  }

  @media ${mediaDevice.xs} {
    padding-top: ${(props: StyledComponentProps) => props.theme.gutter.xs.val};
  }
`;

const commonGutterBottom = css`
  @media ${mediaDevice.xl} {
    padding-bottom: ${(props: StyledComponentProps) => props.theme.gutter.xl.val};
  }

  @media ${mediaDevice.lg} {
    padding-bottom: ${(props: StyledComponentProps) => props.theme.gutter.lg.val};
  }

  @media ${mediaDevice.md} {
    padding-bottom: ${(props: StyledComponentProps) => props.theme.gutter.md.val};
  }

  @media ${mediaDevice.sm} {
    padding-bottom: ${(props: StyledComponentProps) => props.theme.gutter.sm.val};
  }

  @media ${mediaDevice.xs} {
    padding-bottom: ${(props: StyledComponentProps) => props.theme.gutter.xs.val};
  }
`;

/************************
RESET *******************
************************/
const RESET_SETTING = css`
  -webkit-appearance: none;
  font: inherit;

  border: none;
  border-radius: 0;
  margin: 0;
  padding: 0;

  width: auto;
  overflow: visible;
  background: transparent;

  outline: none;
  text-align: inherit;
  line-height: normal;
  color: inherit;

  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;

  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
`;

const reset = {
  body: css`
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
    -webkit-text-size-adjust: none;
    margin: 0;
    padding: 0;
  `,
  button: css`
    ${RESET_SETTING}
    cursor: pointer;
    touch-action: manipulation;
  `,
  input: css`
    ${RESET_SETTING}
  `
};

/************************
FONT ********************
************************/
const FONT_SETTING = css`
  font-weight: ${(props: StyledComponentProps) => props.theme.font.reset.fontWeight};
  line-height: ${(props: StyledComponentProps) => props.theme.font.reset.lineHeight.val + props.theme.font.reset.lineHeight.unit};
  margin: ${(props: StyledComponentProps) => props.theme.font.reset.margin};
  padding: ${(props: StyledComponentProps) => props.theme.font.reset.padding};
  //color: ${(props: StyledComponentProps) => props.theme.color.text.primary};
`;

const generateFont = (fontProps: FontProps) => {
  return css`
    ${FONT_SETTING}
    font-size: ${fontProps['fontSize'].val}${fontProps['fontSize'].unit};
    margin-bottom: ${fontProps['marginBottom']};
  `;
};

const fontStyle = {
  family_sans: css`
    font-family: ${(props: StyledComponentProps) => props.theme.font.family.sans};
  `,
  family_serif: css`
    font-family: ${(props: StyledComponentProps) => props.theme.font.family.serif};
  `,
  family_sparenomo: css`
    font-family: ${(props: StyledComponentProps) => props.theme.font.family.monospare};
  `,
  family_outfit: css`
    font-family: ${(props: StyledComponentProps) => props.theme.font.family.outfit};
  `,
  family_cheddar: css`
    font-family: ${(props: StyledComponentProps) => props.theme.font.family.cheddar};
  `,
  BODY: css`
    ${(props: StyledComponentProps) => props.theme.font.main.body.fontSize.val}${(props: StyledComponentProps) =>
      props.theme.font.main.body.fontSize.unit};
  `,
  D1: css`
    ${(props: StyledComponentProps) => generateFont(props.theme.font.main.d1)}
  `,
  H1: css`
    ${(props: StyledComponentProps) => generateFont(props.theme.font.main.h1)}
  `,
  H2: css`
    ${(props: StyledComponentProps) => generateFont(props.theme.font.main.h2)}
  `,
  H3: css`
    ${(props: StyledComponentProps) => generateFont(props.theme.font.main.h3)}
  `,
  H4: css`
    ${(props: StyledComponentProps) => generateFont(props.theme.font.main.h4)}
  `,
  H5: css`
    ${(props: StyledComponentProps) => generateFont(props.theme.font.main.h5)}
  `,
  H6: css`
    ${(props: StyledComponentProps) => generateFont(props.theme.font.main.h6)}
  `,
  P1: css`
    ${(props: StyledComponentProps) => generateFont(props.theme.font.main.p1)}
  `,
  P2: css`
    ${(props: StyledComponentProps) => generateFont(props.theme.font.main.p2)}
  `,
  C1: css`
    ${(props: StyledComponentProps) => generateFont(props.theme.font.main.c1)}
  `,
  C2: css`
    ${(props: StyledComponentProps) => generateFont(props.theme.font.main.c2)}
  `
};

// Clearfix
const clearFix = css`
  &:before,
  &:after {
    content: '';
    display: table;
  }

  &:after {
    clear: both;
  }
`;

// ul, ol reset
const resetList = css`
  list-style: none;
  padding: 0;
  margin: 0;
`;

// button
const defaultButton = css`
  background: #e42575;
  border-radius: 8px;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  min-width: 92px;
  min-height: 44px;
  color: #f5f3f7;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const primaryButton = css`
  width: 100%;
  text-align: center;
  height: 40px;
  padding: 0 12px;
  transition: all 0.3s ease;
  border-radius: 0.375rem;
  color: rgba(248,247,248,1)
  display: inline-flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  background: ${(props: StyledComponentProps) => props.theme.color.background.secondary};
  font-size: ${(props: StyledComponentProps) => props.theme.font.typography.t2.fontSize.val}${(props: StyledComponentProps) =>
  props.theme.font.typography.t2.fontSize.unit};

  &:hover {
    opacity: .8;
  }
`;

const customButton = css`
  background: #19ab6e;
  border-radius: 3px;
  min-height: 44px;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.13em;
  color: #ffffff;
  padding: 0 16px;
  text-transform: uppercase;
  font-family: ${(props: StyledComponentProps) => props.theme.font.family.outfit};

  &:disabled {
    opacity: 0.5;
  }

  /* &:hover,
  &:not([disabled]):hover {
    background: #3b38b3;
  }

  &:disabled {
    opacity: 0.5;
  } */
`;

const customButtonOkayBear = css`
  background: rgba(25, 171, 110, 1);
  border-radius: 3px;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1rem;
  font-weight: 600;
  font-size: 1rem;
  line-height: 20px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.13em;
  color: ${(props: StyledComponentProps) => props.theme.color.white};
  font-family: ${(props: StyledComponentProps) => props.theme.font.family.outfit};
`;

const secondaryButton = css`
  background: none;
  border-radius: 8px;
  border: 1px solid ${(props: StyledComponentProps) => props.theme.color.background.secondary};

  @media ${mediaDevice.xsm} {
    min-width: 161px;
  }
`;

const primaryContainedButton = css`
  background: var(--btn-contained-bg);
  border-radius: var(--btn-contained-radius);
  min-height: var(--btn-contained-height);
  padding: var(--btn-contained-padding);
  font-weight: var(--btn-contained-weight);
  font-size: var(--btn-contained-size);
  line-height: var(--btn-contained-line-height);
  letter-spacing: var(--btn-contained-spacing);
  text-transform: var(--btn-contained-transform);
  color: var(--btn-contained-color);
  display: inline-flex;
  align-items: center;
  align-content: center;
  justify-content: center;

  &:not([disabled]):hover {
    background: var(--btn-contained-bg);
  }

  &:disabled {
    opacity: 0.5;
  }
`;

const primaryContainedSmButton = css`
  background: var(--btn-contained-bg);
  border-radius: var(--btn-contained-radius);
  min-height: var(--btn-contained-sm-height);
  padding: var(--btn-contained-padding);
  font-weight: var(--btn-contained-sm-weight);
  font-size: var(--btn-contained-sm-size);
  line-height: var(--btn-contained-sm-line-height);
  letter-spacing: var(--btn-contained-spacing);
  text-transform: var(--btn-contained-transform);
  color: var(--btn-contained-color);
  display: inline-flex;
  align-items: center;
  align-content: center;
  justify-content: center;

  &:hover {
    background: var(--btn-contained-bg);
    color: var(--btn-contained-color);
  }

  &:disabled {
    opacity: 0.5;
  }
`;

const primaryOutlinedButton = css`
  background: var(--btn-outline-bg);
  border: var(--btn-outline-border);
  border-radius: var(--btn-outline-radius);
  min-height: var(--btn-outline-height);
  font-weight: var(--btn-outline-weight);
  font-size: var(--btn-outline-size);
  line-height: var(--btn-outline-line-height);
  letter-spacing: var(--btn-outline-spacing);
  text-transform: var(--btn-outline-transform);
  color: var(--btn-outline-color);
  padding: var(--btn-outline-padding);
  text-align: center;

  &:hover {
    background: var(--btn-outline-bg);
    border: var(--btn-outline-border);
    color: var(--btn-outline-color);
  }
`;

const primaryTextButton = css`
  font-weight: var(--btn-text-weight);
  font-size: var(--btn-text-size);
  line-height: var(--btn-text-line-height);
  letter-spacing: var(--btn-text-spacing);
  text-transform: var(--btn-text-transform);
  color: var(--btn-text-color);
`;

const secondContainedButton = css``;
const secondOutlinedButton = css`
  background: var(--btn-outline-second-bg);
  border: var(--btn-outline-second-border);
  border-radius: var(--btn-outline-radius);
  min-height: var(--btn-outline-height);
  font-weight: var(--btn-outline-weight);
  font-size: var(--btn-outline-size);
  line-height: var(--btn-outline-line-height);
  letter-spacing: var(--btn-outline-spacing);
  text-transform: var(--btn-outline-transform);
  color: var(--btn-outline-second-color);
  padding: var(--btn-outline-padding);
  text-align: center;
`;
const secondTextButton = css``;

// grid 2 columns
const gridTwoCols = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;

  @media ${mediaDevice.md} {
    width: calc(100% + 48px);
    margin: 0 -24px;
    flex-flow: row wrap;
  }
`;
const gridTwoColLeft = css`
  @media ${mediaDevice.md} {
    width: 48.6%;
    padding: 0 24px;
  }
`;
const gridTwoColRight = css`
  @media ${mediaDevice.md} {
    width: 51.4%;
    padding: 0 24px;
  }
`;

const row = css`
  margin-left: -${(props: StyledComponentProps) => props.theme.gutter.xs.val};
  margin-right: -${(props: StyledComponentProps) => props.theme.gutter.xs.val};
`;

const column = css`
  padding-left: ${(props: StyledComponentProps) => props.theme.gutter.xs.val};
  padding-right: ${(props: StyledComponentProps) => props.theme.gutter.xs.val};
`;

//
// Updated Design
//
const scroll = css`
  &::-webkit-scrollbar {
    background: none;
    height: 6px;
    width: 7px;
  }

  &::-webkit-scrollbar-corner {
    background: none;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(136, 111, 85, 0.5);
    border-radius: 100px;
  }
`;

const customScroll = css`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow: auto;
  padding-bottom: 1.5rem;
  ${scroll}
`;

const customScrollX = css`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding-bottom: 1.5rem;
  ${scroll}
  overflow-x: auto;
  overflow-y: hidden;
`;

const customScrollY = css`
  ${scroll}
  overflow-y: auto;
  overflow-x: hidden;
`;

const secondScroll = css`
  &::-webkit-scrollbar {
    background: #f3eadb;
    height: 3px;
    width: 3px;
  }

  &::-webkit-scrollbar-corner {
    background: #f3eadb;
  }

  &::-webkit-scrollbar-thumb {
    background: #19ab6e;
  }
`;

const customSecondScroll = css`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding-bottom: 1.5rem;
  ${secondScroll}
  overflow: auto;
  padding: 0 10px 0 0;
`;

const customSecondScrollX = css`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding-bottom: 1.5rem;
  ${secondScroll}
  overflow-x: auto;
  overflow-y: hidden;
`;

const customSecondScrollY = css`
  ${secondScroll}
  overflow-y: auto;
  overflow-x: hidden;
`;

// Typography
const h1 = css`
  color: var(--h1-color);
  letter-spacing: var(--h1-spacing);
  line-height: var(--h1-line-height);
  font-size: var(--h1-size);
  font-family: var(--h1-font);
  font-weight: var(--h1-weight);
  text-transform: var(--h1-transform);
`;

const h2 = css`
  color: var(--h2-color);
  letter-spacing: var(--h2-spacing);
  line-height: var(--h2-line-height);
  font-size: var(--h2-size);
  font-family: var(--h2-font);
  font-weight: var(--h2-weight);
  text-transform: var(--h2-transform);
`;

const h3 = css`
  color: var(--h3-color);
  letter-spacing: var(--h3-spacing);
  line-height: var(--h3-line-height);
  font-size: var(--h3-size);
  font-family: var(--h3-font);
  font-weight: var(--h3-weight);
  text-transform: var(--h3-transform);
`;

const h4 = css`
  color: var(--h4-color);
  letter-spacing: var(--h4-spacing);
  line-height: var(--h4-line-height);
  font-size: var(--h4-size);
  font-family: var(--h4-font);
  font-weight: var(--h4-weight);
  text-transform: var(--h4-transform);
`;

const h5 = css`
  color: var(--h5-color);
  letter-spacing: var(--h5-spacing);
  line-height: var(--h5-line-height);
  font-size: var(--h5-size);
  font-family: var(--h5-font);
  font-weight: var(--h5-weight);
  text-transform: var(--h5-transform);
`;

const pBase = css`
  line-height: var(--p-line-height);
  font-size: var(--p-size);
  margin: var(--p-margin);
`;

const pSmall = css`
  line-height: var(--p-small-line-height);
  font-size: var(--p-small-size);
`;

const pLarge = css`
  line-height: var(--p-large-line-height);
  font-size: var(--p-large-size);
`;

const pageTitle = css`
  color: var(--page-title-color);
  letter-spacing: var(--page-title-spacing);
  line-height: var(--page-title-line-height);
  font-size: var(--page-title-size);
  font-family: var(--page-title-font);
  font-weight: var(--page-title-weight);
  text-transform: var(--page-title-transform);
`;

// Table
const wrapTable = css`
  ${customScroll}
  width: 100%;
  padding-bottom: 0;

  &.scroll {
    max-height: 400px;
  }
`;

const thTable = css`
  color: var(--table-th-color);
  line-height: var(--table-th-line-height);
  font-size: var(--table-th-size);
  font-weight: var(--table-th-weight);
  text-transform: var(--table-th-transform);
  padding: var(--table-th-padding);
  text-align: var(--table-th-align);
`;
const tdTable = css`
  padding: var(--table-td-padding);
  text-align: var(--table-td-align);
  color: var(--table-td-color);
  line-height: var(--table-td-line-height);
  font-size: var(--table-td-size);
  font-weight: var(--table-td-weight);
`;

const sourceVal = css`
  white-space: nowrap;
  color: var(--table-source-val-color);
  margin: var(--table-source-margin);
`;

const transactionType = css`
  span {
    &.cancel-bid,
    &.cancel-listing {
      color: var(--table-transc-cancel-color);
    }

    &.place-bid {
      color: var(--table-transc-place-color);
    }

    &.sale {
      color: var(--table-transc-sale-color);
    }
  }
`;

const linkTable = css`
  color: var(--table-link-color);

  &:hover {
    text-decoration: var(--table-link-hover-decoration);
    color: var(--table-link-hover-color);
    opacity: var(--table-link-hover-opacity);
  }
`;

const thTableSecondary = css`
  color: var(--table-secondary-th-color);
`;

const tdTableSecondary = css`
  padding: var(--table-secondary-td-padding);
  line-height: var(--table-secondary-td-line-height);
  font-size: var(--table-secondary-td-size);
`;

const sourceValSecondary = css`
  white-space: nowrap;
  color: var(--table-secondary-source-val-color);
  margin: var(--table-secondary-source-margin);
`;

const transactionTypeSecondary = css`
  span {
    &.cancel-bid,
    &.cancel-listing {
      color: var(--table-secondary-transc-cancel-color);
    }

    &.place-bid {
      color: var(--table-secondary-transc-place-color);
    }

    &.sale {
      color: var(--table-secondary-transc-sale-color);
    }
  }
`;

// Layout

const mxWidth = css`
  margin-left: auto;
  margin-right: auto;
  padding-left: ${(props: StyledComponentProps) => props.theme.indent.xs.val};
  padding-right: ${(props: StyledComponentProps) => props.theme.indent.xs.val};

  @media ${mediaDevice.xl} {
    max-width: var(--layout-max-width);
  }
`;

const mxWidthLg = css`
  margin-left: auto;
  margin-right: auto;
  padding-left: ${(props: StyledComponentProps) => props.theme.indent.xs.val};
  padding-right: ${(props: StyledComponentProps) => props.theme.indent.xs.val};

  @media ${mediaDevice.lg} {
    max-width: ${(props: StyledComponentProps) => props.theme.mxLayout.lg.val};
  }
`;

const mxIndentWidth = css`
  margin-left: auto;
  margin-right: auto;
  max-width: ${(props: StyledComponentProps) => props.theme.mxWidth.xs.val};
  padding-left: ${(props: StyledComponentProps) => props.theme.indent.xs.val};
  padding-right: ${(props: StyledComponentProps) => props.theme.indent.xs.val};

  @media ${mediaDevice.lg} {
    max-width: ${(props: StyledComponentProps) => props.theme.mxWidth.lg.val};
    padding-left: ${(props: StyledComponentProps) => props.theme.indent.lg.val};
    padding-right: ${(props: StyledComponentProps) => props.theme.indent.lg.val};
  }
`;

const mxWidthNoGutter = css`
  margin-left: auto;
  margin-right: auto;
  max-width: ${(props: StyledComponentProps) => props.theme.mxWidth.xs.val};

  @media ${mediaDevice.xgl} {
    max-width: ${(props: StyledComponentProps) => props.theme.mxWidth.xgl.val};
  }
`;

const mxFullWidth = css`
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
`;

const container = css`
  ${mxWidth}
`;

// Dialog
const primaryDialog = css`
  .MuiBackdrop-root {
    background: var(--dialog-overlay-bg);
  }

  .MuiDialog-container {
  }

  .MuiPaper-root {
    background: var(--dialog-bg);
    border-radius: var(--dialog-radius);
    margin: 16px;
    padding: 20px 4px 20px 20px;
    max-width: var(--dialog-width);
    width: 100%;
  }

  .MuiDialogContent-root {
    padding: 0;
  }
`;

const primaryDialogContent = css`
  color: #fff;
`;

const primaryDialogTitleWrapper = css`
  color: #fff;
  position: relative;
`;

const primaryDialogTitle = css`
  font-weight: var(--dialog-title-weight);
  font-size: var(--dialog-title-size);
  line-height: var(--dialog-title-line-height);
  letter-spacing: var(--dialog-title-spacing);
  text-transform: var(--dialog-title-transform);
  color: var(--dialog-title-color);
`;

const primaryDialogCloseBtn = css`
  position: absolute;
  right: 15px;
  top: 0;
  background: var(--dialog-close-btn-bg);
  border-radius: var(--dialog-close-btn-radius);
  width: var(--dialog-close-btn-width);
  height: var(--dialog-close-btn-height);
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;

  svg {
    path {
      stroke: var(--dialog-close-btn-color);
    }
  }
`;

const primaryDialogMessage = css`
  color: var(--dialog-message-color);

  &.error {
    color: var(--dialog-message-error-color);
  }

  &.success {
    color: var(--dialog-message-success-color);
  }
`;

const primaryDialogMeNTFName = css`
  font-weight: var(--dialog-ntf-name-weight);
  font-size: var(--dialog-ntf-name-size);
  line-height: var(--dialog-ntf-name-line-height);
  color: var(--dialog-ntf-name-color);
`;

const primaryDialogMeNTFPrice = css`
  font-weight: var(--dialog-ntf-price-weight);
  font-size: var(--dialog-ntf-price-size);
  line-height: var(--dialog-ntf-price-line-height);
  color: var(--dialog-ntf-price-color);
  opacity: var(--dialog-ntf-price-opacity);
`;

const primaryDialogMeListTitle = css`
  font-weight: var(--dialog-list-title-weight);
  font-size: var(--dialog-list-title-size);
  line-height: var(--dialog-list-title-line-height);
  text-align: var(--dialog-list-title-align);
  text-transform: var(--dialog-list-title-transform);
  color: var(--dialog-list-title-color);
  border-bottom: var(--dialog-list-title-border);
`;

// Form
const baseInput = css`
  background: var(--input-bg);
  border-radius: var(--input-radius);
  border: var(--input-border);
  font-family: var(--body-font);
  font-style: normal;
  font-weight: var(--input-weight);
  font-size: var(--input-size);
  line-height: var(--input-line-height);
  color: var(--input-color);
  padding: var(--input-padding);
  height: var(--input-height);

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  &::-webkit-input-placeholder {
    color: var(--input-placeholder-color);
  }

  &:-ms-input-placeholder {
    color: var(--input-placeholder-color);
  }

  &::placeholder {
    color: var(--input-placeholder-color);
  }
`;

const secondInput = css`
  background: var(--input-second-bg);
  border-radius: var(--input-second-radius);
  border: var(--input-second-border);
  font-family: var(--body-font);
  font-style: normal;
  font-weight: var(--input-second-weight);
  font-size: var(--input-second-size);
  line-height: var(--input-second-line-height);
  color: var(--input-second-color);
  padding: var(--input-second-padding);
  height: var(--input-second-height);

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  &::-webkit-input-placeholder {
    color: var(--input-second-placeholder-color);
  }

  &:-ms-input-placeholder {
    color: var(--input-second-placeholder-color);
  }

  &::placeholder {
    color: var(--input-second-placeholder-color);
  }
`;

// Grid
const gridRow = css`
  margin: 0 -8px;
`;

const gridCol = css`
  padding-left: 8px;
  padding-right: 8px;
  margin-bottom: 16px;
`;

const gridMdRow = css`
  margin: 0 -27px;
`;

const gridMdCol = css`
  padding-left: 27px;
  padding-right: 27px;
  margin-bottom: 54px;
`;

const gridLgRow = css`
  margin: 0 -30px;
`;

const gridLgCol = css`
  padding-left: 30px;
  padding-right: 30px;
  margin-bottom: 60px;
`;

const gridItemWrapper = css`
  background: var(--grid-item-bg);
  border: var(--grid-item-border);
  border-radius: var(--grid-item-radius);
  display: flex;
  width: 100%;
  flex-direction: column;
  transition-duration: 0.3s;
  transition-property: opacity, -webkit-transform;
  transition-property: opacity, transform;
  transition-property: opacity, transform, -webkit-transform;
  transition-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75);
  overflow: hidden;

  &:hover {
    outline: var(--grid-item-ouline-hover);
  }

  &.no-hover {
    a {
      cursor: default;
    }
  }
`;

const gridItemName = css`
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-weight: var(--grid-item-name-weight);
  font-size: var(--grid-item-name-size);
  line-height: var(--grid-item-name-line-height);
  letter-spacing: var(--grid-item-name-spacing);
  text-transform: var(--grid-item-name-transform);
  margin: var(--grid-item-name-margin);
  color: var(--grid-item-name-color);

  span {
    color: var(--grid-item-nameSpan-color);
  }
`;

const collectionCard = {
  title: css`
    font-weight: 700;
    font-size: var(--collection-card-title-size);
    line-height: var(--collection-card-title-line-height);
    text-transform: var(--collection-card-title-transform);
    color: var(--collection-card-title-color);
    letter-spacing: 0.05em;
    margin: 0 0 30px;
  `,
  description: css`
    font-size: var(--collection-card-des-size);
    line-height: var(--collection-card-des-line-height);
    color: var(--collection-card-des-color);
    word-break: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin: 0;
  `
};

export {
  commonGutter,
  commonGutterLeft,
  commonGutterRight,
  commonGutterTop,
  commonGutterBottom,
  mxWidth,
  mxWidthLg,
  mxIndentWidth,
  mxWidthNoGutter,
  mxFullWidth,
  container,
  fontStyle,
  reset,
  clearFix,
  resetList,
  gridTwoCols,
  gridTwoColLeft,
  gridTwoColRight,
  defaultButton,
  primaryButton,
  secondaryButton,
  primaryContainedButton,
  primaryContainedSmButton,
  primaryOutlinedButton,
  primaryTextButton,
  secondContainedButton,
  secondOutlinedButton,
  secondTextButton,
  row,
  column,
  customScroll,
  customScrollX,
  customScrollY,
  customSecondScroll,
  customSecondScrollX,
  customSecondScrollY,
  customButton,
  customButtonOkayBear,
  primaryDialog,
  primaryDialogCloseBtn,
  primaryDialogContent,
  primaryDialogTitleWrapper,
  primaryDialogTitle,
  primaryDialogMessage,
  primaryDialogMeNTFName,
  primaryDialogMeNTFPrice,
  primaryDialogMeListTitle,
  baseInput,
  secondInput,
  h1,
  h2,
  h3,
  h4,
  h5,
  pageTitle,
  pBase,
  pSmall,
  pLarge,
  wrapTable,
  thTable,
  tdTable,
  transactionType,
  sourceVal,
  linkTable,
  thTableSecondary,
  tdTableSecondary,
  sourceValSecondary,
  transactionTypeSecondary,
  gridRow,
  gridCol,
  gridMdRow,
  gridMdCol,
  gridLgRow,
  gridLgCol,
  gridItemWrapper,
  gridItemName,
  collectionCard
};
