import { capitalizeString } from "./utilities";

describe("capitalizeString", () => {
  it("should capitalise a single lower case word", () => {
    const result = capitalizeString("spaghetti");

    expect(result).toBe("Spaghetti");
  });

  it("should capitalise the first letter of every word in a string", () => {
    const result = capitalizeString("spaghetti bolognese");

    expect(result).toBe("Spaghetti Bolognese");
  });

  it("should leave an already capitalised word unchanged", () => {
    const result = capitalizeString("Spaghetti");

    expect(result).toBe("Spaghetti");
  });

  it("should only affect the first character of a word", () => {
    const result = capitalizeString("SPAGHETTI");

    expect(result).toBe("SPAGHETTI");
  });
});
