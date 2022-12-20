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

const globalFetch = global.fetch;

describe("Testing services getCharacters()", () => {
  it("should return the correct data format from the API when status is 200", async () => {
    global.fetch = jest.fn(() => Promise.resolve({ status: 200, json: () => Promise.resolve(testData) }));

    const characters = await getCharacters();

    expect(characters).toEqual({ data: testData, error: false });
  });

  it("should catch and return a error from the API when status is not 200", async () => {
    global.fetch = jest.fn(() => Promise.resolve({ status: 404, json: () => Promise.resolve({ data: null }) }));

    const artist = await getCharacters("the-beatles");

    expect(artist).toEqual({ data: "Something went wrong", error: true });
  });
});

afterAll(() => {
  global.fetch = globalFetch;
});
