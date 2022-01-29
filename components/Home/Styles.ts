import { styled } from '@styles/stitches.config';

export const Wrapper = styled('div', {
    marginTop: '100px',
    display: 'flex',
    width: '100vw',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10vw',
    // clipPath: 'polygon(50% 0%, 100% 0, 100% 75%, 50% 100%, 0 75%, 0 0)',
})

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '85%',
    maxWidth: 'var(--max-width)',
    '@iPad': {
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%'
    }
})

export const IntroContainer = styled('div', {
    marginTop: '75px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    maxWidth: '45%',
    overflowWrap: 'break-word',
    wordWrap: 'break-word',
    rowGap: '3rem',
    '@iPad': {
        alignItems: 'center',
        maxWidth: '100%'
    }
})

export const ButtonContainer = styled('div', {
    all: 'inherit',
    maxWidth: '100%',
    display: 'grid',
    margin: '0',

})

export const Title = styled('h1', {
    fontFamily: '$main',
    fontSize: '$8',
    color: '$typefaceMain'
})

export const SubTitle = styled('p', {
    fontFamily: '$main',
    fontSize: '$5',
    color: '$typefaceMain',
    marginBottom: '1.5rem'
})
