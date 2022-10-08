import { styleToString } from "./utils/styleToString";

/**
 *
 * @param {HTMLElement} element
 * @param {object} props
 * @param {object} state
 * @returns {HTMLElement}
 */
export const createElement = (element, props = {}, ...children) => {
  // create a new element with the given tagName
  let _htmlElement =
    typeof element === "string" ? document?.createElement(element) : element();
  // add the props to the element
  if (props && typeof props === "object" && Object.keys(props).length > 0) {
    Object.keys(props)?.map((propName) => {
      if (propName.includes("on")) {
        // if prop is of event type then add event listener
        _htmlElement.addEventListener(
          propName.slice(2).toLowerCase(),
          props[propName]
        );
      } else if (propName.toLowerCase() === "classname") {
        // if prop is className
        _htmlElement.setAttribute("class", props[propName]);
      } else if (propName.toLowerCase() === "style") {
        // if prop is style
        _htmlElement.setAttribute("style", styleToString(props[propName]));
      } else {
        // rest other propNames
        _htmlElement?.setAttribute(propName, props[propName]);
      }
    });
  }

  children?.map((child) => {
    if (
      (typeof child === "string") |
      (typeof child === "number") |
      (typeof child === "boolean") |
      (typeof child === "undefined") |
      (child === null)
    ) {
      if (child) {
        _htmlElement.innerHTML = child;
      }
    } else {
      _htmlElement.appendChild(child);
    }
  });

  // return the most top-level element
  return _htmlElement;
};

// createElement("div", { id: "root", onclick: () => alert("Clicked") }, {});
