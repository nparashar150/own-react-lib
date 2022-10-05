import OwnReact from "../lib/index";
// import Button from "./components/button/button";

const App = () => {
  return (
    <div id="root2">
      <h1>My First Own React App</h1>
      <p>
        <div className="testing">
          <h1>My First Own React App</h1>
          <p>This is another nesting level</p>
        </div>
      </p>
    </div>
  );
};
OwnReact.render(App(), "root");
