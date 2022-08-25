/************************
ROOT ********************
************************/
const ROOT_DEFAULT_FONTSIZE = 16;
const ROOT_FONTSIZE = 1 * ROOT_DEFAULT_FONTSIZE;

const root = {
  fontSize: { val: ROOT_FONTSIZE, unit: 'px' }
};

/************************
GRID ********************
************************/
const grid = {
  xs: { val: 2 },
  sm: { val: 3 },
  md: { val: 8 },
  lg: { val: 12 },
  xl: { val: 12 },
  xgl: { val: 12 }
};

const mxWidth = {
  xs: { val: '100%' },
  sm: { val: '100%' },
  md: { val: '100%' },
  lg: { val: '100%' },
  xl: { val: '100%' },
  xgl: { val: '1400px' }
};

const mxLayout = {
  d: { val: '1400px' },
  full: { val: '100%' },
  md: { val: '1190px' },
  lg: { val: '1240px' },
  sm: { val: '752px' }
};

const gutter = {
  xs: { val: '0.75rem' },
  sm: { val: '12px' },
  md: { val: '12px' },
  lg: { val: '12px' },
  xl: { val: '12px' },
  xgl: { val: '12px' }
};

const indent = {
  xs: { val: '20px' },
  sm: { val: '20px' },
  md: { val: '20px' },
  lg: { val: '20px' },
  xl: { val: '20px' },
  lg_xl: { val: '20px' }
};

/************************
SPACING *****************
************************/
const spacing = [
  { val: '2px' },
  { val: '4px' },
  { val: '8px' },
  { val: '12px' },
  { val: '16px' },
  { val: '24px' },
  { val: '30px' },
  { val: '48px' },
  { val: '22px' },
  { val: '48px' }
];

const spacingRem = [
  { val: '0.25rem' },
  { val: '0.5rem' },
  { val: '0.75rem' },
  { val: '1rem' },
  { val: '1.25rem' },
  { val: '1.5rem' },
  { val: '1.75rem' },
  { val: '2rem' },
  { val: '2.25rem' },
  { val: '2.5rem' },
  { val: '2.75rem' },
  { val: '3rem' },
  { val: '3.25rem' },
  { val: '3.5rem' }
];

/************************
FONT ********************
************************/
const FONT_LINEHEIGHT = 1.5;
const FONT_FONTWEIGHT = 'normal';
const FONT_FONTFAMILY_SERIF =
  "'Inter',ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji";

const FONT_FONTFAMILY_SANS = "'Noto Sans TC', sans";

const FONT_FONTFAMILY_SPAREMONO = "'Space Mono', monospace";
const FONT_FONTFAMILY_OUTFIT =
  "'Outfit', sans-serif, ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji";

const FONT_FONTFAMILY_CHEDAR =
  "'Cheddar Gothic Sans', ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji";

const FONT_ICON = "'fi'";

const font = {
  family: {
    serif: FONT_FONTFAMILY_SERIF,
    sans: FONT_FONTFAMILY_SANS,
    icon: FONT_ICON,
    monospare: FONT_FONTFAMILY_SPAREMONO,
    cheddar: FONT_FONTFAMILY_CHEDAR,
    outfit: FONT_FONTFAMILY_OUTFIT
  },
  reset: {
    lineHeight: { val: FONT_LINEHEIGHT, unit: 'em' },
    fontWeight: FONT_FONTWEIGHT,
    margin: 0,
    padding: 0
  },
  main: {
    body: {
      fontSize: { val: 14 / ROOT_DEFAULT_FONTSIZE, unit: 'rem' }
    },
    d1: {
      fontSize: { val: 48 / ROOT_DEFAULT_FONTSIZE, unit: 'rem' }
    },
    h1: {
      fontSize: { val: 36 / ROOT_DEFAULT_FONTSIZE, unit: 'rem' }
    },
    h2: {
      fontSize: { val: 30 / ROOT_DEFAULT_FONTSIZE, unit: 'rem' }
    },
    h3: {
      fontSize: { val: 24 / ROOT_DEFAULT_FONTSIZE, unit: 'rem' }
    },
    h4: {
      fontSize: { val: 20 / ROOT_DEFAULT_FONTSIZE, unit: 'rem' }
    },
    h5: {
      fontSize: { val: 18 / ROOT_DEFAULT_FONTSIZE, unit: 'rem' }
    },
    h6: {
      fontSize: { val: 18 / ROOT_DEFAULT_FONTSIZE, unit: 'rem' }
    },
    p1: {
      fontSize: { val: 14 / ROOT_DEFAULT_FONTSIZE, unit: 'rem' }
    },
    p2: {
      fontSize: { val: 16 / ROOT_DEFAULT_FONTSIZE, unit: 'rem' }
    },
    c1: {
      fontSize: { val: 12 / ROOT_DEFAULT_FONTSIZE, unit: 'rem' }
    },
    c2: {
      fontSize: { val: 11 / ROOT_DEFAULT_FONTSIZE, unit: 'rem' }
    }
  },
  title: {
    t1: {
      fontSize: { val: 58 / ROOT_DEFAULT_FONTSIZE, unit: 'rem' }
    },
    t2: {
      fontSize: { val: 64 / ROOT_DEFAULT_FONTSIZE, unit: 'rem' }
    },
    t3: {
      fontSize: { val: 48 / ROOT_DEFAULT_FONTSIZE, unit: 'rem' }
    },
    t4: {
      fontSize: { val: 28 / ROOT_DEFAULT_FONTSIZE, unit: 'rem' }
    },
    t5: {
      fontSize: { val: 20 / ROOT_DEFAULT_FONTSIZE, unit: 'rem' }
    },
    t6: {
      fontSize: { val: 16 / ROOT_DEFAULT_FONTSIZE, unit: 'rem' }
    },
    t7: {
      fontSize: { val: 14 / ROOT_DEFAULT_FONTSIZE, unit: 'rem' }
    },
    t8: {
      fontSize: { val: 40 / ROOT_DEFAULT_FONTSIZE, unit: 'rem' }
    },
    t9: {
      fontSize: { val: 32 / ROOT_DEFAULT_FONTSIZE, unit: 'rem' }
    },
    t10: {
      fontSize: { val: 24 / ROOT_DEFAULT_FONTSIZE, unit: 'rem' }
    },
    t11: {
      fontSize: { val: 18 / ROOT_DEFAULT_FONTSIZE, unit: 'rem' }
    },
    t12: {
      fontSize: { val: 36 / ROOT_DEFAULT_FONTSIZE, unit: 'rem' }
    },
    t13: {
      fontSize: { val: 28 / ROOT_DEFAULT_FONTSIZE, unit: 'rem' }
    }
  },
  typography: {
    t1: {
      fontSize: { val: 20 / ROOT_DEFAULT_FONTSIZE, unit: 'rem' }
    },
    t2: {
      fontSize: { val: 16 / ROOT_DEFAULT_FONTSIZE, unit: 'rem' }
    },
    t3: {
      fontSize: { val: 14 / ROOT_DEFAULT_FONTSIZE, unit: 'rem' }
    },
    t4: {
      fontSize: { val: 18 / ROOT_DEFAULT_FONTSIZE, unit: 'rem' }
    },
    t5: {
      fontSize: { val: 11 / ROOT_DEFAULT_FONTSIZE, unit: 'rem' }
    },
    t6: {
      fontSize: { val: 24 / ROOT_DEFAULT_FONTSIZE, unit: 'rem' }
    }
  }
};

const radius = [
  { val: '2px' },
  { val: '4px' },
  { val: '8px' },
  { val: '12px' },
  { val: '16px' },
  { val: '24px' },
  { val: '32px' },
  { val: '48px' },
  { val: '24px' },
  { val: '48px' }
];

/************************
COLOR *******************
************************/
const colorPalette = {
  black: '#000000',
  white: '#ffffff',
  okay_bear: {
    primary: '#402D28',
    secondary: '#BB9772',
    t1: '#886F55',
    t2: '#402D28',
    t3: '#F3EADB',
    bg1: `rgba(243, 234, 219, .3)`,
    bg2: `#19AB6E`
  },
  background: {
    primary: '#FFF9F0',
    secondary: '#E42575',
    t1: '#24182F',
    t2: '#16151a',
    t3: '#09080d',
    t4: '#1c1929',
    t5: '#1c1326',
    t6: '#23182f',
    t7: '#8e8e8e',
    t8: '#1c1426',
    t9: '#2e3959',
    t10: '#2b273f',
    t11: '#171f37',
    card: '#232859'
  },
  text: {
    primary: '#f8f7f8',
    secondary: '#E42575',
    t1: '#b4abba',
    t2: '#8e8e8e',
    t3: '#f5f5f5',
    t4: '#e93a88',
    t5: '#a197aa',
    t6: '#9c93a5',
    t7: '#6d79c9',
    t8: '#42F425'
  },
  border: {
    primary: '#E42575',
    secondary: '#24182f',
    t1: '#2b273f',
    t2: '#f5f5f5',
    t3: '#595280',
    t4: '#2e3959'
  },
  links: {
    primary: {
      default: '#ffffff',
      hover: '#ffffff'
    },
    secondary: {
      default: '#E42575',
      hover: '#E42575'
    }
  },
  title: {
    primary: '#F5F3F7',
    secondary: '#F8F7F8',
    tertiary: '#FFFFFF',
    t1: '#E42575',
    t2: '#D74A87'
  },
  primary: {
    grey: {
      main: '#000000',
      variants: {
        50: '#EAEAEA',
        100: '#CECECE',
        200: '#9E9E9E',
        300: '#727272',
        400: '#444444',
        500: '#282828',
        600: '#000000',
        700: '#000000',
        800: '#000000',
        900: '#000000',
        a50: '#EAEAEA',
        a100: '#120C18',
        a200: '#24182F',
        a300: '#A197AA'
      }
    },
    pink: {
      main: '#780ac2',
      variants: {
        50: '#780ac2'
      }
    }
  },
  secondary: {},
  badge: {
    beginer: '#00D181',
    advance: '#E42575',
    intermedia: '#FFAA00'
  },
  error: {
    main: '#EA0000',
    variants: {
      a50: '#FFF5F5',
      50: '#000000',
      100: '#000000',
      200: '#000000',
      300: '#EA0000',
      400: '#000000',
      500: '#000000',
      600: '#000000',
      700: '#000000',
      800: '#000000',
      900: '#000000'
    }
  }
};

const theme = {
  mxWidth: mxWidth,
  mxLayout: mxLayout,
  grid: grid,
  gutter: gutter,
  indent: indent,
  root: root,
  color: colorPalette,
  font: font,
  spacing: spacing,
  spacingRem: spacingRem,
  radius: radius
};

export type Theme = typeof theme;

export interface StyledComponentProps {
  as?: keyof HTMLElementTagNameMap; // styled components props
  children?: any; // styled components props
  theme: Theme;
}

export default theme;
