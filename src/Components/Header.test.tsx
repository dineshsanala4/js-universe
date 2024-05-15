import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";

test("renders - JS Universe link", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/JS Universe/i);
  expect(linkElement).toBeInTheDocument();
});
