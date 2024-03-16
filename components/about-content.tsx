import { TextGenerateEffect } from "./ui/text-generating-effect";
import { TypewriterEffect } from "./ui/typewritter";

export default function AboutContent() {
  const words = [
    {
      text: "Hey",
      className: "font-bold ",
    },
    {
      text: "there!",
      className: "font-bold ",
    },
    {
      text: "Harish",
      className: "font-bold ",
    },
    {
      text: "here,",
      className: "font-bold text-main-light",
    },
  ];

  const para = `but you can call me Harry (way cooler than harish, right?). I'm a web developer with a serious passion for creating awesome websites and web apps. Think dynamic, creative, and totally engaging – that's my jam.
  Learning new stuff is basically my favorite hobby. Shiny, interesting things? Totally down to explore them! I work with non-profits and good causes for free – it lets me make a real difference. Plus, free pizza at the volunteer meetings never hurts, right?`;

  return (
    <div className="space-y-3">
      <TypewriterEffect words={words} />
      <TextGenerateEffect words={para} />
    </div>
  );
}
