import { Projects } from "./projects";
import { AnimatedText } from "./ui/animated-text";

export default function WorkContent() {
  return (
    <div>
      <AnimatedText el="h1" heading="These are my few projects" />
      <Projects />
    </div>
  );
}
