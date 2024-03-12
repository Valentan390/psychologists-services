import { FC } from "react";
import Icon from "../../Icon/Icon";

interface CustomIconComponentProps {
  onToggleMenu: () => void;
}

const CustomIconComponent: FC<CustomIconComponentProps> = ({
  onToggleMenu,
}) => {
  return (
    <button type="button" onClick={onToggleMenu}>
      {
        <Icon
          width="18px"
          height="18px"
          iconName="icon-clock"
          stroke="var(--deepAnthracite)"
        />
      }
    </button>
  );
};

export default CustomIconComponent;
