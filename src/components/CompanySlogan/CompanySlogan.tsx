import { FC } from "react";
import Icon from "../Icon/Icon";
import {
  StyledLink,
  StyledText,
  StyledTitle,
  StyledTitleSpan,
  StyledWrapper,
} from "./CompanySlogan.styled";

const CompanySlogan: FC = () => {
  return (
    <StyledWrapper>
      <StyledTitle>
        The road to the <StyledTitleSpan>depths</StyledTitleSpan> of the human
        soul
      </StyledTitle>
      <StyledText>
        We help you to reveal your potential, overcome challenges and find a
        guide in your own life with the help of our experienced psychologists.
      </StyledText>
      <StyledLink to={"/psychologists"}>
        Get started
        <Icon width="18px" height="18px" iconName="icon-Arrow16" />
      </StyledLink>
    </StyledWrapper>
  );
};

export default CompanySlogan;
