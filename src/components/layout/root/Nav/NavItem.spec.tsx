import { render, screen } from "@testing-library/react";
import { NavItem } from "./NavItem";

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
    prefetch: jest.fn(),
  }),
  usePathname: () => "/blog",
}));

it("should render correctly", () => {
  render(<NavItem href="/blog" title="Blog" />);

  expect(screen.getByText("Blog")).toBeInTheDocument();
});
