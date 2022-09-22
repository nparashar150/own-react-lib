// converts JS object to CSS string
export const styleToString = (style) => {
  // if style is not an object then return empty string
  if (Object.keys(style).length === 0) return "";

  // reduce Object into single string of CSS
  return Object.keys(style).reduce(
    (acc, key) =>
      acc +
      key
        .split(/(?=[A-Z])/) // split camelCase
        .join("-") // join with hyphen (-)
        .toLowerCase() + // convert to kebab-case
      ":" + // add colon after key
      style[key] + // add value of style
      ";", // add semicolon at the end of each style
    ""
  );
};
