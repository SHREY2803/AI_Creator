import React from "react";
import { FloatingDock } from "./components/ui/Floating-dock.jsx"; // Adjust the import path as needed
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="w-full h-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Products",
      icon: (
        <IconTerminal2 className="w-full h-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Components",
      icon: (
        <IconNewSection className="w-full h-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Aceternity UI",
      icon: (
        <img
          src="https://assets.aceternity.com/logo-dark.png"
          width={20}
          height={20}
          alt="Aceternity Logo"
          className="w-full h-full"
        />
      ),
      href: "#",
    },
    {
      title: "Changelog",
      icon: (
        <IconExchange className="w-full h-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="w-full h-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/ShreyKulkarni",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="w-full h-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/SHREY2803",
    },
  ];

  return (
    <div className="flex items-center justify-center w-full h-6">
      <FloatingDock
        // Only for demo, remove for production
        mobileClassName="translate-y-20"
        items={links}
      />
    </div>
  );
}
