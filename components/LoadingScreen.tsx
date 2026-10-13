"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { flame } from "@/lib/content";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or wait for page to be ready
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Also hide when page is loaded
    const handleLoad = () => {
      setTimeout(() => setIsLoading(false), 500);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-navy"
        >
          <div className="flex flex-col items-center gap-6">
            {/* Pulsating Logo */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image src={flame} alt="Zarein Energy" width={80} height={115} className="h-[115px] w-auto" />
            </motion.div>

            {/* Pulsating Text */}
            <motion.div
              animate={{
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex flex-col items-center gap-2"
            >
              <div className="flex flex-col items-center gap-1">
                <h1 className="font-wide text-4xl font-extrabold tracking-[-0.02em] text-white md:text-5xl">ZAREIN</h1>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">ENERGY</p>
              </div>
              <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-white/50 md:text-xs">Powering Industrial Growth</p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
