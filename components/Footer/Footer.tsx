import * as Styles from './Styles';
import { FaRegCopyright } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';
// import { FiGithub } from 'react-icons/fi';

const Footer: React.FC<{ home?: boolean }> = ({ home }) => {
    if (home) {
        return (
            <div style={{ paddingTop: '7.5rem' }}></div>
        );
    }

    return (
        <Styles.Footer>
            <Styles.FooterCenter>
                {/* <Styles.FooterContainer>
                    <Styles.FooterText>
                        <VscCode /> with&nbsp;
                        <Styles.FooterLinkText href='https://www.nextjs.org' target='_blank'>
                            Next
                        </Styles.FooterLinkText>
                    </Styles.FooterText>
                </Styles.FooterContainer> */} 
                    <Styles.FooterContainer>
                        <Styles.FooterText2><FaRegCopyright />{new Date().getFullYear()} ConcernedEmeryStudents</Styles.FooterText2>
                    </Styles.FooterContainer>
            </Styles.FooterCenter>
        </Styles.Footer>
    );
};

export default Footer;