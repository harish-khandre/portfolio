"use client";
import { Projects } from "./projects";
import { AnimatedText } from "./ui/animated-text";

export default function WorkContent() {
  return (
    <div>
      <AnimatedText el="h1" heading="Check Out My Recent Client Projects" />
      <Projects />
    </div>
  );
}
