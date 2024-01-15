import { navOptions } from "./options";

export type NavList = typeof navOptions;
export type NavItem = (typeof navOptions)[0];
export type RenderMenuItem = (item: NavItem) => React.ReactNode;
