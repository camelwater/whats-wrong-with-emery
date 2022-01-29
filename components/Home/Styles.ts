import { styled } from '@styles/stitches.config';
import { motion } from 'framer-motion';

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
    width: '75%',
    maxWidth: 'var(--max-width)',
    '@iPad': {
        alignItems: 'center',
        justifyContent: 'center',
        width: 'var(--width-mobile)'
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
        textAlign: 'center',
        justifyContent: 'center',
        maxWidth: '100%'
    },
})

export const ButtonContainer = styled(motion.div, {
    all: 'inherit',
    maxWidth: '100%',
    display: 'grid',
    margin: '0',

})

export const Title = styled(motion.h1, {
    fontFamily: '$main',
    fontSize: '$8',
    color: '$typefaceMain',
    marginBottom: '1.5rem',
    '@Flip': {
        fontSize: '$7'
    }
})

export const SubTitle = styled(motion.p, {
    fontFamily: '$main',
    fontSize: '$5',
    color: '$typefaceMain',
    marginBottom: '1.5rem',
    '@Flip': {
        fontSize: '$4'
    }
})
