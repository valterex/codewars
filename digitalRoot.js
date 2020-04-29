const digital_root = (n) => {
  if (n < 10) return n;

  return digital_root(
    n
      .toString()
      .split("")
      .reduce(
        (acc, d) => acc + +d, // +d means "cast the string to a number"
        0
      )
  );
};
