import { FC } from "react";
import {
  StyledAutLogin,
  StyledAuthSignup,
  StyledAuthWrapper,
} from "./UserAuth.styled";

const UserAuth: FC = () => {
  return (
    <StyledAuthWrapper>
      <StyledAutLogin type="button">Log In</StyledAutLogin>
      <StyledAuthSignup type="button">Registration</StyledAuthSignup>
    </StyledAuthWrapper>
  );
};

export default UserAuth;
