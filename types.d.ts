export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;

  label?: string;
}

export interface menuItem {
  items?: string[];
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface MainNavItem extends NavItem {}

export interface SidebarNavItem extends NavItemWithChildren {}

export interface CodeSnippetProps {
  children?: React.ReactNode;
  className?: string;
}
