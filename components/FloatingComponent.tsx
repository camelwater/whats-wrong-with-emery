import React, { useEffect, useState } from 'react';

const FloatingComponent: React.FC<{
    children, 
    transitionDuration?: number, 
    maxX?: number, 
    maxY?: number
}> = ({ children, transitionDuration = 5000, maxX = 10, maxY = 10 }) => {
  const [positions, setPositions] = useState({ x: 0, y: 0, posX: 0, posY: 0 });

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
    }, 3000);

    return () => clearTimeout(timeout);
  });

  return (
    <div style={{ transition: `${transitionDuration}ms ease`, transform: `translate3d(${positions.x}px, ${positions.y}px, 0)` }}>
      {children}
    </div>
  );
};

export default FloatingComponent;