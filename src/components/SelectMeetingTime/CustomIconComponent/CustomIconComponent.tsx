import { FC } from "react";
import Icon from "../../Icon/Icon";
import { StyledIconButton } from "./CustomIconComponent.styled";

interface CustomIconComponentProps {
  onToggleMenu: () => void;
}

const CustomIconComponent: FC<CustomIconComponentProps> = ({
  onToggleMenu,
}) => {
  return (
    <StyledIconButton type="button" onClick={onToggleMenu}>
      {
        <Icon
          width="18px"
          height="18px"
          iconName="icon-clock"
          stroke="var(--deepAnthracite)"
        />
      }
    </StyledIconButton>
  );
};

export default CustomIconComponent;
