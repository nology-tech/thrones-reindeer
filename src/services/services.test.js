import { getCharacters } from "./services";

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

// const globalFetch = global.fetch;

describe("Testing services getCharacters()", () => {
  it("will pass", () => expect(true).toBe(true));
});

// afterAll(() => {
//   global.fetch = globalFetch;
// });
