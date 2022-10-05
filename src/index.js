import OwnReact from "../lib/index";
import Button from "./components/button/button";

const App = () => {
  return (
    <div id="root2">
      <Button>Click me</Button>
      <h1>My First Own React App</h1>
      <p>
        <div className="testing">
          <h1>My First Own React App with custom Babel and Webpack config</h1>
          <p>This is another nesting level</p>
        </div>
      </p>
    </div>
  );
};
OwnReact.render(App(), "root");
