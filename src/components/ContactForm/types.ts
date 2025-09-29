import { TFunction } from "react-i18next";
export interface ContactProps {
  title: string;
  content: string;
  id: string;
  t: TFunction;
  icon?: string; // SVG icon filename (public/img/svg)
}

export interface ValidationTypeProps {
  type: string;
}
