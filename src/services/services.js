// NAMED EXPORT
export const getCharacters = async () => {
  // TRY FETCH
  try {
    const response = await fetch("https://thronesapi.com/api/v2/Characters");
    console.log(response.status);
    // CHECK STATUS CODE
    if (response.status !== 200) {
      throw new Error("Something went wrong");
    }
    // GET DATA
    const data = await response.json();
    // RETURN IT IN OBJECT

    return { data: data, error: false };
  } catch (error) {
    // RETURN OBJECT
    return { data: error.message, error: true };
  }
};

// EXAMPLE OF NAMED EXPORT
export const getDragon = () => {};
