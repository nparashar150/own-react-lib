import OwnReact from "../lib/index";

const App = () => {
  return OwnReact.createElement(
    "div",
    null,
    "\n      ",
    OwnReact.createElement("h1", null, "My First Own React App"),
    "\n      ",
    OwnReact.createElement("p", null, "Lets see how it works"),
    "\n    "
  );
};
OwnReact.render(App(), "root");
