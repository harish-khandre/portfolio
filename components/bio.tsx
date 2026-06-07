"use client";

import { motion } from "framer-motion";

export default function Bio() {
  return (
    <motion.p
      className="font-sans text-[0.9375rem] leading-7 text-fg/70"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
    >
      Full Stack Engineer with 2 years shipping enterprise and government
      platforms handling 20M+ records. TypeScript, React, and NestJS —
      hands-on with Claude API and AI agent workflows using Mastra.ai.
    </motion.p>
  );
}
