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

  const getInputType: () => "password" | "email" | "text" = () => {
    if (name === "password") {
      return passwordVisible ? "text" : "password";
    }
    return name === "email" ? "email" : "text";
  };

  return (
    <StyledLabel>
      <StyledInput
        {...register(name as AuthInputName)}
        placeholder={placeholder}
        type={getInputType()}
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
