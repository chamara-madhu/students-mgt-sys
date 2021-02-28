export const mean = (marks) => {
  if (marks) {
    const len = marks.length;
    const mean = marks.reduce((acc, val) => acc + val, 0) / len;

    return mean;
  }
};
