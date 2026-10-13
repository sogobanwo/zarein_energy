"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorSize = 20;
  const cursorOuterSize = 40;

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const cursorOuterX = useMotionValue(-100);
  const cursorOuterY = useMotionValue(-100);

  const outerSpringConfig = { damping: 20, stiffness: 150 };
  const cursorOuterXSpring = useSpring(cursorOuterX, outerSpringConfig);
  const cursorOuterYSpring = useSpring(cursorOuterY, outerSpringConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - cursorSize / 2);
      cursorY.set(e.clientY - cursorSize / 2);
      cursorOuterX.set(e.clientX - cursorOuterSize / 2);
      cursorOuterY.set(e.clientY - cursorOuterSize / 2);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY, cursorOuterX, cursorOuterY]);

  return (
    <>
      {/* Inner cursor */}
      <motion.div
        className="pointer-events-none fixed z-[9999] mix-blend-difference"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          width: cursorSize,
          height: cursorSize,
        }}
      >
        <div className="h-full w-full rounded-full bg-white" />
      </motion.div>

      {/* Outer cursor */}
      <motion.div
        className="pointer-events-none fixed z-[9998] mix-blend-difference"
        style={{
          left: cursorOuterXSpring,
          top: cursorOuterYSpring,
          width: cursorOuterSize,
          height: cursorOuterSize,
        }}
      >
        <div className="h-full w-full rounded-full border-2 border-white opacity-50" />
      </motion.div>
    </>
  );
}
