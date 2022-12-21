import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

// MOCK A FUNCTION FROM A FILE
jest.mock("./services/services", () => {
  return {
    getCharacters: () => {
      return {
        data: [
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
          {
            id: 7,
            firstName: "Robert",
            lastName: "Baratheon",
            fullName: "Robert Baratheon",
            title: "Lord of the Seven Kingdoms",
            family: "House Baratheon",
            image: "robert-baratheon.jpeg",
            imageUrl: "https://thronesapi.com/assets/images/robert-baratheon.jpeg",
          },
          {
            id: 3,
            firstName: "Arya",
            lastName: "Stark",
            fullName: "Arya Stark",
            title: "No One",
            family: "House Stark",
            image: "arya-stark.jpg",
            imageUrl: "https://thronesapi.com/assets/images/arya-stark.jpg",
          },
          {
            id: 8,
            firstName: "Jamie",
            lastName: "Lannister",
            fullName: "Jamie Lannister",
            title: "Lord Commander of the Kingsguard",
            family: "House Lannister",
            image: "jaime-lannister.jpg",
            imageUrl: "https://thronesapi.com/assets/images/jaime-lannister.jpg",
          },
        ],
        error: false,
      };
    },
  };
});

describe("Testing  <App/>", () => {
  it("should render 5 character cards returned from mock API", async () => {
    render(<App />);

    // screen.findBy
    // IS ASYNCHRONOUS
    // - WAIT THE STATE TO BE SET
    // - AWAIT

    // const cards =  screen.getAllByRole("heading");
    const cards = await screen.findAllByRole("heading");

    expect(cards.length).toBe(5);
  });

  it("should filter characters by Targaryen house once clicked", async () => {
    render(<App />);

    const checkBox = await screen.findByRole("checkbox", {
      name: /targaryen/i,
    });

    userEvent.click(checkBox);

    const character = await screen.findByText(/daenerys targaryen/i);

    expect(character).toBeInTheDocument();

    const cards = await screen.findAllByRole("heading");

    expect(cards.length).toBe(1);
  });

  xit("should filter characters by Stark house once clicked", async () => {
    render(<App />);

    const checkBox = await screen.findByRole("checkbox", {
      name: /stark/i,
    });

    await userEvent.click(checkBox);

    const character = await screen.findByText(/arya stark/i);
    expect(character).toBeInTheDocument();
  });

  xit("should filter characters by Lannister house once clicked", async () => {
    render(<App />);

    const checkBox = await screen.findByRole("checkbox", {
      name: /lannister/i,
    });

    await userEvent.click(checkBox);

    const character = await screen.findByText(/jamie lannister/i);
    expect(character).toBeInTheDocument();
  });

  xit("should filter characters by Baratheon house once clicked", async () => {
    render(<App />);

    const checkBox = await screen.findByRole("checkbox", {
      name: /baratheon/i,
    });

    await userEvent.click(checkBox);

    const character = await screen.findByText(/robert baratheon/i);
    expect(character).toBeInTheDocument();
  });

  it("should filter characters by search when typed", async () => {
    render(<App />);

    const input = await screen.findByRole("textbox");

    userEvent.type(input, "ar");

    const cards = await screen.findAllByRole("heading");

    expect(cards.length).toBe(4);
  });
});
