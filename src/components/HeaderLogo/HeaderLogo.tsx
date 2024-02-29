import { Link } from "react-router-dom";
import { StyledHeaderLogo, StyledHederLogoSpan } from "./HeaderLogo.styled";

const HeaderLogo = () => {
  return (
    <Link to={"/home"}>
      <StyledHeaderLogo>
        psychologists.
        <StyledHederLogoSpan>services</StyledHederLogoSpan>
      </StyledHeaderLogo>
    </Link>
  );
};

export default HeaderLogo;
