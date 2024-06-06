import React, { ReactNode, useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import "../styles/SmoothScroll.css";

const smoothscroll = ({ children }: { children: ReactNode }) => {
  // Get height info
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (contentRef.current != null) {
        setContentHeight(contentRef.current.scrollHeight);
      }
      setWindowHeight(window.innerHeight);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [contentRef]);

  // Intercept scroll event
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    mass: 0.1,
    stiffness: 150,
    damping: 20,
    restDelta: 0.001,
  });

  const y = useTransform(smoothProgress, (value) => {
    return value * -(contentHeight - windowHeight);
  });

  return (
    <>
      <div style={{ height: contentHeight }} />
      <motion.div className="scrollfixed" ref={contentRef} style={{ y: y }}>
        {children}
      </motion.div>
    </>
  );
};

export default smoothscroll;
