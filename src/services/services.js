export const getCharacters = async () => {
  try {
    const response = await fetch("https://thronesapi.com/api/v2/Characters");

    if (response.status !== 200) {
      throw new Error("Something went wrong");
    }

    const data = await response.json();

    return { data, error: false };
  } catch (error) {
    return { data: error.message, error: true };
  }
};
