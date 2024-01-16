import { navOptions } from "./options";

export type NavList = typeof navOptions;
export type NavItem = (typeof navOptions)[0];
export type RenderMenuItem<T> = (item: T) => React.ReactNode;
