import { styleToString } from "./utils/styleToString";

/**
 *
 * @param {HTMLElement} element
 * @param {object} props
 * @param {object} state
 * @returns {HTMLElement}
 */
export const createElement = (
  element,
  props = {},
  state = {},
  children = [],
  parentElement = null,
) => {
  // create a new element
  const _htmlElement = document?.createElement(element);

  // add the props to the element
  if (typeof props === "object" && Object.keys(props).length > 0) {
    Object.keys(props)?.map((propName) => {
      if (propName.includes("on")) {
        // if prop is of event type then add event listener
        _htmlElement.addEventListener(propName.slice(2), props[propName]);
      }
      if (propName.toLowerCase() === "classname" || propName === "class") {
        // if prop is className
        _htmlElement.setAttribute("class", props[propName]);
      }
      if (propName.toLowerCase() === "style") {
        // if prop is style
        _htmlElement.setAttribute("style", styleToString(props[propName]));
      }
      // rest other propNames
      _htmlElement?.setAttribute(propName, props[propName]);
    });
  }

  // store the state in the element
  if (typeof state === "object" && Object.keys(state).length > 0) {
    _htmlElement.state = {};
    _htmlElement.state = {
      ...state,
    };
  }
  // append child to parent element if parent element is passed as _htmlElement
  if (parentElement && parentElement instanceof HTMLElement) {
    parentElement.appendChild(_htmlElement);
  }

  // add the children to the element
  if (
    (typeof children === "string") |
    (typeof children === "number") |
    (typeof children === "boolean") |
    (typeof children === "undefined") |
    (children === null)
  ) {
    _htmlElement.innerHTML = children;
  } else {
    children?.map((child) => {
      createElement({
        element: child?.element,
        props: child?.props,
        state: child?.state,
        children: child?.children,
        parentElement: _htmlElement,
      });
    });
  }

  // return the most top-level element
  return _htmlElement;
};

// createElement("div", { id: "root", onclick: () => alert("Clicked") }, {});
