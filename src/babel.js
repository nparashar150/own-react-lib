import { createElement } from "../lib/createElement";
import { button } from "./components/button/button";

(function createDOMNode() {
  const root = document.body;
  function handleOnClick() {
    alert("You have clicked twice!!");
  }
  const divCreatedFromFunction = createElement({
    // elementType
    element: "div",
    // props
    props: {
      id: "root",
      className: "root",
      ondblclick: handleOnClick,
      style: "text-align: center;"
    },
    state: {
      // state
      name: "John Doe"
    },
    children: [
    // children
    {
      element: "pre", // elementType
      props: {
        // props
        className: "heading"
      },
      state: {
        // state
        name: "John Doe's child"
      },
      children: [
      // children
      {
        // elementType
        element: "h1",
        props: {
          // props
          className: "heading"
        },
        state: {
          // state
          name: "John Doe's child"
        },
        // children
        children: "This is compiled under webpack"
      }]
    }],
    parentElement: root
  });

  // creating element inside element created from createElement function
  createElement({
    // elementType
    element: "div",
    // props
    props: { id: "nestedElement", className: "nestedElement" },
    state: {
      // state
      name: "John Doe"
    },
    children: [
    // children
    {
      element: "pre", // elementType
      props: {
        // props
        className: "heading"
      },
      state: {
        // state
        name: "John Doe's child"
      },
      children: [
      // children
      {
        // elementType
        element: "h1",
        props: {
          // props
          className: "heading"
        },
        state: {
          // state
          name: "John Doe's child"
        },
        // children
        children: "Wow!! it supports nested Creation also"
      }]
    }],
    parentElement: divCreatedFromFunction
  });

  button(root, {
    onclick: () => {
      alert("You have clicked me!!");
    }
  }, "Click Me");

  const AnotherButton = () => {
    return OwnReact.createElement("button", null, "Another Button");
  };
  AnotherButton();
})();
export { createElement };

