import { FC, useState } from "react";
import sprite from "../../images/svg/sprite.svg";
import { InputAuthInter } from "../../helpers/InterfaceData";
import {
  StyledButtonEye,
  StyledError,
  StyledInput,
  StyledLabel,
  StyledSvgEye,
} from "./InputAuth.styled";

type AuthInputName = "username" | "email" | "password";

const InputAuth: FC<InputAuthInter> = ({
  name,
  register,
  errors,
  placeholder,
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <StyledLabel>
      <StyledInput
        {...register(name as AuthInputName)}
        placeholder={placeholder}
        type={
          name === "password"
            ? passwordVisible
              ? "text"
              : "password"
            : name === "email"
            ? "email"
            : "text"
        }
        $error={!!errors[name]}
      />
      <StyledError>{String(errors[name]?.message || "")}</StyledError>

      {name === "password" && (
        <StyledButtonEye type="button" onClick={togglePasswordVisibility}>
          <StyledSvgEye>
            <use
              href={`${sprite}#icon-${!passwordVisible ? "eye-off" : "eye"} `}
            />
          </StyledSvgEye>
        </StyledButtonEye>
      )}
    </StyledLabel>
  );
};

export default InputAuth;
