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
    // LOADS THE COMPONENT
    render(<CharacterCard character={testData} />);

    // GETTING ELEMENTS
    // screen.getBy*
    // - WILL GET 1 ELEMENT
    // - WILL ERROR IF MORE OR NONE ARE FOUND

    const img = screen.getByRole("img", { name: /samwell tarly/i });

    const heading = screen.getByRole("heading", { name: /samwell tarly/i });

    const title = screen.getByText(/title: maester/i);

    const family = screen.getByText(/family: house tarly/i);

    expect(img).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(family).toBeInTheDocument();
  });
});
