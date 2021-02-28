// create student Ids
export const genStudId = (num) => {
  let id = num + "";
  while (id.length < 7) id = "0" + id;
  return id;
};
