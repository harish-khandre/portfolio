"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: "easeOut" },
});

export default function Header() {
  return (
    <header>
      <motion.h1
        className="font-display text-3xl font-extrabold text-accent"
        {...fadeUp(0)}
      >
        Harish Khandre
      </motion.h1>
      <motion.p
        className="mt-1 font-sans text-sm text-muted"
        {...fadeUp(0.1)}
      >
        Full Stack Engineer at Pordios Labs
      </motion.p>
      <motion.div
        className="mt-4 flex gap-5 font-mono text-xs text-muted"
        {...fadeUp(0.2)}
      >
        <Link
          href="https://github.com/harish-khandre"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-fg"
        >
          github
        </Link>
        <Link
          href="https://www.linkedin.com/in/harish-khandre/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-fg"
        >
          linkedin
        </Link>
        <Link
          href="mailto:1.harishkhandre@gmail.com"
          className="transition-colors hover:text-fg"
        >
          email
        </Link>
      </motion.div>
    </header>
  );
}
