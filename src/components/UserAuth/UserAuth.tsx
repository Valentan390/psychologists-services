import { FC } from "react";
import {
  StyledAutLogin,
  StyledAuthSignup,
  StyledAuthWrapper,
} from "./UserAuth.styled";
import useModalHandler from "../../hooks/useModalHandler";

const UserAuth: FC = () => {
  const { handleOpenModal } = useModalHandler();

  return (
    <StyledAuthWrapper>
      <StyledAutLogin
        onClick={() => handleOpenModal("UserSignInModal")}
        type="button"
      >
        Log In
      </StyledAutLogin>
      <StyledAuthSignup
        onClick={() => handleOpenModal("UserSignUpModal")}
        type="button"
      >
        Registration
      </StyledAuthSignup>
    </StyledAuthWrapper>
  );
};

export default UserAuth;
