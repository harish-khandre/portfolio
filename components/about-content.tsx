import { TypewriterEffect } from "./ui/typewritter";

export default function AboutContent() {
  const words = [
    {
      text: "Hello,",
    },
    {
      text: "I'm",
    },
    {
      text: "Harish.",
      className: "text-zinc-500 ",
    },
  ];
  return (
    <div className="space-y-3">
      <TypewriterEffect words={words} />
      <p className="text-lg md:text-2xl">
        I am a full stack developer with a passion for building beautiful
        websites and applications. I specialize in JavaScript and have
        professional experience working with React, Node.js, and Express as well
        as nextjs
      </p>
    </div>
  );
}
