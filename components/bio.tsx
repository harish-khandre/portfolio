"use client";

import { motion } from "framer-motion";
import { Metric, Tech } from "@/components/ui/highlight";

export default function Bio() {
  return (
    <motion.p
      className="font-sans text-[0.9375rem] leading-7 text-fg/70"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
    >
      Full Stack Engineer with <Metric>2 years</Metric> shipping enterprise and
      government platforms handling <Metric>20M+ records</Metric>.{" "}
      <Tech>TypeScript</Tech>, <Tech>React</Tech>, and <Tech>NestJS</Tech> —
      hands-on with <Tech>Claude API</Tech> and AI agent workflows using{" "}
      <Tech>Mastra.ai</Tech>.
    </motion.p>
  );
}
