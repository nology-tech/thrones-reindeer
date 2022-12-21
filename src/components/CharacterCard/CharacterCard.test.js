import { render, screen } from "@testing-library/react";

import CharacterCard from "./CharacterCard.jsx";

const testData = {
  id: 1,
  firstName: "Samwell",
  lastName: "Tarly",
  fullName: "Samwell Tarly",
  title: "Maester",
  family: "House Tarly",
  image: "sam.jpg",
  imageUrl: "https://thronesapi.com/assets/images/sam.jpg",
};

describe("Testing <CharacterCard/>", () => {
  it("should display given props", () => {
    render(<CharacterCard character={testData} />);

    const characterHeading = screen.getByRole("heading", {
      name: /samwell tarly/i,
    });

    const characterImg = screen.getByRole("img", {
      name: /samwell tarly/i,
    });

    const characterHouse = screen.getByText(/house tarly/i);

    const characterTitle = screen.getByText(/maester/i);

    expect(characterHeading).toBeInTheDocument();
    expect(characterImg).toBeInTheDocument();
    expect(characterHouse).toBeInTheDocument();
    expect(characterTitle).toBeInTheDocument();
  });
});
