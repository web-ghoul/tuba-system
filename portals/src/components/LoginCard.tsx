import { handleToaster } from "tuba_system/handleToaster";
import { LoginCardTypes } from "../types/components";

const LoginCard = ({ title, description, link }: LoginCardTypes) => {
  console.log(link)
  return (
    <a className={`login_card`} onClick={()=>handleToaster("webGhoul")}>
      <div className={"login_image"} />
      <h6>{title}</h6>
      <h6>{description}</h6>
      <div className="login_shape" />
    </a>
  );
};

export default LoginCard;
