import { FieldErrors, UseFormRegister } from "react-hook-form";

export interface NavLinks {
  to: string;
  text: string;
}

export interface IconProps {
  iconName: string;
  width: string;
  height: string;
  fill?: string;
  transform?: string;
  stroke?: string;
}

// export interface FormDataSignUp {
//   username: string;
//   email: string;
//   password: string;
// }

// export interface FormDataSignIn {
//   email: string;
//   password: string;
// }

export interface FormData {
  username?: string;
  email: string;
  password: string;
}

// type FormDataCondition = FormDataSignUp | FormDataSignIn;

export interface InputAuthInter {
  name: string;
  placeholder: string;
  register: UseFormRegister<FormData>;
  errors: FieldErrors;
}

export interface InputsAuthInter {
  name: string;
  placeholder: string;
}

export interface ModalInitialStateInter {
  openModal: boolean;
  modalContent: string;
}

export interface ButtonEyeInter {
  togglePasswordVisibility: () => void;
  passwordVisible: boolean;
}

export interface AuthOptionsInter {
  email: string;
  password: string;
  username?: string;
  modalType: string;
  reset: () => void;
}

export interface AuthUserDataInter {
  name: string;
  email: string;
  token: string;
  id: string;
}
