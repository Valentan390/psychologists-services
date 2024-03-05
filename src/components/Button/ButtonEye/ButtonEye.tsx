import { StyledButtonEye, StyledSvgEye } from "./ButtonEye.styled";
import sprite from "../../../images/svg/sprite.svg";
import { FC } from "react";
import { ButtonEyeInter } from "../../../helpers/InterfaceData";

const ButtonEye: FC<ButtonEyeInter> = ({
  togglePasswordVisibility,
  passwordVisible,
}) => {
  return (
    <StyledButtonEye type="button" onClick={togglePasswordVisibility}>
      <StyledSvgEye>
        <use href={`${sprite}#icon-${!passwordVisible ? "eye-off" : "eye"} `} />
      </StyledSvgEye>
    </StyledButtonEye>
  );
};

export default ButtonEye;
