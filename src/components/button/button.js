import OwnReact from "../../../lib/index";
import "./button.css";

const Button = (children) => {
  const handleClick = () => {
    console.log("Button clicked");
  };
  return (
    <button className="__btn" onClick={() => handleClick()}>
      {children}
    </button>
  );
};

export default Button;
