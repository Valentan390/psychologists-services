import { FC } from "react";
import Icon from "../Icon/Icon";
import {
  StyledLogoButton,
  StyledLogoName,
  StyledLogoUserWrapper,
  StyledLogoWrapper,
} from "./UserLogo.styled";

const UserLogo: FC = () => {
  const name = "Valentin";
  return (
    <StyledLogoWrapper>
      <StyledLogoUserWrapper>
        <Icon
          width="40px"
          height="40px"
          fill="var(--mintGreen)"
          iconName="icon-mdiUser"
        />
        <StyledLogoName>{name}</StyledLogoName>
      </StyledLogoUserWrapper>
      <StyledLogoButton type="button">Log out</StyledLogoButton>
    </StyledLogoWrapper>
  );
};

export default UserLogo;
