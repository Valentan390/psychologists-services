import { FC } from "react";
import { StyledNav, StyledNavLink } from "./Navigation.styled";
import { navLinks } from "../../helpers/ComponentData";

const Navigation: FC = () => {
  return (
    <StyledNav>
      {navLinks.map((link, index) => (
        <StyledNavLink key={index} to={link.to}>
          {link.text}
        </StyledNavLink>
      ))}
    </StyledNav>
  );
};

export default Navigation;
