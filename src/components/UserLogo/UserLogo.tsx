import { FC } from "react";
import Icon from "../Icon/Icon";
import {
  StyledLogoButton,
  StyledLogoName,
  StyledLogoUserWrapper,
  StyledLogoWrapper,
} from "./UserLogo.styled";
import useAuthUser from "../../hooks/useAuthUser";
import { useAuth } from "../../hooks/useAuth";

const UserLogo: FC = () => {
  const { name } = useAuthUser();
  const { logOutUser } = useAuth();

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
      <StyledLogoButton type="button" onClick={logOutUser}>
        Log out
      </StyledLogoButton>
    </StyledLogoWrapper>
  );
};

export default UserLogo;
