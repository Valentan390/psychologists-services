import { FC } from "react";
import SignUpAndSignInModal from "../Modal/SignUpAndSignInModal/SignUpAndSignInModal";
import useModalHandler from "../../hooks/useModalHandler";
import MakeAppointmentModal from "../Modal/MakeAppointmentModal/MakeAppointmentModal";

const ModalContent: FC = () => {
  const { modalContent } = useModalHandler();

  switch (modalContent) {
    case "UserSignUpModal":
      return <SignUpAndSignInModal modalType="SignUp" />;
    case "UserSignInModal":
      return <SignUpAndSignInModal modalType="SignIn" />;
    case "MakeAppointment":
      return <MakeAppointmentModal />;
    default:
      return null;
  }
};

export default ModalContent;
