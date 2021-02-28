// create random marks that between 0 to 100
export const getRandomMark = () => {
  let randomChars = "0123456789";
  let mark = "";
  for (let i = 0; i < 2; i++) {
    mark += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }
  return parseInt(mark);
};
