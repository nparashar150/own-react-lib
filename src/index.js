import OwnReact from "../lib/index";
import Button from "./components/button/button";
import "./global.css";

const App = () => {
  const [count, setCount] = OwnReact.useState(0, App);
  const [_count, _setCount] = OwnReact.useState(0, App);

  const handleClick = () => {
    setCount(count() + 1);
    _setCount(_count() + 2);
    console.log(count(), _count());
  };

  return (
    <div id="root2">
      <h1>My First Own React App</h1>
      <p>
        <div className="testing">
          <h1>My First Own React App with custom Babel and Webpack config</h1>
          <p>This is another nesting level</p>
          <Button onClick={() => handleClick()}>Click me</Button>
        </div>
      </p>
      <App3 />
    </div>
  );
};

const App3 = () => {
  const [count, setCount] = OwnReact.useState(0, App3);

  const handleClick = () => {
    setCount(count() + 1);
    console.log(count());
  };

  return (
    <div id="root4">
      <h1>My Third Own React App</h1>
      <p>
        <div className="testing">
          <h1>My Third Own React App with custom Babel and Webpack config</h1>
          <p>This is another nesting level</p>
          <p>This is another another nesting level</p>
          <Button onClick={() => handleClick()}>Click me third</Button>
        </div>
      </p>
    </div>
  );
};

OwnReact.render(<App />, "root");

// setTimeout(() => {
//   OwnReact.render(<App2 />, "root");
// }, 5000);

// setTimeout(() => {
//   OwnReact.render(<App3 />, "root");
// }, 10000);

// setTimeout(() => {
//   OwnReact.render(<App4 />, "root");
// }, 15000);
