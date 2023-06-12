import { render, screen } from "@testing-library/react";
import Blog from "../components/Blog";

// Test case
test("renders Blog Component with props", async () => {
  render(<Blog title="Test Title" content="Test Body" />);
  const titleElement = screen.getByText(/Test Title/i);
  const bodyElement = screen.getByText(/Test Body/i);
  expect(titleElement).toBeInTheDocument();
  expect(bodyElement).toBeInTheDocument();
});
