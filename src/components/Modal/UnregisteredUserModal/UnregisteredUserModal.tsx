import { FC } from "react";
import useModalHandler from "../../../hooks/useModalHandler";
import ButtonClose from "../../Button/ButtonClose/ButtonClose";
import {
  StyledUnregisteredSinInButton,
  StyledUnregisteredSunUpButton,
  StyledUnregisteredTitle,
  StyledUnregisteredWrapper,
} from "./UnregisteredUserModal.styled";

interface UnregisteredUserModalProps {
  typeModal?: string;
}

const UnregisteredUserModal: FC<UnregisteredUserModalProps> = ({
  typeModal,
}) => {
  const { handleCloseModal, handleOpenModal } = useModalHandler();

  const toggleModal = async (modalType: string) => {
    await handleCloseModal();
    await handleOpenModal(modalType);
  };

  return (
    <StyledUnregisteredWrapper>
      <ButtonClose />
      <StyledUnregisteredTitle>
        {typeModal === "Favorites"
          ? "The favorites page is available to registered users. Please register or log into the application using your username."
          : "To be able to add or remove to favorites, register or log into the application using your login."}
      </StyledUnregisteredTitle>
      <StyledUnregisteredSinInButton
        onClick={() => {
          toggleModal("UserSignInModal");
        }}
        type="button"
      >
        Log In
      </StyledUnregisteredSinInButton>
      <StyledUnregisteredSunUpButton
        onClick={() => {
          toggleModal("UserSignUpModal");
        }}
        type="button"
      >
        Registration
      </StyledUnregisteredSunUpButton>
    </StyledUnregisteredWrapper>
  );
};

export default UnregisteredUserModal;
