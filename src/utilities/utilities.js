export const capitalizeString = string => {
  const words = string.split(" ");
  const capitalisedWords = words.map(word => {
    return word[0].toUpperCase() + word.substring(1);
  });

  return capitalisedWords.join(" ");
};
