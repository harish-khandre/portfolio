"use client";

import { useEffect, useMemo, useCallback } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = useMemo(() => words.split(" "), [words]);

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 0.5,
        delay: stagger(0.1),
      },
    );
  }, [animate, wordsArray]);

  const renderWords = useCallback(
    () => (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className="dark:text-white text-black opacity-0"
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    ),
    [scope, wordsArray],
  );

  const memoizedRenderWords = useMemo(() => renderWords, [renderWords]);

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className=" text-main-light text-2xl leading-snug tracking-wide">
          {memoizedRenderWords()}
        </div>
      </div>
    </div>
  );
};
