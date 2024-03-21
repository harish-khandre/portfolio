"use client";
import { AnimatedText } from "./ui/animated-text";

export default function AboutContent() {
  const heading = "Hey there! Harish here,";

  const para = `but you can call me Harry (way cooler than harish, right?). I'm a web developer with a serious passion for creating awesome websites and web apps. Think dynamic, creative, and totally engaging – that's my jam.`;

  const para2 = `Learning new stuff is basically my favorite hobby. Shiny, interesting things? Totally down to explore them! I work with non-profits and good causes for free – it lets me make a real difference. Plus, free vadapav at the volunteer meetings never hurts, right?`;

  return (
    <div className="space-y-4">
      <AnimatedText el="div" heading={heading} para={para} para2={para2} />
    </div>
  );
}
