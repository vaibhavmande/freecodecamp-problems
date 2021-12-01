import { ActionableProps } from "./Actionable.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import "./Actionable.css";

const withVariant = (
  variant: "a" | "button",
  icon: IconDefinition | null,
  props: any
) => {
  const { text } = props;
  switch (variant) {
    case "a":
      return (
        <a {...props} target="_blank">
          {icon ? (
            <FontAwesomeIcon icon={icon as unknown as IconDefinition} />
          ) : null}
          {text}
        </a>
      );
    case "button":
      return <button {...props}>{text}</button>;
  }
};

const Actionable = ({
  id,
  variant,
  icon,
  text,
  intent,
  onClick,
}: ActionableProps) => {
  return withVariant(variant, icon ?? null, {
    id: id ?? undefined,
    text,
    className: "actionable",
    href: intent ?? "#",
    onClick: onClick ?? (() => {}),
  });
};

export default Actionable;
