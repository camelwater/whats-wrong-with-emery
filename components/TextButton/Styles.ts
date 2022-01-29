import { styled } from '@styles/stitches.config';

export const Container = styled('div', {
    display: 'inline-block',
    cursor: 'pointer',
    position: 'relative',
    '&::after': {
        transition: 'transform 150ms ease, color .25s ease',
        content: '',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
    },
    variants: {
        variant: {
            red: {
                background: '$redGradient',
                '&::after': {
                    background: '$redGradient'
                }
            },
            blue: {
                background: '$blueGradient',
                '&::after': {
                    background: '$blueGradient'
                }
            }
        },
        size: {
            large: {
                padding: '1rem 2.5rem',
                borderRadius: '.5rem',
                fontSize: '$6',
                '&::after': {
                    borderRadius: '.5rem',
                }

            },
            small: {
                padding: '.75rem 1.5rem',
                borderRadius: '.3rem',
                fontSize: '$4',
                '&::after': {
                    borderRadius: '.3rem',
                }
            }
        }
    },
    '&:hover::after, &:focus-visible::after': {
        transform: 'scale(1.1, 1.05)',
        '@reduceMotion': {
            transform: 'none',
            color: '$primary'
        }
    },
    '&:active::after': {
        transform: 'scale(0.9, 0.95)',
        '@reduceMotion': {
            transform: 'none'
        }
    }
})

export const Text = styled('p', {
    fontFamily: '$main',
    color: '$white',
    textAlign: 'center',
    variants: {
        size: {
            large: {
                fontSize: '$6'
            },
            small: {
                fontSize: '$4',
            }
        }
    }
})