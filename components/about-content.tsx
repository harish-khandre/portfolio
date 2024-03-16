import { TextGenerateEffect } from "./ui/text-generating-effect";
import { TypewriterEffect } from "./ui/typewritter";

export default function AboutContent() {
  const words = [
    {
      text: "Welcome,",
      className: "font-bold ",
    },
    {
      text: "I'm",
      className: "font-bold ",
    },
    {
      text: "Harish.",
      className: "font-bold text-main-light",
    },
  ];

  const para = `heelllllllooooooooo im a web dev trying to do good as much as possible through my craft as well as in person, passionate about coding dynamic creative websites and web apps and i love to learn new stuff just picking up interesting and new stuff is my hobby, would do free work for non-profit organizations and for a good cause.`

  return (
    <div className="space-y-3">
      <TypewriterEffect words={words} />
      <TextGenerateEffect words={para} />;
    </div>
  );
}
