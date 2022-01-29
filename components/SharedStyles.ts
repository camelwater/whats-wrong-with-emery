import { styled } from '@styles/stitches.config';

export const Wrapper = styled('div', {
    marginTop: '75px',
    display: 'flex',
    width: '100vw',
    justifyContent: 'center',
    alignItems: 'center',
})

export const GradientTitle = styled('h1', {
    display: 'inline-block',
    background: '$blueGradient',
    width: 'fit-content',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontFamily: '$main',
})

export const StyledButton = styled('button', {
    background: 'none',
    outline: 'none',
    border: 'none',
    color: '$typefacePrimary',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: '0.15s ease',
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
})