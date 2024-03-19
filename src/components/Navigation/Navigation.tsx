import { FC } from "react";
import { StyledNav, StyledNavLink } from "./Navigation.styled";
import { navLinks, navLinksAuth } from "../../helpers/ComponentData";
import useAuthUser from "../../hooks/useAuthUser";

const Navigation: FC = () => {
  const { isAuth } = useAuthUser();
  return (
    <StyledNav>
      {(!isAuth ? navLinksAuth : navLinks).map((link, index) => (
        <StyledNavLink key={index} to={link.to}>
          {link.text}
        </StyledNavLink>
      ))}
    </StyledNav>
  );
};

export default Navigation;
