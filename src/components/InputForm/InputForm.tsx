import {
  StyledInputFormError,
  StyledInputFormInput,
  StyledInputFormLabel,
} from "./InputForm.styled";
import { InputFormProps } from "../../helpers/InterfaceData";
import { FC } from "react";

type InputFormName = "userName" | "email" | "userPhone" | "userComment";

const InputForm: FC<InputFormProps> = ({
  name,
  placeholder,
  type,
  register,
  errors,
  width,
}) => {
  return (
    <StyledInputFormLabel $width={width}>
      <StyledInputFormInput
        $error={!!errors[name]}
        type={type}
        placeholder={placeholder}
        {...register(name as InputFormName)}
      />
      <StyledInputFormError>
        {String(errors[name]?.message || "")}
      </StyledInputFormError>
    </StyledInputFormLabel>
  );
};

export default InputForm;
