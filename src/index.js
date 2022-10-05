import OwnReact from "../lib/index";
// import Button from "./components/button/button";

const App = () => {
  return (
    <div id="root2">
      {/* <Button /> */}
      <h1>My First Own React App</h1>
      <p>Lets see how it works</p>
    </div>
  );
};
OwnReact.render(App(), "root");
