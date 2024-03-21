import { FC } from "react";
import ButtonClose from "../../Button/ButtonClose/ButtonClose";
import useModalHandler from "../../../hooks/useModalHandler";
import { useAppDispatch } from "../../../hooks/useReduxHooks";
import { logOutUser } from "../../../redux/authUser/operationsAuthUser";
import {
  StyledButtonLogoutModalContainer,
  StyledLogoutModalCansel,
  StyledLogoutModalLogOut,
  StyledLogoutModalTitle,
  StyledLogoutModalWrapper,
} from "./LogoutModal.styled";
import { toast } from "react-toastify";

const LogoutModal: FC = () => {
  const dispatch = useAppDispatch();
  const { handleCloseModal } = useModalHandler();

  const toggleLogoutModal = async () => {
    try {
      await dispatch(logOutUser());
      await handleCloseModal();
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`${error.message}`);
      }
    }
  };
  return (
    <StyledLogoutModalWrapper>
      <ButtonClose />
      <StyledLogoutModalTitle>
        Do you really want to leave?
      </StyledLogoutModalTitle>
      <StyledButtonLogoutModalContainer>
        <StyledLogoutModalCansel type="button" onClick={handleCloseModal}>
          Cancel
        </StyledLogoutModalCansel>
        <StyledLogoutModalLogOut type="button" onClick={toggleLogoutModal}>
          Log out
        </StyledLogoutModalLogOut>
      </StyledButtonLogoutModalContainer>
    </StyledLogoutModalWrapper>
  );
};

export default LogoutModal;
