import { useState, useEffect, useCallback } from 'react';
 
type MouseLocation = {
    x: number
    y: number
};
 
const getMouseLocation = (e: MouseEvent): MouseLocation => { 
    return {
        x: e.x,
        y: e.y
    };
};
 
const useMouseLocation = (calcPos: CallableFunction, setPos: CallableFunction): MouseLocation => {
    const [mouseLocation, setMouseLocation] = useState<MouseLocation>({ x: 0, y: 0 });

    const handleMouseMove = useCallback((e: MouseEvent) => {
        setMouseLocation(getMouseLocation(e));
        setPos({ xy: calcPos(mouseLocation.x, mouseLocation.y)});
    }, [calcPos, setPos, mouseLocation]
    );
    
    useEffect(() => {
        
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [handleMouseMove]);
 
    return mouseLocation;
};

export default useMouseLocation;