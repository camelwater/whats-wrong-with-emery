import * as Styles from './Styles';
import * as Anims from './Anims';
import MessageCard from '@components/MessageCard';
import { motion, useReducedMotion } from 'framer-motion';
import FloatingComponent from '@components/FloatingComponent';
import { useCollectionPositions } from './utils';
import * as Animations from '@animations/index';

type SortType = 'random' | 'date' | 'top';

const CardCollection: React.FC<{ preview?: boolean, num?: number, sort?: SortType}> = ({ preview, num=25, sort='random' }) => {

    num = preview?5:num;

    //TODO: add db call to fetch messages
    let messages = [];
    for (let n = 0; n < num; n++) {
        messages.push((
            {}
        )); 
    }

    const positions = useCollectionPositions(num);
    const reduceMotion = useReducedMotion();
    
    return (
        <Styles.Container variant={preview?'preview':'normal'} initial='initial' animate='visible' variants={Anims.parentVariants}>
            {
                messages.map((message, index) => (
                    (preview && !reduceMotion) ? (
                        <motion.div variants={Anims.previewVariants} key={index}>
                            <FloatingComponent mouseMovement translateFactor={Math.random()*20 + 30}>
                                <MessageCard showButtons={!preview} pos={preview?positions[index]:null}/>
                            </FloatingComponent>
                        </motion.div>
                        ) : (
                            <motion.div variants={reduceMotion?Animations.reducedVariants:Anims.normalVariants} key={index}>
                                <FloatingComponent reduceMotion={reduceMotion}>
                                    <MessageCard showButtons={!preview} pos={preview?positions[index]:null}/>
                                </FloatingComponent>
                            </motion.div>

                        )  
            ))}
        </Styles.Container>
    );
};

export default CardCollection;