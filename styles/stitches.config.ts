import { createStitches } from '@stitches/react';
import globalStyle from './global.style';

export const { styled, getCssText, createTheme, globalCss } = createStitches({
    theme: {
      colors: {
        scroll2: '#6B7C95',
        scroll3: '#8696AD',
        primary: '#2a7cda',
        secondary: '#7cb0ec',
        tertiary: '#132841',
        typefaceMain: '#F4F4F5',
        typefacePrimary: '#6c809e',
        typefaceSeconary: '#8696AD',
        typefaceTertiary: '#adbcd1',
        border: '#363e47',
        lightBackground: '#152130',
        background: '#101820',
        foreground: '#252c33',
        dropdownHover: '#050505',
        hover: '#5145bd',
        linkHover: '#313131',
        dividerColor: '#5f55f0',
        cardColor: '#282546',
        navBackground: '#1b1b24',
        dropdownBackground: '#141414',
        dropdownBorder: '#303030',
        lightBorder: '#141414',
        highlight: '#e5e8ee40',
        gradient:
          'linear-gradient(93.05deg, #EF9797 3.98%, rgba(206, 126, 199, 0.801616) 35.29%, #A364D6 68.78%, #A1D0F9 97.44%)',
      },
      shadows: {
        medium: '0px 4px 12px #1818207f, 0px 8px 16px #13131fdf',
        mediumDrop: 'drop-shadow(0px 6px 6px #0f0e14af) drop-shadow(0px 4px 12px #0000005f)',
        glow: '0px 0px 12px #3c80a7df, 0px 0px 32px #54a0be9f'

      },
      fontSizes: {
        1: '14px',
        2: '.875rem',
        3: '1rem',
        4: '1.125rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '2rem',
      },
      fonts: {
        main: 'GTWalsheimPro, sans-serif',
        mono: 'JetBrains Mono, monospace',
      },
    },
    media: {
      iPadPro: '(max-width: 1024px)',
      iPad: '(max-width: 768px)',
      Flip: '(max-width: 600px)',
      iPhonePlus: '(max-width: 414px)',
      iPhone: '(max-width: 375px)',
      iPhoneSE: '(max-width: 320px)',
      reducedMotion: "(prefers-reduced-motion)"
    },
})

export const lightTheme = createTheme(({
  colors: {
    scrollMain: '#5a636e',
    scrollMain2: '#363c44',
    main: '#465261',
    main2: '#556275',
    main3: '#191c22',
    primary: '#dadae2',
    dark: '#F4F4F5',
    white: '#2c2c2c',
    lightBackground: '#d6d6eb',
    background: '#e9e9e9',
    navBackground: '#e9e9f1',
    lightBorder: '#dfdfdf',
    dropdownBackground: '#f5f5f5',
    dropdownBorder: '#e0e0e0',
    cardBorder: '#c2c1cf',
    hover: '#5932e6',
    linkHover: '#dbdbdb',
    dividerColor: '#8379df',
    cardColor: '#d2d2ee',
    dropdownHover: '#e9e9e9',
    highlight: '#2e2e2e30',
    gradient:
      'linear-gradient(93.05deg, #EF9797 3.98%, rgba(206, 126, 199, 0.801616) 35.29%, #A364D6 68.78%, #A1D0F9 97.44%)',
  }, 
  shadows: {
    medium: '0px 4px 12px #a09cb37f, 0px 8px 24px #b1aec7ff',
    mediumDrop: 'drop-shadow(0px 6px 6px #a09cb3af) drop-shadow(0px 4px 12px #b1aec7ff)',
    glow: '0px 0px 12px #b3acf1df, 0px 0px 32px #bab7eedf'
  },
}))


export const ContentWrapper = styled('div', {
  position: 'relative',
  overflow: 'hidden',
  // height: '100%'
})

export const lightGlobalStyles = globalCss({
  "@light": {
    ":root:not(.dark)": {
      ...Object.keys(lightTheme.colors).reduce((varSet, currentColorKey) => {
        const currentColor = lightTheme.colors[currentColorKey];
        const currentColorValue =
          currentColor.value.substring(0, 1) === "$"
            ? `$colors${currentColor.value}`
            : currentColor.value;

        return {
          [currentColor.variable]: currentColorValue,
          ...varSet,
        };  
      }, {}),

      ...Object.keys(lightTheme.shadows).reduce((varSet, curShadowKey) => {
        const currentShadow = lightTheme.shadows[curShadowKey];
        const currentShadowValue =
          currentShadow.value.substring(0, 1) === "$"
            ? `$shadows${currentShadow.value}`
            : currentShadow.value;

        return {
          [currentShadow.variable]: currentShadowValue,
          ...varSet,
        };
      }, {}),
    },
  },
});

lightGlobalStyles();

globalStyle();