"use strict";

var _index = _interopRequireDefault(require("../lib/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import Button from "./components/button/button";
var App = function App() {
  return _index["default"].createElement("div", {
    id: "root2"
  }, _index["default"].createElement("h1", null, "My First Own React App"), _index["default"].createElement("p", null, "Lets see how it works"));
};

_index["default"].render(App(), "root");

