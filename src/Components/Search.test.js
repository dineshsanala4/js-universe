import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Search from "./Search";

test("input has placeholder - Search", () => {
  render(
    <BrowserRouter>
      <Search />
    </BrowserRouter>
  );
  const inputElement = screen.find(".form-classname");
  expect(inputElement.at(0).props().placeholder).toEqual("Search");
});

test("Renders Search text", () => {
  render(
    <BrowserRouter>
      <Search />
    </BrowserRouter>
  );
  const textElement = screen.getByText(/Search/i);
  expect(textElement).toBeInTheDocument();
});
