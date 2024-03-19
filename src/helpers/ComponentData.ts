import {
  InputsAuthInter,
  NavLinks,
  OptionSelectMeetingTime,
  StyledOptionInter,
} from "./InterfaceData";
import { Variants } from "framer-motion";

export const navLinks: NavLinks[] = [
  { to: "/home", text: "Home" },
  { to: "/psychologists", text: "Psychologists" },
  { to: "/favorites", text: "Favorites" },
];
export const navLinksAuth: NavLinks[] = [
  { to: "/home", text: "Home" },
  { to: "/psychologists", text: "Psychologists" },
];

export const inputSignUp: InputsAuthInter[] = [
  { name: "username", placeholder: "Name" },
  { name: "email", placeholder: "Email" },
  { name: "password", placeholder: "Password" },
];

export const inputSignIn: InputsAuthInter[] = [
  { name: "email", placeholder: "Email" },
  { name: "password", placeholder: "Password" },
];

export const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0,
      duration: 0.8,
    },
  },
  exit: {
    opacity: 0,
    transition: { delay: 0, duration: 0.8 },
  },
};

export const options: StyledOptionInter[] = [
  { value: "A to Z", label: "A to Z" },
  { value: "Z to A", label: "Z to A" },
  { value: "Less than 10$", label: "Less than 10$" },
  { value: "Greater than 10$", label: "Greater than 10$" },
  { value: "Popular", label: "Popular" },
  { value: "Not popular", label: "Not popular" },
  { value: "Show all", label: "Show all" },
];

export const optionsSelectMeetingTime: OptionSelectMeetingTime[] = [
  { label: "Meeting time", value: "meeting_time_header", isDisabled: true },
  { value: "09 : 00", label: "09 : 00" },
  { value: "09 : 30", label: "09 : 30" },
  { value: "10 : 00", label: "10 : 00" },
  { value: "10 : 30", label: "10 : 30" },
];
