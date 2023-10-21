import { render, screen } from "@testing-library/react";
import { Button } from "..";

it("should have render correctly", () => {
  const buttonText = "Test text";

  render(<Button>{buttonText}</Button>);

  expect(screen.getByRole("button")).toBeInTheDocument();
  expect(screen.getByText(buttonText));
});
