import { FC } from "react";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import Navigation from "../Navigation/Navigation";
import UserAuth from "../UserAuth/UserAuth";
import UserLogo from "../UserLogo/UserLogo";
import { StyledHeader, StyledHeaderWrapper } from "./Header.styled";
import useAuthUser from "../../hooks/useAuthUser";

const Header: FC = () => {
  const { isAuth } = useAuthUser();
  return (
    <StyledHeader>
      <StyledHeaderWrapper className="container">
        <HeaderLogo />
        <Navigation />
        {isAuth ? <UserLogo /> : <UserAuth />}
      </StyledHeaderWrapper>
    </StyledHeader>
  );
};

export default Header;
