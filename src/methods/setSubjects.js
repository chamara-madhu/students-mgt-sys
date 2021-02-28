export const setSubjects = (subs) => {
  const subArr = [];
  for (let i = 0; i < subs; i++) {
    subArr.push(`Subject ${i + 1}`);
  }

  return subArr;
};
