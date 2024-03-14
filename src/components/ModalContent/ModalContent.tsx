import { FC } from "react";
import SignUpAndSignInModal from "../Modal/SignUpAndSignInModal/SignUpAndSignInModal";
import useModalHandler from "../../hooks/useModalHandler";
import MakeAppointmentModal from "../Modal/MakeAppointmentModal/MakeAppointmentModal";
import UnregisteredUserModal from "../Modal/UnregisteredUserModal/UnregisteredUserModal";

const ModalContent: FC = () => {
  const { modalContent } = useModalHandler();

  switch (modalContent) {
    case "UserSignUpModal":
      return <SignUpAndSignInModal modalType="SignUp" />;
    case "UserSignInModal":
      return <SignUpAndSignInModal modalType="SignIn" />;
    case "MakeAppointment":
      return <MakeAppointmentModal />;
    case "UnregisteredUserModal":
      return <UnregisteredUserModal />;
    default:
      return null;
  }
};

export default ModalContent;
