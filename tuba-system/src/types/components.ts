import { ReactNode } from "react";

interface ButtonTypes {
  children: ReactNode;
  type?: "button" | "submit";
  link?: string;
  func?: () => void;
}

interface LangSwitchTypes {
  langStorage:string
}

export type { ButtonTypes,LangSwitchTypes };
