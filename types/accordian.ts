import { ReactNode } from "react";

export type AccordionItem = {
  title: string;
  description: ReactNode;
};
export type accordionDataType = {
  data: AccordionItem[];
  className?:string;
};
