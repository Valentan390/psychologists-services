import { FC } from "react";
import { useModal } from "../../hooks/userModal";
import SignUpAndSignInModal from "../Modal/SignUpAndSignInModal/SignUpAndSignInModal";

const ModalContent: FC = () => {
  const { modalContent } = useModal();

  switch (modalContent) {
    case "UserSignUpModal":
      return <SignUpAndSignInModal modalType="SignUp" />;
    case "UserSignInModal":
      return <SignUpAndSignInModal modalType="SignIn" />;
    default:
      return null;
  }
};

export default ModalContent;
