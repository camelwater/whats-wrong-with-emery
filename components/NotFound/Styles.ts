import { styled } from '@styles/stitches.config';
import { Wrapper as SharedWrapper, GradientTitle } from '@components/SharedStyles';

export const Wrapper = styled(SharedWrapper, {

})

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: 'var(--width)',
    maxWidth: 'var(--max-width)',
    '@iPad': {
        alignItems: 'center',
        justifyContent: 'center',
        width: 'var(--width-mobile)'
    },
    minHeight: '500px'
})

export const Title = styled(GradientTitle, {
    fontSize: '$7',
    marginBottom: '1.5rem',
    marginTop: '10rem',
    
})

export const Suggestion = styled('p', {
    display: 'flex',
    fontFamily: '$main',
    fontSize: '$5',
    color: '$typefaceMain',
    alignItems: 'center',
    wordWrap: 'break-word',
    flexWrap: 'wrap',
})