import * as Styles from './Styles';
import { FaRegCopyright } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';
// import { FiGithub } from 'react-icons/fi';

const Footer: React.FC = () => {
    return (
        <Styles.Footer>
            <Styles.FooterCenter>
                <Styles.FooterContainer>
                    <Styles.FooterText>
                        <VscCode /> with&nbsp;
                        <Styles.FooterLinkText href='https://www.nextjs.org' target='_blank'>
                            Next
                        </Styles.FooterLinkText>
                    </Styles.FooterText>
                </Styles.FooterContainer>

                <Styles.FooterContainer>
                    <Styles.FooterText><FaRegCopyright size={'1rem'}/>{new Date().getFullYear()} ConcernedEmeryStudents&nbsp;</Styles.FooterText>
                    {/* <Styles.LinkText href='https://www.github.com/camelwater' target='_blank'>
                        <FiGithub size={'1.5rem'}/>
                    </Styles.LinkText> */}
                </Styles.FooterContainer>
            </Styles.FooterCenter>
        </Styles.Footer>
    );
};

export default Footer;