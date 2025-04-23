import { ReactNode } from "react";
interface ButtonTypes {
    children: ReactNode;
    type?: "button" | "submit";
    link?: string;
    func?: () => void;
}
export type { ButtonTypes };
