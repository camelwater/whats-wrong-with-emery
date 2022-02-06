import React, { useEffect, useState } from 'react';
import { animated, useSpring , to } from 'react-spring';
import useMouseLocation from '@hooks/useMouseLocation';

const FloatingComponent: React.FC<{
  children: any, 
  transitionDuration?: number, 
  maxX?: number, 
  maxY?: number,
  mouseMovement?: boolean,
  translateFactor?: number,
  reduceMotion?: boolean | null
}> = ({ children, transitionDuration = 7000, maxX = 10, maxY = 10, mouseMovement=false, translateFactor=35, reduceMotion=false }) => {
  const calcNewPos = (x: number, y: number) => [
    x - window.innerWidth / (Math.random() + 4),
    y - window.innerHeight / (Math.random() + 4)
  ];
  
  const trans = (x: number, y: number) => `translate3d(${x / (translateFactor) + 100}px,${y / translateFactor}px,0)`;


  const [positions, setPositions] = useState({ x: 0, y: 0, posX: 0, posY: 0 });
  const [props, setPos]: any = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 100, tension: 750, friction: 300 },
  }));

  useMouseLocation(calcNewPos, setPos);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const newPositions = { ...positions };

      const randomX = (Math.random() * 20) - 10;
      const randomY = (Math.random() * 20) - 10;

      if (positions.posX + randomX < maxX) {
        newPositions.posX += randomX;
        newPositions.x = randomX;
      } else {
        newPositions.posX -= randomX;
        newPositions.x = -randomX;
      }

      if (positions.posY + randomY < maxY) {
        newPositions.posY += randomY;
        newPositions.y = randomY;
      } else {
        newPositions.posY -= randomY;
        newPositions.y = -randomY;
      }

      setPositions(newPositions);
    }, 3500);

    return () => clearTimeout(timeout);
  });

  return (
    !reduceMotion? (
      mouseMovement? (
        <animated.div style={{ transform: to(props.xy, trans) }}> 
          <div style={{ transition: `${transitionDuration}ms ease`, transform: `translate3d(${positions.x}px, ${positions.y}px, 0)` }}>
            {children}
          </div>
        </animated.div>
      ) : (
        <div style={{ transition: `${transitionDuration}ms ease`, transform: `translate3d(${positions.x}px, ${positions.y}px, 0)` }}>
          {children}
        </div>
      )
    ) : (
      <div>
        {children}
      </div>
    )
  );
};

export default FloatingComponent;