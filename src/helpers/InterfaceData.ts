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

export interface FormDataSignUp {
  username: string;
  email: string;
  password: string;
}

export interface FormDataSignIn {
  email: string;
  password: string;
}

type FormDataCondition = FormDataSignUp | FormDataSignIn;

export interface InputAuthInter {
  name: string;
  placeholder: string;
  register: UseFormRegister<FormDataCondition>;
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
