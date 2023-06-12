import FormBlog from "../components/BlogForm";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("renders BlogForm Component with props", async () => {
  const mockSubmit = jest.fn();
  render(<FormBlog title="" handleSubmit={mockSubmit} />);
  await userEvent.click(screen.getByRole("button"));
  expect(mockSubmit).toHaveBeenCalled();
});
