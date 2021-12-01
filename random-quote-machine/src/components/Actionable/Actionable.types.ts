import React from "react";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";

export interface ActionableProps {
  id?: string;
  variant: "a" | "button";
  icon?: IconDefinition;
  text?: string;
  intent?: string;
  onClick?: React.ChangeEventHandler;
}
