import { FC, useState } from "react";
import { InputAuthInter } from "../../helpers/InterfaceData";
import { StyledError, StyledInput, StyledLabel } from "./InputAuth.styled";
import ButtonEye from "../Button/ButtonEye/ButtonEye";

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
        <ButtonEye
          togglePasswordVisibility={togglePasswordVisibility}
          passwordVisible={passwordVisible}
        />
      )}
    </StyledLabel>
  );
};

export default InputAuth;
