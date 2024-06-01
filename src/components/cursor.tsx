import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import "../styles/cursor.css";

interface CursorProps {
  isHovered: boolean;
}

const Cursor: React.FC<CursorProps> = ({ isHovered }) => {
  const size = isHovered ? 180 : 22;

  const circle = useRef<HTMLDivElement>(null);
  const mouse = useRef<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const manageMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    mouse.current = {
      x: clientX,
      y: clientY,
    };
    moveCircle(mouse.current.x, mouse.current.y);
  };

  const moveCircle = (x: number, y: number) => {
    if (circle.current) {
      gsap.set(circle.current, {
        x,
        y,
        xPercent: -50,
        yPercent: -50,
        animationDuration: 0.5,
        ease: "power2.inOut",
      });
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, []);

  return (
    <div
      ref={circle}
      className="cursor"
      style={{
        width: size,
        height: size,
        transition: "height 0.3s ease, width 0.3s ease",
      }}
    />
  );
};

export default Cursor;
