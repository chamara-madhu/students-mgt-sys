export const setSemesters = (sems) => {
  const semArr = [];
  for (let i = 0; i < sems; i++) {
    semArr.push(`Sem ${i + 1}`);
  }

  return semArr;
};
