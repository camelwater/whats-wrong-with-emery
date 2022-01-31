// https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs
import { useState, useEffect, useCallback } from 'react'
 
type WindowDimensions = {
    width: number
    height: number
};
 
const getWindowDimensions = (): WindowDimensions => {
    const { innerWidth, innerHeight } = window;
 
    return {
        width: innerWidth,
        height: innerHeight
    };
};
 
export const useCollectionPositions = (num: number): number[][] => {
    const [positions, setPositions] = useState<number[][]>([]);
 
    const handleResize = useCallback(() => {
        const { width } = getWindowDimensions();
        const collectionWidth = width * .6;
        let positions = [];
        // const byRow = Math.random()>0.5; // determine whether should organize by row or by column
        const possiblePositions = 4;
        const gap = collectionWidth/possiblePositions; // split into chunks of `num`
        
        positions = [[0, 1], [1, 0], [1, 2], [2, 0], [2,2]]
        
        positions = positions.map((pos) => {
            return [Math.random()*(gap/2) + (gap*pos[1]), Math.random()*(gap/1.75) + ((gap*1.1)*pos[0])];
        });

        setPositions(positions);

    }, []
    );
 
    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);
 
    return positions;
};
