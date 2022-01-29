import Link from 'next/link';
import * as Styles from './Styles'

const NotFound: React.FC = () => {
    return (
        <Styles.Wrapper>
            <Styles.Container>
                <Styles.Title>
                    Resource could not be found.
                </Styles.Title>
                <Styles.Suggestion>
                    Try searching what you are looking for, or&nbsp;
                    <Link href='/' passHref={true}>
                        <a>return home</a>
                    </Link>.
                </Styles.Suggestion>
            </Styles.Container>
        </Styles.Wrapper>
    );
};

export default NotFound;