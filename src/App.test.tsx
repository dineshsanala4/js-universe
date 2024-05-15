import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test("renders - Blogs Menu item", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const menuElement = screen.getByText(/Blogs/i);
  expect(menuElement).toBeInTheDocument();
});
