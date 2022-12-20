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
  expect(true).toBeTruthy();
});
