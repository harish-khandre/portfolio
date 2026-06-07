"use client";

import * as RadixTabs from "@radix-ui/react-tabs";
import { cn } from "@/utils/cn";

export const Tabs = RadixTabs.Root;

export const TabsList = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof RadixTabs.List>) => (
  <RadixTabs.List
    className={cn(
      "flex w-full justify-between rounded-lg bg-surface p-1",
      className,
    )}
    {...props}
  />
);

export const TabsTrigger = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof RadixTabs.Trigger>) => (
  <RadixTabs.Trigger
    className={cn(
      "flex-1 cursor-pointer rounded-md px-4 py-2.5 font-mono text-xs uppercase tracking-widest",
      "text-muted/50 transition-all",
      "data-[state=active]:bg-fg/[0.07] data-[state=active]:text-fg/90",
      className,
    )}
    {...props}
  />
);

export const TabsContent = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof RadixTabs.Content>) => (
  <RadixTabs.Content
    className={cn("mt-6 focus-visible:outline-none", className)}
    {...props}
  />
);
