import { render, screen } from "@testing-library/react";
import CharacterCards from "./CharacterCards";

const testData = [
  {
    id: 0,
    firstName: "Daenerys",
    lastName: "Targaryen",
    fullName: "Daenerys Targaryen",
    title: "Mother of Dragons",
    family: "House Targaryen",
    image: "daenerys.jpg",
    imageUrl: "https://thronesapi.com/assets/images/daenerys.jpg",
  },
  {
    id: 1,
    firstName: "Samwell",
    lastName: "Tarly",
    fullName: "Samwell Tarly",
    title: "Maester",
    family: "House Tarly",
    image: "sam.jpg",
    imageUrl: "https://thronesapi.com/assets/images/sam.jpg",
  },
];

describe("Testing <CharacterCards/>", () => {
  it("should display character cards and does not display no results found", () => {
    render(<CharacterCards characters={testData} />);

    // screen.getAllBy*
    // ALLOWS US TO GET MULTIPLES -> [] OF ELEMENTS
    // - ERROR IF NONE ARE FOUND
    const headings = screen.getAllByRole("heading");

    // CHECK THE LENGTH OF THE
    expect(headings.length).toBe(2);

    // screen.queryBy*
    // ALLOWS YOU TO GET ONE ELEMENT
    // - RETURN NULL IF IT DOESN'T EXIST

    const noResultsFound = screen.queryByText(/no results found/i);

    // CHECKING THAT THE TEXT IS NOT DISPLAYED
    expect(noResultsFound).toBeNull();
  });

  it("should display no results found when given empty array", () => {
    // GIVE EMPTY ARRAY
    render(<CharacterCards characters={[]} />);

    const noResultsFound = screen.getByText(/no results found/i);
    // NO RESULTS SHOULD BE DISPLAYED
    expect(noResultsFound).toBeInTheDocument();
  });
});
