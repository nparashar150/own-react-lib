import { createElement } from "../../../lib/createElement";

export const button = (parentElement, props, innerText) => {
  if (!parentElement) return;

  // styling in JS object is converted to CSS string
  const buttonStyles = {
    backgroundColor: "#EEE",
    color: "#1a1a1a",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const button = createElement({
    element: "button",
    props: {
      ...props,
      style: buttonStyles,
    },
    state: {},
    children: innerText,
    parentElement,
  });

  return button;
};
