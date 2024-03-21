import { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputAuth from "../../InputAuth/InputAuth";
import { schemaSignin, schemaSignup } from "../../../helpers/validation";
import {
  StyledFormSignUpButton,
  StyledFormSignUpDescription,
  StyledFormSignUpHeading,
  StyledFormSignUpInputtWrapper,
  StyledFormSignUpTextWrapper,
  StyledFormSignUpWrapper,
  StyledSignUpWrapper,
} from "./SignUpAndSignInModal.styled";
import { FormData } from "../../../helpers/InterfaceData";
import { inputSignUp, inputSignIn } from "../../../helpers/ComponentData";
import ButtonClose from "../../Button/ButtonClose/ButtonClose";
import { useAppDispatch } from "../../../hooks/useReduxHooks";
import {
  signUpUser,
  sinInUser,
} from "../../../redux/authUser/operationsAuthUser";
import { toast } from "react-toastify";
import useModalHandler from "../../../hooks/useModalHandler";

const SignUpAndSignInModal: FC<{ modalType: string }> = ({
  modalType = "SignUp",
}) => {
  const schema = modalType === "SignUp" ? schemaSignup : schemaSignin;
  const { handleCloseModal } = useModalHandler();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    reset,
  } = useForm<FormData>({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit(async ({ username, email, password }) => {
    if (modalType === "SignUp") {
      try {
        await dispatch(signUpUser({ username, email, password }));
        await handleCloseModal();
        reset();
      } catch (error) {
        if (error instanceof Error) {
          toast.error(`${error.message}`);
        }
      }
    } else {
      try {
        await dispatch(sinInUser({ email, password }));
        await handleCloseModal();
        reset();
      } catch (error) {
        if (error instanceof Error) {
          toast.error(`${error.message}`);
        }
      }
    }
  });

  return (
    <StyledSignUpWrapper>
      <ButtonClose />
      <StyledFormSignUpWrapper onSubmit={onSubmit}>
        <StyledFormSignUpTextWrapper>
          <StyledFormSignUpHeading>
            {modalType === "SignUp" ? "Registration" : "Log In"}
          </StyledFormSignUpHeading>
          <StyledFormSignUpDescription>
            {modalType === "SignUp"
              ? "Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information."
              : "Welcome back! Please enter your credentials to access your account and continue your search for a psychologist."}
          </StyledFormSignUpDescription>
        </StyledFormSignUpTextWrapper>

        <StyledFormSignUpInputtWrapper>
          {(modalType === "SignUp" ? inputSignUp : inputSignIn).map(
            (input, index) => (
              <InputAuth
                key={index}
                name={input.name}
                placeholder={input.placeholder}
                register={register}
                errors={errors}
              />
            )
          )}
        </StyledFormSignUpInputtWrapper>

        <StyledFormSignUpButton
          type="submit"
          disabled={!isDirty || !isValid}
          $isDisabled={!isDirty || !isValid}
        >
          {modalType === "SignUp" ? "Sign Up" : "Log In"}
        </StyledFormSignUpButton>
      </StyledFormSignUpWrapper>
    </StyledSignUpWrapper>
  );
};

export default SignUpAndSignInModal;
