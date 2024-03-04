import { InputsAuthInter, NavLinks } from "./InterfaceData";
import { Variants } from "framer-motion";

export const navLinks: NavLinks[] = [
  { to: "/home", text: "Home" },
  { to: "/psychologists", text: "Psychologists" },
  { to: "/favorites", text: "Favorites" },
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
    transition: { delay: 0, duration: 0.5 },
  },
};
