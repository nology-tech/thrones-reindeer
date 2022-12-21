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
// STORING THE FETCH FUNCTION
const globalFetch = global.fetch;

// TEST 1
// CALL THE API
// - STATUS CODE IS 200
// - JSON
// - RETURNS AN OBJECT WITH DATA & ERROR KEY
// - DATA -> ARRAY OF CHARACTERS
// - ERROR -> FALSE

// TEST 2
// CALL THE API
// - STATUS CODE IS NOT 200
// - RETURNS AN OBJECT WITH DATA & ERROR KEY
// - DATA -> ERROR MESSAGE
// - ERROR -> TRUE

describe("Testing services getCharacters()", () => {
  it("should fetch and return the correct data when status is 200", async () => {
    // MOCKING THE FETCH FUNCTION
    // - MOCKING RESPONSE
    // - MOCK THE DATA
    global.fetch = jest.fn(() => Promise.resolve({ status: 200, json: () => Promise.resolve(testData) }));

    const characters = await getCharacters();

    expect(characters).toEqual({ data: testData, error: false });
  });

  it("should fetch and return correct error message when status is not 200", async () => {
    global.fetch = jest.fn(() => Promise.resolve({ status: 404 }));

    const characters = await getCharacters();

    expect(characters).toEqual({ data: "Something went wrong", error: true });
  });
});

afterAll(() => {
  // AFTER TESTS SET IT BACK
  global.fetch = globalFetch;
});
