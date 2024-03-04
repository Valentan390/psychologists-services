import useModalHandler from "../../../hooks/useModalHandler";
import Icon from "../../Icon/Icon";
import { StyledButtonClose } from "./ButtonClose.styled";

const ButtonClose = () => {
  const { handleCloseModal } = useModalHandler();
  return (
    <StyledButtonClose onClick={handleCloseModal}>
      <Icon
        width="32px"
        height="32px"
        iconName="icon-x"
        stroke="var(--deepAnthracite)"
      />
    </StyledButtonClose>
  );
};

export default ButtonClose;
