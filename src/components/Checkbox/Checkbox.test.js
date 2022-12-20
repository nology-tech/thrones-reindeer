import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Checkbox from "./Checkbox";

describe("Checkbox tests", () => {
  it("should capitalise family prop for the label", () => {
    render(<Checkbox family={"targaryen"} handleCheckbox={() => {}} checked={false} />);

    const checkbox = screen.getByText("Targaryen");

    expect(checkbox).toBeInTheDocument();
  });

  it("should call onChange function when clicked", () => {
    const handleCheckbox = jest.fn();
    render(<Checkbox family={"targaryen"} handleCheckbox={handleCheckbox} checked={false} />);

    const checkbox = screen.getByRole("checkbox", {
      name: /targaryen/i,
    });

    userEvent.click(checkbox);

    expect(handleCheckbox).toBeCalled();
  });
});
