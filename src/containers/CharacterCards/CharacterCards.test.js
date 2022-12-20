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
  it("should display character cards", () => {
    render(<CharacterCards characters={testData} />);

    const cards = screen.getAllByRole("heading");

    expect(cards.length).toBe(2);
  });

  it("should display no results found when given empty characters prop", () => {
    render(<CharacterCards characters={[]} />);

    const noResults = screen.getByText(/no results found/i);

    expect(noResults).toBeInTheDocument();
  });
});
