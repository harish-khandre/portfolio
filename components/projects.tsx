"use client";

import { HoverEffect } from "./ui/card-hover-effect";

export function Projects() {
  return (
    <div className="max-w-5xl sm:mx-auto sm:px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "ShelterSoul",
    description:
      "Developed a web app to bridge the gap between mentally challenged homeless individuals and NGOs. With just a few clicks, you can help connect those in need with vital support and care services.",
    link: "https://www.sheltersoul.me/",
  },
  {
    title: "Breedit",
    description:
      "built A platform which encourages pet adoption of pets who were abundoned or close to abundonment as well as provides a platform for pet owners to connect with each other and pet service providers",
    link: "https://www.breedit.co.in/",
  },
  {
    title: "Covet",
    description:
      "A platform that connects social media artists and local artists with potential buyers as well as thier fans. It provides a platform for artisans to showcase their work and sell their products.",
    link: "https://cover.live",
  },
  {
    title: "Uvan",
    description:
      "Bloggin website for youtuber called to educate the people about government schemes and policies",
    link: "https://uvan.tech",
  },
  {
    title: "Samadhan Enterprise",
    description:
      "A website for a real-estate company called Samadhan that provides solutions for the problems faced by the people in the context of real-estate and property management",
    link: "https://microsoft.com",
  },
  {
    title: "Other Projects",
    description:
      "Notes with GPT, Thread's clone, Netflix clone and many more projects",
    link: "https://github.com/harish-khandre?tab=repositories",
  },
];
