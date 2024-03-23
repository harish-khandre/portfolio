"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatedText } from "./ui/animated-text";

export default function contactContent() {
  return (
    <>
      <div>
        <AnimatedText
          el="div"
          heading="Hi!"
          para="Need a beautiful, well-structured website that you can own and maintain yourself? Get in touch lets create whats in your mind to reality."
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center mx-auto w-full max-w-[90%] gap-4 sm:mt-20 space-y-5">
        <Link
          href="https://github.com/harish-khandre"
          target="_blank"
          className=" bg-zinc-100 flex items-center justify-center w-20 h-20 border-2 border-zinc-600 rounded-full p-4 mx-auto transition-all duration-300 group hover:scale-105 hover:bg-zinc-50"
        >
          <Image
            src="/gitub.png"
            className="relative transition-all duration-300 group-hover:scale-125"
            width={50}
            height={50}
            alt="github"
          />
        </Link>

        <Link
          target="_blank"
          href="https://twitter.com/KhandreHarish"
          className=" bg-zinc-100 flex items-center justify-center w-20 h-20 border-2 border-zinc-600 rounded-full p-4 mx-auto transition-all duration-300 group hover:scale-105 hover:bg-zinc-50"
        >
          <Image
            src="/twitter.png"
            className="relative transition-all duration-300 group-hover:scale-125"
            width={50}
            height={50}
            alt="github"
          />
        </Link>

        <Link
          href="mailto:1.harishkhandre@gmail.com"
          target="_blank"
          className=" bg-zinc-100 flex items-center justify-center w-20 h-20 border-2 border-zinc-600 rounded-full p-4 mx-auto transition-all duration-300 group hover:scale-105 hover:bg-zinc-50"
        >
          <Image
            src="/gmail.png"
            className="relative transition-all duration-300 group-hover:scale-125"
            width={50}
            height={50}
            alt="github"
          />
        </Link>

        <Link
          href="https://www.linkedin.com/in/harish-khandre/"
          target="_blank"
          className=" bg-zinc-100 flex items-center justify-center w-20 h-20 border-2 border-zinc-600 rounded-full p-4 mx-auto transition-all duration-300 group hover:scale-105 hover:bg-zinc-50"
        >
          <Image
            src="/linkedin.png"
            className="relative transition-all duration-300 group-hover:scale-125"
            width={50}
            height={50}
            alt="github"
          />
        </Link>
      </div>
    </>
  );
}
