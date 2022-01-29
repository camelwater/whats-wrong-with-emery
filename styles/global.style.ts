
import { globalCss } from '@stitches/react';

const globalStyle = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    scrollBehavior: 'smooth',

  },
  html: {
    overflowX: 'hidden',
    height: '100%',
    font: '112.5%/1.45 GTWalsheimPro'
  },
  
  body: {
    background: '$background',
    overflowX: 'clip',
    fontFamily: 'GTWalsheimPro',
    height: '100%',
    transition: '150ms ease'
  },
  '::selection': {
    background: '$highlight',
    color: '$primary'
  },
  a: {
    color: '$primary',
    position: 'relative',
    textDecoration: 'none',
    zIndex: 99,
    paddingTop: '0.1rem',
    paddingBottom: '0.1rem',
    background: 'linear-gradient(0deg, $secondary, $secondary) no-repeat left bottom / 0 .1rem',
    transition: 'background-size 250ms, color 150ms',
    '&:where(:hover, :focus-visible)': {
      backgroundSize: '100% .1rem',
      backgroundPositionX: 'left',
      color: '$secondary',
    }
  },
  img: {
    userSelect: 'none',
  },
  'body::-webkit-scrollbar': {
    width: '11px',
  },
  'body::-webkit-scrollbar-track': {
    background: '$scroll',
    width: '15px'
  },
  'body::-webkit-scrollbar-thumb': {
    background: '$scroll2',
    borderRadius: '4px',
    border: '2px solid $scroll'
  },
  'body::-webkit-scrollbar-thumb:hover': {
    background: '$scroll3',
  },
  'code, pre': {
    fontFamily: '$mono',
  },
  ul: {
    marginLeft: 20,
  },
  '.invalid': {
    color: '#F16D6D !important',
  },
  '.disabled': {
    display: 'none !important',
  },
  '@font-face': {
    fontFamily: 'GTWalsheimPro',
    src: 'url(/GTWalsheimPro-Regular.ttf)',
    fontStyle: 'normal',
    fontWeight: 400,
    fontDisplay: 'swap',
  },
});

export default globalStyle;