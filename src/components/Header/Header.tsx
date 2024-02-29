import { FC } from "react";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import Navigation from "../Navigation/Navigation";
import UserAuth from "../UserAuth/UserAuth";
import UserLogo from "../UserLogo/UserLogo";
import { StyledHeader, StyledHeaderWrapper } from "./Header.styled";

const Header: FC = () => {
  const isLoggedIn = false;
  return (
    <StyledHeader>
      <StyledHeaderWrapper className="container">
        <HeaderLogo />
        <Navigation />
        {isLoggedIn ? <UserLogo /> : <UserAuth />}
      </StyledHeaderWrapper>
    </StyledHeader>
  );
};

export default Header;
