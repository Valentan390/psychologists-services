import { FC } from "react";
import Icon from "../Icon/Icon";
import {
  StyledLogoButton,
  StyledLogoName,
  StyledLogoUserWrapper,
  StyledLogoWrapper,
} from "./UserLogo.styled";
import useAuthUser from "../../hooks/useAuthUser";
import { useAppDispatch } from "../../hooks/useReduxHooks";
import { removeUser } from "../../redux/authUser/authUserSlice";

const UserLogo: FC = () => {
  const { name } = useAuthUser();
  const dispatch = useAppDispatch();

  const userLogOut = () => {
    dispatch(removeUser());
  };
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
      <StyledLogoButton type="button" onClick={userLogOut}>
        Log out
      </StyledLogoButton>
    </StyledLogoWrapper>
  );
};

export default UserLogo;
