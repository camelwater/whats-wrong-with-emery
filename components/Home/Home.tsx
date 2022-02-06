import * as Styles from './Styles';
import TextButton from '@components/TextButton';
import Link from 'next/link';
// import { LinkWrapper } from '@components/SharedStyles';
import { motion, useReducedMotion } from 'framer-motion';
import CardCollection from '@components/CardCollection';
import * as Animations from '@animations/index';

const Buttons = [
    {
        text: 'Board',
        link: '/message-board'
    },
    {
        text: 'News',
        link: '/news'
    },
    {
        text: 'SGA?',
        link: '/sga'
    }
];

const fadeDownVariants = {
    initial: {
        opacity: 0,
        y: -50,
    },
    visible: {
        opacity: 1,
        y: 0
    }
};

const fadeInLeft = {
    initial: {
        opacity: 0,
        x: '-100%',
    },
    visible: {
        opacity: 1,
        x: 0
    }
};

const parentVariants = {
    initial: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            type: 'tween',
            ease: 'easeIn',
            delayChildren: 0.15,
            staggerChildren: 0.2,
            when: 'beforeChildren'
        }
    }
};

const parentVariantsDelay = {
    initial: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            type: 'tween',
            ease: 'easeIn',
            delay: .25,
            delayChildren: 0.15,
            staggerChildren: 0.2,
            when: 'beforeChildren'
        }
    }
};

const Home: React.FC = () => {
    const reduceMotion = useReducedMotion();
    
    return (
        <Styles.Wrapper>
            <Styles.Container>
                <Styles.IntroContainer>
                    <motion.div initial={'initial'} animate={'visible'} variants={parentVariants}>
                        <Styles.Title variants={reduceMotion?Animations.reducedVariants:fadeDownVariants}>
                            What&apos;s Wrong With Emery?
                        </Styles.Title>
                        <Styles.SubTitle variants={reduceMotion?Animations.reducedVariants:fadeDownVariants}>
                            Your place to lodge complaints, put forth constructive suggestions, 
                            and create a lasting contribution to the Emery/Weiner School.
                        </Styles.SubTitle>
                    </motion.div>
                    <Styles.ButtonContainer initial={'initial'} whileInView={'visible'} viewport={{ once: true }} variants={parentVariantsDelay}>
                        {
                            Buttons.map((button) => (
                                <motion.div key={button.text} variants={reduceMotion?Animations.reducedVariants:fadeInLeft}>
                                    <Link href={button.link} passHref>
                                        <TextButton large color={button.text=='SGA?'?'red':'blue'}>
                                            {button.text}
                                        </TextButton>
                                    </Link>
                                </motion.div>
                            ))
                        }
                    </Styles.ButtonContainer>
                </Styles.IntroContainer>
                {/* <motion.div initial='initial' animate='visible' variants={cardVariants}> */}
                <Styles.CardContainer>
                    <CardCollection preview />
                </Styles.CardContainer>
                {/* </motion.div> */}
                
            </Styles.Container>
        </Styles.Wrapper>
    );
} 

export default Home;