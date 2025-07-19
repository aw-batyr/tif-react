export interface Navigation {
  title: string;
  link?: string;
  blank?: string;
  drop?: boolean;
  dropDownContent?: DropDownContent[];
}

export interface DropDownContent {
  text: string;
  link?: string;
  modal?: boolean;
  blank?: boolean;
  hover?: boolean;
  hoverItems?: {
    text: "string";
    link?: "string";
  }[];
}
