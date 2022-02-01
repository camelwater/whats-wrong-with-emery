import * as Styles from './Styles';
import * as Anims from './Anims';
import MessageCard from '@components/MessageCard';
import { motion, useReducedMotion } from 'framer-motion';
import { animated, useSpring , to } from 'react-spring';
import useMouseLocation from '@hooks/useMouseLocation';
import FloatingComponent from '@components/FloatingComponent';
import { useCollectionPositions } from './utils';
import * as Animations from '@animations/index';

type SortType = 'random' | 'date' | 'top';

const calcNewPos = (x: number, y: number) => [
    x - window.innerWidth / (Math.random() + 2),
    y - window.innerHeight / (Math.random() + 2)
];

const trans = (x: number, y: number) => `translate3d(${x / 15 + 100}px,${y / 15}px,0)`;

const CardCollection: React.FC<{ preview?: boolean, num?: number, sort?: SortType}> = ({ preview, num=25, sort='random' }) => {
    const [props, setPos]: any = useSpring(() => ({
        xy: [0, 0],
        config: { mass: 100, tension: 750, friction: 300 },
    }));
    useMouseLocation(calcNewPos, setPos);

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
                        <animated.div style={{ transform: to(props.xy, trans) }} key={index}> 
                            <motion.div variants={preview?Anims.previewVariants:Anims.normalVariants}>
                                <FloatingComponent>
                                    <MessageCard showButtons={!preview} pos={preview?positions[index]:null}/>
                                </FloatingComponent>
                            </motion.div>
                        </animated.div>
                        ) : (
                            <motion.div variants={reduceMotion?Animations.reducedVariants:(preview?Anims.previewVariants:Anims.normalVariants)} key={index}>
                                <FloatingComponent>
                                    <MessageCard showButtons={!preview} pos={preview?positions[index]:null}/>
                                </FloatingComponent>
                            </motion.div>
                        )  
            ))}
        </Styles.Container>
    );
};

export default CardCollection;