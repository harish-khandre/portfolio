"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Experience from "@/components/experience";
import { Projects } from "@/components/projects";

export default function WorkSection() {
  return (
    <section>
      <Tabs defaultValue="experience">
        <TabsList>
          <TabsTrigger value="experience">experience</TabsTrigger>
          <TabsTrigger value="projects">projects</TabsTrigger>
        </TabsList>
        <TabsContent value="experience">
          <Experience />
        </TabsContent>
        <TabsContent value="projects">
          <Projects />
        </TabsContent>
      </Tabs>
    </section>
  );
}
