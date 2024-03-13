import AboutContent from "./about-content";
import ContactContent from "./contact-content";
import { Tabs } from "./ui/tabs";
import WorkContent from "./work-content";

export function TabsDemo() {
  const tabs = [
    {
      title: "About",
      value: "services",
      content: (
        <div className="w-full svgwrapper overflow-hidden relative h-full rounded-2xl p-10  text-zinc-50 bg-zinc-950">
          <AboutContent />
        </div>
      ),
    },
    {
      title: "Work",
      value: "product",
      content: (
        <div className="svgwrapper w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-zinc-50 bg-zinc-950">
          <WorkContent />
        </div>
      ),
    },
    {
      title: "Contact",
      value: "playground",
      content: (
        <div className="w-full svgwrapper overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-zinc-50 bg-zinc-950">
          <ContactContent />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative  flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40 rounded-lg px-8 py-2 ">
      <Tabs tabs={tabs} />
    </div>
  );
}
