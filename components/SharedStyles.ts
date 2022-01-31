import { styled } from '@styles/stitches.config';

export const Wrapper = styled('div', {
    marginTop: '75px',
    display: 'flex',
    width: '100vw',
    justifyContent: 'center',
    alignItems: 'center',
});

export const GradientTitle = styled('h1', {
    display: 'inline-block',
    background: '$blueGradient',
    width: 'fit-content',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontFamily: '$main',
});

export const StyledButton = styled('button', {
    background: 'none',
    outline: 'none',
    border: 'none',
    color: '$typefacePrimary',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.15s ease, background 450ms ease',
    position: 'relative',
    cursor: 'pointer',
    '&:hover': {
        color: '$primary',
        transform: 'scale(1.05, 1.05)'
    },
    '&:active': {
        transform: 'scale(0.95, 0.95)'
    },
    variants: {
        variant: {
            desktop: {
                padding: '5px',
                border: '2px solid $border',
                background: '$foreground',
                borderRadius: '7.5px',
                '&:hover': {
                    border: '2px solid $primary',
                    // '$$glow': '$shadows$glow',
                    boxShadow: '$glow'
                },
                
                '@media (max-width: 700px)': {
                    display: 'none',
                }
            },
            mobile: {
            }
        }
    }
});

export const LinkWrapper = styled('a', {
    all: 'initial',
    textDecoration: 'none'
});

export const Divider = styled('div', {
    marginBottom: '5.5rem',
    marginTop: '3.5rem',
    width: '5%',
    height: '0.25rem',
    backgroundColor: '$secondary',
    '@media screen and (max-width: 700px)': {
        width: '12.5%',
    },
    variants: {
        variant: {
            first: {
                display: 'none'
            },
            rest: {
                
            }
        }
    }
});

export const CenterDivider = styled(Divider, {
    justifyContent: 'center',
    variants: {
        variant: {
            first: {
                display: 'none'
            },
            rest: {
                display: 'flex'
            }
        }
    }
});