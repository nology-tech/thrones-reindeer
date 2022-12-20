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


});
