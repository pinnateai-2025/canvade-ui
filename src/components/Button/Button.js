import "./Button.css";

const Button = ({ text, onClick, type = "button" }) => {
  return (
    <button className="custom-button" onClick={onClick} type={type}>
      {text}
    </button>
  );
};

export default Button;
