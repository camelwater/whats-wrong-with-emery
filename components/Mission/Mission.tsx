import * as Styles from './Styles';
import { Divider } from '@components/SharedStyles';
import * as Animations from '@animations/index';
import { useReducedMotion } from 'framer-motion';

const fadeDownVariants = {
    hidden: {
        opacity: 0,
        y: -45,
        transition: {
            type: 'tween',
            ease: 'easeOut'
        }
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'tween',
            ease: 'easeIn',
            when: 'beforeChildren'
        }
    }
};

const parentVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            type: 'tween',
            ease: 'easeIn',
            // delayChildren: 0.025,
            staggerChildren: 0.2,
            when: 'beforeChildren'
        }
    }
};

const childrenVariants = {
    hidden: {
        opacity: 0,
        y: -35,
    },
    visible: {
        opacity: 1,
        y: 0,
    }
};

const Mission: React.FC = () => {
    const reduceMotion = useReducedMotion();

    return (
        <Styles.Wrapper>
            <Styles.Container initial='hidden' whileInView={'visible'} viewport={{once: true}} variants={reduceMotion?Animations.reducedVariants:fadeDownVariants}>
                <Styles.Title>
                    Mission
                </Styles.Title>
                <Divider />
                <Styles.DescriptionContainer initial='hidden' whileInView={'visible'} viewport={{once: true}} variants={parentVariants}>
                    <Styles.Description variants={reduceMotion?Animations.reducedVariants:childrenVariants}>
                        This website was developed by Emery students in order to aid both fellow students and faculty. 
                    </Styles.Description>
                    <Styles.Description variants={reduceMotion?Animations.reducedVariants:childrenVariants}>
                        It was created because a common issue continues to plague the school: 
                        there arise many minute problems that become major nuisances due to the difficulty in voicing concerns. 
                    </Styles.Description>
                    <Styles.Description variants={reduceMotion?Animations.reducedVariants:childrenVariants}>
                        Although a student government exists, we do not hear often of changes made by them,
                        nor does everyone have the time to attend a townhall if their issues are as small 
                        as a lengthy lunch line or the absence of good cups.
                    </Styles.Description>
                    <Styles.Description variants={reduceMotion?Animations.reducedVariants:childrenVariants}>
                        Furthermore, as a student, you have no insight, guarantee, or 
                        confidence that what you ask for is being given the proper consideration; you just don&apos;t know what&apos;s going on.
                        No one likes being left in the dark.
                    </Styles.Description>
                    <Styles.Description variants={reduceMotion?Animations.reducedVariants:childrenVariants}>
                        <strong>What&apos;s Wrong With Emery?</strong> seeks to change that.
                    </Styles.Description>
                </Styles.DescriptionContainer>
                
            </Styles.Container>
        </Styles.Wrapper>
    );
};

export default Mission;