import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

test("App with Quote", async () => {
  render(<App />);

  const quoteElement = screen.getByTestId("quote");
  await waitFor(() => expect(quoteElement).not.toBeEmptyDOMElement());

  expect(quoteElement).not.toBeEmptyDOMElement();
});
