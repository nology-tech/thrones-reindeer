import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Nav from "./Nav.jsx";

const testData = {
  targaryen: false,
  stark: false,
  lannister: false,
  baratheon: false,
};

describe("Testing <Nav/>", () => {
  it("should render house checkboxes", () => {
    render(<Nav houseFilters={testData} handleInput={() => {}} handleCheckbox={() => {}} />);

    const checkboxes = screen.getAllByRole(`checkbox`);
    // FAILING TEST
    expect(checkboxes.length).toBe(0);
  });

  it("should render house checkboxes as unchecked", () => {
    render(<Nav houseFilters={testData} handleInput={() => {}} handleCheckbox={() => {}} />);

    const checkboxes = screen.getAllByRole(`checkbox`);

    checkboxes.forEach(checkbox => {
      expect(checkbox.checked).toBeFalsy();
    });
  });

  it("should call handleCheckbox when clicked", () => {
    const handleCheckbox = jest.fn();

    render(<Nav houseFilters={testData} handleInput={() => {}} handleCheckbox={handleCheckbox} />);

    const checkboxes = screen.getAllByRole(`checkbox`);

    checkboxes.forEach(checkbox => {
      userEvent.click(checkbox);
    });

    expect(handleCheckbox).toBeCalledTimes(4);
  });

  it("should call handle input when typed into", () => {
    const handleInput = jest.fn();

    render(<Nav houseFilters={testData} handleInput={handleInput} handleCheckbox={() => {}} />);

    const input = screen.getByRole("textbox");

    userEvent.type(input, "Hello");

    expect(handleInput).toBeCalledTimes(5);
  });
});
