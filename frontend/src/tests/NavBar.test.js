import Nav from "../components/NavBar";
import { render, screen } from "@testing-library/react";

test("renders NavBar with SignIn button", async () => {
  render(<Nav />);
  const signInElement = screen.getAllByText(/Sign In/i);
  expect(signInElement.length).toBe(2);
});
