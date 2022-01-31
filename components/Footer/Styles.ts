import { styled } from '@styles/stitches.config';

export const FooterCenter = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    // justifyContent: 'space-between',
    alignItems: 'center',
    width: 'var(--width)',
    maxWidth: 'var(--max-width)',
    '@media screen and (max-width: 450px)': {
        flexWrap: 'wrap',
        width: 'var(--width-mobile)',
        rowGap: '5px',
        // justifyContent: 'center',
    },
})
export const Footer = styled('div', {
    display: 'flex',
    width: '100vw',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
    marginTop: '10rem',
    paddingBottom: '25px',
    '@iPadPro': {
      flexDirection: 'column',
      justifyContent: 'center',
      marginTop: '7.5rem'
    },
})

export const FooterContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    // overflowWrap: 'break-word',
    // wordWrap: 'break-word',
})

export const LinkText = styled('a', {
    all: 'revert',
    fontFamily: '$mono', 
    display: 'flex',
    fontSize: '$1',
    textDecoration: 'none',
    color: '$typefaceSecondary',
    marginRight: 15,
    transition: '0.1s linear',
    // textAlign: 'justify',
    '&:hover': {
        color: '$secondary',
        transform: 'scale(1.1, 1.1)'
    },  
    '@iPhonePlus': {
        fontSize: 12
    },
    '@iPhone': {
        fontSize: 10
    },
    '@iPhoneSE': {
        fontSize: 8
    }
})

export const FooterText = styled('p', {
    fontFamily: '$mono', 
    display: 'flex',
    flexWrap: 'wrap',
    fontSize: '$2',
    alignItems: 'center',
    justifyContent: 'center',
    color: '$typefacePrimary',
    svg: {
        fontSize: '$3',
        margin: '0 7px'
    },
    '@Flip': {
        fontSize: '$1',
        svg: {
            fontSize: '$2'
        }
    },
    // paddingRight: '.75rem'
})

export const FooterText2 = styled(FooterText, {
    svg: {
        fontSize: '$2',
    },
    '@Flip': {
        svg: {
            fontSize: '$1'
        }
    },
    '@media screen and (max-width: 300px)': {
        fontSize: '12px'
    }
})

export const FooterLinkText = styled('a', {
    // all: 'revert',
    textDecoration: 'none',
    fontFamily: '$mono', 
    display: 'flex',
    fontSize: '$2',
    justifyContent: 'center',
    alignItems: 'center',
    color: '$typefaceSecondary',
    position: 'relative',
    transition: '.15s linear',
    svg: {
        margin: '0 10px'
    },
    '&:hover': {
        transform: 'scale(1.1, 1.1)',
        color: '$secondary'
    },
    '@Flip': {
        fontSize: '$1'
    }
})