import { IconDefinition } from "@fortawesome/fontawesome-common-types";

export interface ActionableProps {
  id?: string;
  variant: "a" | "button";
  icon?: IconDefinition;
  text?: string;
}
