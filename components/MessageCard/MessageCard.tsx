import * as Styles from './Styles';
import { MdKeyboardArrowUp, MdKeyboardArrowDown, MdChatBubbleOutline } from 'react-icons/md';

const MessageCard: React.FC<{ showButtons?: boolean, pos? }> = ({ showButtons=true, pos=null }) => {
    return (
        <Styles.CardContainer variant={pos?'preview':'normal'} style={pos?{ left: pos[0], top: pos[1]}: {}}>
            <Styles.Card variant={showButtons?'normal':'preview'}>
                <Styles.ContentContainer>
                    <Styles.Title>You suck</Styles.Title>
                    <Styles.Content>
                        There is a big problem that has manifested itself quite recently: nothing works like it&apos;s supposed to.
                        I&apos;m getting really pissed off, and if this trend continues, then I will have no choice but to stop whatever
                        it is that you keep doing.
                    </Styles.Content>
                </Styles.ContentContainer>
                <Styles.BottomContainer>
                    <Styles.Info>
                        Jan 25
                    </Styles.Info>
                    <Styles.Actions>
                        <Styles.BottomItem direction='row'>
                            <MdChatBubbleOutline />
                            10
                        </Styles.BottomItem>
                        <Styles.BottomItem direction='column' color='negative'>
                            {showButtons &&<MdKeyboardArrowUp />}
                            -100
                            {showButtons && <MdKeyboardArrowDown />}
                        </Styles.BottomItem>
                    </Styles.Actions>
                        
                </Styles.BottomContainer>
            </Styles.Card>
        </Styles.CardContainer>
    );
};

export default MessageCard;