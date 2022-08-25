import breakpoint from './breakpoint';

const mediaDevice = {
  xs: `only screen and (min-width:${breakpoint.media.xs}px)`,
  xsm: `only screen and (min-width: ${breakpoint.media.xsm}px)`,
  // sm: `only screen and (min-width: ${breakpoint.media.xs}px) and (max-width: ${breakpoint.media.sm}px)`,
  sm: `only screen and (min-width: ${breakpoint.media.sm}px)`,
  md: `only screen and (min-width: ${breakpoint.media.md}px)`,
  ml: `only screen and (min-width: ${breakpoint.media.ml}px)`,
  lg: `only screen and (min-width: ${breakpoint.media.lg}px)`,
  xl: `only screen and (min-width: ${breakpoint.media.xl}px)`,
  medium: `only screen and (min-width: 1360px)`,
  xgl: `only screen and (min-width: ${breakpoint.media.xgl}px)`,
  sxlg: `only screen and (min-width: ${breakpoint.media.sxlg}px)`,
  large: `only screen and (min-width: 2050px)`,
  max_xs: `only screen and (max-width:${breakpoint.media.xs}px)`,
  max_xsm: `only screen and (max-width:${breakpoint.media.xsm}px)`,
  max_sm: `only screen and (max-width: ${breakpoint.media.sm}px)`,
  max_md: `only screen and (max-width: ${breakpoint.media.md}px)`,
  max_ml: `only screen and (max-width: ${breakpoint.media.ml}px)`,
  max_lg: `only screen and (max-width: ${breakpoint.media.lg}px)`,
  max_xl: `only screen and (max-width: ${breakpoint.media.xl}px)`,
  max_xgl: `only screen and (max-width: ${breakpoint.media.xgl}px)`
};

export default mediaDevice;
