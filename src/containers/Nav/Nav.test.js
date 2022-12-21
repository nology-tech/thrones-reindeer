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

    expect(checkboxes.length).toBe(4);
  });

  it("should render house checkboxes as unchecked", () => {
    render(<Nav houseFilters={testData} handleInput={() => {}} handleCheckbox={() => {}} />);

    const checkboxes = screen.getAllByRole(`checkbox`);

    checkboxes.forEach(checkbox => {
      expect(checkbox.checked).toBeFalsy();
    });
  });

  it("should call handleInput when searchbox is typed into", () => {
    // MOCK FUNCTION
    // - DOESN'T DO ANYTHING
    // - KEEP TRACK OF THINGS
    // - HOW MANY TIMES IS HAS BEEN CALLED
    // - WHAT PARAMETERS IT HAS BEEN GIVEN
    const handleInput = jest.fn();

    render(<Nav houseFilters={testData} handleInput={handleInput} handleCheckbox={() => {}} />);

    const input = screen.getByRole("textbox");

    // userEvent
    // - SIMULATES A USER
    // - TYPING -> ELEMENT AND WATCH YOU ARE GOING TYPE
    userEvent.type(input, "a");
    // WANT OUR handleInput TO BE CALLED 1
    expect(handleInput).toBeCalledTimes(1);

    userEvent.type(input, "hello");

    expect(handleInput).toBeCalledTimes(6);
  });

  it("should call handleCheckbox when checkbox is clicked", () => {
    const handleCheckbox = jest.fn();

    render(<Nav houseFilters={testData} handleInput={() => {}} handleCheckbox={handleCheckbox} />);

    const checkboxes = screen.getAllByRole(`checkbox`);

    checkboxes.forEach(checkbox => {
      userEvent.click(checkbox);
    });

    expect(handleCheckbox).toBeCalledTimes(4);
  });
});
