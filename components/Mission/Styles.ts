import { styled } from '@styles/stitches.config';
import { Wrapper as StyledWrapper } from '@components/SharedStyles';
import { motion } from 'framer-motion';

export const Wrapper = styled(StyledWrapper, {
    margin: '0',
    marginTop: '10rem',
});

export const Container = styled(motion.div, {
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
});

export const Title = styled('h1', {
    fontFamily: '$main',
    fontSize: '$7',
    color: '$primary'
});

export const DescriptionContainer = styled(motion.div, {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '2rem',
    width: '100%',
    '@iPad': {
        textAlign: 'center',
    }
})

export const Description = styled(motion.p, {
    fontFamily: '$main',
    fontSize: '$4',
    color: '$typefaceMain'
});