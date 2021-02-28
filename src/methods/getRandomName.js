// create random students names with 5 letters
export const getRandomName = () => {
  let randomChars = "abcdefghijklmnopqrstuvwxyz";
  let name = "";
  for (let i = 0; i < 5; i++) {
    name += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }
  return name;
};
