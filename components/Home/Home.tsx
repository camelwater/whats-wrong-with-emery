import * as Styles from './Styles';
import TextButton from '@components/TextButton';
import Link from 'next/link';
import { LinkWrapper } from '@components/SharedStyles';
import { motion } from 'framer-motion';

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
    hidden: {
        opacity: 0,
        y: -50,
    },
    visible: {
        opacity: 1,
        y: 0
    }
};

const fadeInLeft = {
    hidden: {
        opacity: 0,
        x: '-100%',
    },
    visible: {
        opacity: 1,
        x: 0
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
            delayChildren: 0.15,
            staggerChildren: 0.2,
            when: 'beforeChildren'
        }
    }
};

const parentVariantsDelay = {
    hidden: {
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
    return (
        <Styles.Wrapper>
            <Styles.Container>
                <Styles.IntroContainer>
                    <motion.div initial={'hidden'} animate={'visible'} variants={parentVariants}>
                        <Styles.Title variants={fadeDownVariants}>
                            What&apos;s Wrong With Emery?
                        </Styles.Title>
                        <Styles.SubTitle variants={fadeDownVariants}>
                            Your place to lodge complaints, put forth constructive suggestions, 
                            and create a lasting contribution to the Emery/Weiner School.
                        </Styles.SubTitle>
                    </motion.div>
                    <Styles.ButtonContainer initial={'hidden'} whileInView={'visible'} viewport={{ once: true }} variants={parentVariantsDelay}>
                        {
                            Buttons.map((button) => (
                                <motion.div key={button.text} variants={fadeInLeft}>
                                    <Link href={button.link} passHref={true}>
                                        <LinkWrapper key={button.text}>
                                            <TextButton large color={button.text=='SGA?'?'red':'blue'}>
                                                {button.text}
                                            </TextButton>
                                        </LinkWrapper>
                                    </Link>
                                </motion.div>
                            ))
                        }
                    </Styles.ButtonContainer>
                </Styles.IntroContainer>
                {/* <FloatingMessages num={5}/> */}
            </Styles.Container>
        </Styles.Wrapper>
    );
} 

export default Home;