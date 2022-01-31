import { styled } from '@styles/stitches.config';

export const CardContainer = styled('div', {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    variants: {
        variant: {
            preview: {
                position: 'absolute',
            },
            normal: {

            }
        }
    }
});

export const Card = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    cursor: 'default',
    justifyContent: 'space-between',
    width: '65%',
    // alignItems: 'center',
    borderRadius: '2rem',
    backgroundColor: '$foreground',
    border: '1px solid $border',
    maxWidth: '25rem',
    transition: 'all 350ms ease',
    padding: '1.5rem',
    zIndex: 0,
    variants: {
        variant: {
            preview: {
                '&:hover': {
                    transform: 'scale(1.05, 1.05)',
                    zIndex: 1,
                    boxShadow: '$largeGlow',      
                },
            },
            normal: {
                '&:active': {
                    transform: 'scale(0.975, 0.975)', 
                    zIndex: 1,
                },
                cursor: 'pointer'  
            }
        }
    }
});

export const ContentContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    wordWrap: 'break-word',
});

export const Title = styled('h2', {
    display: 'inline-flex',
    fontFamily: '$main',
    fontSize: '$5',
    marginBottom: '1.5rem',
    color: '$primary'
});

export const Content = styled('p', {
    display: 'inline-flex',
    fontFamily: '$main',
    fontSize: '$2',
    marginBottom: '.75rem',
    color: '$typefaceMain'
});

export const BottomContainer = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    // width: '90%',
    // border: '1px solid white'
});

export const Info = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: '$main',
    fontSize: '$2',
    color: '$typefacePrimary',
    columnGap: '.25rem',
});

export const Actions = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: '1rem'
});

export const BottomItem = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: '$main',
    fontSize: '$2',
    color: '$typefacePrimary',
    '& svg': {
        color: '$typefaceMain'
    },
    variants: {
        direction: {
            row: {
                flexDirection: 'row',
                columnGap: '.25rem'
            },
            column: {
                flexDirection: 'column',

            }
        },
        color: {
            positive: {
                color: '$primary'
            },
            negative: {
                color: '$negative'
            },
            neutral: {

            }
        }
    }

});