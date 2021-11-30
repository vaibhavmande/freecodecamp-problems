import { ActionableProps } from "./Actionable.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";

const withVariant = (
  variant: "a" | "button",
  icon: IconDefinition | null,
  props: any
) => {
  const { text } = props;
  switch (variant) {
    case "a":
      return (
        <a {...props}>
          {icon ? (
            <FontAwesomeIcon icon={icon as unknown as IconDefinition} />
          ) : (
            <></>
          )}
          {text}
        </a>
      );
    case "button":
      return <button {...props}>{text}</button>;
  }
};

const Actionable = ({ id, variant, icon, text }: ActionableProps) => {
  return withVariant(variant, icon ?? null, {
    id: id ?? undefined,
    text,
  });
};

export default Actionable;
