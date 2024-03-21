import { FC } from "react";
import Icon from "../Icon/Icon";
import {
  StyledLogoButton,
  StyledLogoName,
  StyledLogoUserWrapper,
  StyledLogoWrapper,
} from "./UserLogo.styled";
import useAuthUser from "../../hooks/useAuthUser";
import useModalHandler from "../../hooks/useModalHandler";

const UserLogo: FC = () => {
  const { name } = useAuthUser();
  const { handleOpenModal } = useModalHandler();

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
      <StyledLogoButton
        type="button"
        onClick={() => handleOpenModal("LogoutModal")}
      >
        Log out
      </StyledLogoButton>
    </StyledLogoWrapper>
  );
};

export default UserLogo;
