import Actionable from "./Actionable";
import { ActionableProps } from "./Actionable.types";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Actionable", () => {
  test("Should render variant", () => {
    const props: ActionableProps = {
      id: "quotes",
      variant: "a",
    };

    const { rerender } = render(<Actionable {...props} />);
    expect(screen.getByRole("link")).toBeInTheDocument();

    rerender(<Actionable {...props} variant="button" text="QuotesButton" />);
    expect(
      screen.getByRole("button", { name: /QuotesButton/i })
    ).toBeInTheDocument();
  });

  test("Click handler", () => {
    const mockFunction = jest.fn();

    const props: ActionableProps = {
      variant: "button",
      text: "QuotesButton",
      onClick: mockFunction,
    };
    render(<Actionable {...props} />);

    const button = screen.getByRole("button", { name: /QuotesButton/i });
    fireEvent.click(button);

    expect(mockFunction).toBeCalledTimes(1);
  });

  test("Should have correct intent", () => {
    const expectedHref = "www.google.com";
    const props: ActionableProps = {
      variant: "a",
      text: "QuotesLink",
      intent: expectedHref,
    };

    render(<Actionable {...props} />);
    const link = screen.getByRole("link", { name: /QuotesLink/i });

    expect(link).toHaveAttribute("href");
    expect(link.getAttribute("href")).toEqual(expectedHref);
  });
});
