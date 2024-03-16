import { Projects } from "./projects";
import { TypewriterEffect } from "./ui/typewritter";

export default function WorkContent() {
  const para = [
    {
      text: "These",
    },
    {
      text: "are",
    },
    {
      text: "my",
    },
    {
      text: "few",
    },
    {
      text: "Projects",
    },
  ];
  return (
    <div>
      <TypewriterEffect words={para} />
      <Projects />
    </div>
  );
}
