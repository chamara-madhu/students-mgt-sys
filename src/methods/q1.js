export const q1 = (marks) => {
  if (marks) {
    let q1 = 0,
      len = marks.length;

    if (
      len % 4 ===
      0 // is even
    ) {
      // average of two middle numbers
      q1 = (marks[len / 4 - 1] + marks[len / 4]) / 2;
    } else {
      // is odd
      // middle number only
      q1 = marks[(len - 1) / 4];
    }

    return q1;
  }
};
