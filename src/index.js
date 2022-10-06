import OwnReact from "../lib/index";
import Button from "./components/button/button";
import "./global.css";

const App = () => {
  return (
    <div id="root2">
      <h1>My First Own React App</h1>
      <p>
        <div className="testing">
          <h1>My First Own React App with custom Babel and Webpack config</h1>
          <p>This is another nesting level</p>
          <Button>Click me</Button>
        </div>
      </p>
    </div>
  );
};
const App2 = () => {
  return (
    <div id="root3">
      <h1>My Second Own React App</h1>
      <p>
        <div className="testing">
          <h1>My Second Own React App with custom Babel and Webpack config</h1>
          <p>This is another nesting level</p>
          <p>This is another nesting level</p>
          <p>This is another nesting level</p>
          <Button>Click me second</Button>
        </div>
      </p>
    </div>
  );
};

const App3 = () => {
  return (
    <div id="root4">
      <h1>My Third Own React App</h1>
      <p>
        <div className="testing">
          <h1>My Third Own React App with custom Babel and Webpack config</h1>
          <p>This is another nesting level</p>
          <p>This is another another nesting level</p>
          <Button>Click me third</Button>
        </div>
      </p>
    </div>
  );
};

const App4 = () => {
  return (
    <div id="root4">
      <h1>My Fourth Own React App</h1>
    </div>
  );
};

OwnReact.render(<App />, "root");

setTimeout(() => {
  OwnReact.render(<App2 />, "root");
}, 5000);

setTimeout(() => {
  OwnReact.render(<App3 />, "root");
}, 10000);

setTimeout(() => {
  OwnReact.render(<App4 />, "root");
}, 15000);
