import * as Styles from './Styles';
import TextButton from '@components/TextButton';
import Link from 'next/link';

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

const Home: React.FC = () => {
    return (
        <Styles.Wrapper>
            <Styles.Container>
                <Styles.IntroContainer>
                    <Styles.Title>
                        What&apos;s Wrong With Emery?
                    </Styles.Title>
                    <Styles.SubTitle>
                        Your place to complain about Emery&apos;s problems, put forth constructive suggestions, 
                        and create a lasting contribution.
                    </Styles.SubTitle>
                    <Styles.ButtonContainer>
                        {
                            Buttons.map((button) => (
                                <Link href={button.link} passHref={true} key={button.text}>
                                    <TextButton large color={button.text=='SGA?'?'red':'blue'}>
                                        {button.text}
                                    </TextButton>
                                </Link>
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