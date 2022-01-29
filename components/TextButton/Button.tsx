import * as Styles from './Styles';

type ColorVariant = 'red' | 'blue';

const TextButton: React.FC<{ children?, large?: boolean, color: ColorVariant }> = ({ children=null, large=null, color }) => {
    return (
        <Styles.Container size={large?'large':'small'} variant={color}>
            <Styles.Text size={large?'large':'small'}>
                {children}
            </Styles.Text>
        </Styles.Container>
    );
};

export default TextButton;