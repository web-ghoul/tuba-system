import { Link } from "react-router-dom";
import { ButtonTypes } from "../types/components";

const PrimaryButton = ({ children, link, func, type }: ButtonTypes) => {
  const button = (
    <button
      type={type || "button"}
      className={`px-5 py-1 rounded-md text-white cursor-pointer bg-primary_gradient hover:bg-primary_gradient_reverse bg-black text-xl`}
      onClick={func ? func : () => {}}
    >
      {children}
    </button>
  );

  return link ? <Link to={link}>{button}</Link> : button;
};

export default PrimaryButton;
