import AboutContent from "./about-content";
import ContactContent from "./contact-content";
import { Tabs } from "./ui/tabs";
import WorkContent from "./work-content";

export function TabsDemo() {
  const tabs = [
    {
      title: "Home",
      value: "home",
      content: (
        <div className="w-full svgwrapper overflow-y-auto scrollbar-hidden no-scrollbar relative h-full rounded-2xl p-10  text-zinc-50 bg-zinc-950">
          <AboutContent />
        </div>
      ),
    },
    {
      title: "Work",
      value: "work",
      content: (
        <div className="svgwrapper w-full overflow-y-auto scrollbar-hidden no-scrollbar relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-zinc-50 bg-zinc-950">
          <WorkContent />
        </div>
      ),
    },
    {
      title: "Contact",
      value: "contact",
      content: (
        <div className="w-full svgwrapper overflow-y-auto scrollbar-hidden no-scrollbar  relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-zinc-50 bg-zinc-950">
          <ContactContent />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[90%] sm:h-[20rem] md:h-[36rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-40 rounded-lg px-2 py-2 sm:px-8 sm:py-2 ">
      <Tabs tabs={tabs} />
    </div>
  );
}
