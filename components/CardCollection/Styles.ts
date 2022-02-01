import { styled } from '@styles/stitches.config';
import { motion } from 'framer-motion';

export const Container = styled(motion.div, {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    width: '100%',
    // border: '1px solid white',
    variants: {
        variant: {
            preview: {
                position: 'relative',
                left: '-55%',
                zIndex: -1,
                opacity: .75,
                filter: 'blur(1px)',
            },
            normal: {

            }
        }
    }
});
