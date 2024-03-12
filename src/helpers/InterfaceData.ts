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

export interface FormData {
  username?: string;
  email: string;
  password: string;
}

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
  makeAppointment: { name: string; avatar_url: string };
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

export interface StyledOptionInter {
  value: string;
  label: string;
}

export interface PsychologistInter {
  avatar_url: string;
  name: string;
  rating: number;
  price_per_hour: number;
  experience: string;
  license: string;
  specialization: string;
  initial_consultation: string;
  about: string;
  reviews: [];
}

export interface PsychologistsStateinter {
  psychologists: PsychologistInter[];
}

export interface OptionSelectMeetingTime {
  label: string;
  value: string;
  isDisabled?: boolean;
}

export interface OptionSelectMeetingTime {
  label: string;
  value: string;
  isDisabled?: boolean;
}

export interface SelectMeetingTimeProps {
  onChange: (value: string) => void;
  onBlur: () => void;
  disabled?: boolean;
  name: string;
}

export interface FormDataMakeAppointment {
  userName: string;
  email: string;
  userPhone: string;
  meetingTime: string;
  userComment: string;
}
