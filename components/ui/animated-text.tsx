"use client";

import useWindowSize from "@/hooks/screen-size";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const defaultAnimations = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

export const AnimatedText = ({
  heading,
  para,
  para2,
  el: Wrapper = "div",
}: {
  heading: string;
  para?: string;
  para2?: string;
  el: keyof JSX.IntrinsicElements;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });
  const size = useWindowSize();

  // @ts-ignore
  if (size.width <= 1024) {
    return (
      <div>
        <Wrapper className="space-y-8">
          <span className="font-bold text-2xl sm:text-4xl">{heading}</span>
          <div className="h-4" />
          <span className="font-semibold text-lg sm:text-2xl">{para}</span>
          <div className="h-4" />
          <span className="font-semibold text-lg sm:text-2xl">{para2}</span>
        </Wrapper>
      </div>
    );
  }
  return (
    <Wrapper className="space-y-8">
      <motion.span
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ staggerChildren: 0.5, delayChildren: 0.1 }}
      >
        <motion.span
          className="font-bold text-2xl sm:text-4xl"
          variants={defaultAnimations}
        >
          {heading}
        </motion.span>

        <div className="h-4" />
        <motion.span
          className="font-semibold text-lg sm:text-2xl"
          variants={defaultAnimations}
        >
          {para}
        </motion.span>
        <div className="h-4" />
        <motion.span
          className="font-semibold text-lg sm:text-2xl"
          variants={defaultAnimations}
        >
          {para2}
        </motion.span>
      </motion.span>
    </Wrapper>
  );
};
