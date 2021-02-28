export const q3 = (marks) => {
  if (marks) {
    let q3 = 0,
      len = marks.length;

    if (
      len % 4 ===
      0 // is even
    ) {
      // average of two middle numbers
      q3 = (marks[(len / 4) * 3 - 1] + marks[(len / 4) * 3]) / 2;
    } else {
      // is odd
      // middle number only
      q3 = marks[((len - 1) / 4) * 3];
    }

    return q3;
  }
};
