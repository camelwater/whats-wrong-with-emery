/* eslint-disable react/display-name */
import * as Styles from './Styles';
import React from 'react';

type ColorVariant = 'red' | 'blue';

const TextButton: React.FC<{ children?: any, large?: boolean, color: ColorVariant, onClick?: any, href?: string }> = React.forwardRef(({ children, large, color, onClick, href }, ref) => {
    return (
        href? (
            <Styles.Link href={href} onClick={onClick}>
                <Styles.Container size={large?'large':'small'} variant={color}>
                    <Styles.Text size={large?'large':'small'}>
                        {children}
                    </Styles.Text>
                </Styles.Container>
            </Styles.Link>
        ) : (
            <Styles.Container size={large?'large':'small'} variant={color} onClick={onClick}>
                <Styles.Text size={large?'large':'small'}>
                    {children}
                </Styles.Text>
            </Styles.Container>
        )
    );
});

export default TextButton;