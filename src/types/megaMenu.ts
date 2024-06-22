import { ReactNode } from "react";

export type MegaMenuType = {
  children: ReactNode;
  title: string;
  location: "topnav" | "downnav";
};
