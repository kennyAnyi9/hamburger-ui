import { MainNavItem, SidebarNavItem } from "@/types";

interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Components",
      href: "/docs/components/accordion",
    },
    {
      title: "Themes",
      href: "/themes",
    },
    {
      title: "Examples",
      href: "/examples",
    },
    {
      title: "Blocks",
      href: "/blocks",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          items: [],
        },
        {
          title: "Installation",
          href: "/docs/installation",
          items: [],
        },
      ],
    },
    {
      title: "Components",
      items: [
        {
          title: "Basic Menu",
          href: "/docs/components/accordion",
          items: [],
        },
        {
          title: "Multi-Level Menu",
          href: "/docs/components/alert",
          items: [],
        },
        {
          title: "Icon Menu",
          href: "/docs/components/alert-dialog",
          items: [],
        },
        {
          title: "Badged Menu",
          href: "/docs/components/aspect-ratio",
          items: [],
        },
        {
          title: "Accordion Menu",
          href: "/docs/components/avatar",
          items: [],
        },
        {
          title: "Mega Menu",
          href: "/docs/components/badge",
          items: [],
        },
        {
          title: "Context Menu",
          href: "/docs/components/breadcrumb",
          items: [],
          label: "New",
        },
        {
          title: "Sticky Menu",
          href: "/docs/components/button",
          items: [],
        },
        {
          title: "Right-sided Menu",
          href: "/docs/components/calendar",
          items: [],
        },
        {
          title: "Overlay vs. Slide-in",
          href: "/docs/components/card",
          items: [],
        },
        {
          title: " Social Sharing Menu",
          href: "/docs/components/carousel",
          items: [],
        },
      ],
    },
  ],
};
