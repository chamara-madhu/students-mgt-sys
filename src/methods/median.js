export const median = (marks) => {
  if (marks) {
    let median = 0,
      len = marks.length;

    if (
      len % 2 ===
      0 // is even
    ) {
      // average of two middle numbers
      median = (marks[len / 2 - 1] + marks[len / 2]) / 2;
    } else {
      // is odd
      // middle number only
      median = marks[(len - 1) / 2];
    }

    return median;
  }
};
