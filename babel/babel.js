"use strict";

var _index = _interopRequireDefault(require("../lib/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import Button from "./components/button/button";
var App = function App() {
  return _index["default"].createElement("div", {
    id: "root2"
  }, _index["default"].createElement("h1", null, "My First Own React App"), _index["default"].createElement("p", null, _index["default"].createElement("div", {
    className: "testing"
  }, _index["default"].createElement("h1", null, "My First Own React App"), _index["default"].createElement("p", null, "This is another nesting level"))));
};

_index["default"].render(App(), "root");

