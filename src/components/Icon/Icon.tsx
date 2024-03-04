import { FC } from "react";
import sprite from "../../images/svg/sprite.svg";
import { IconProps } from "../../helpers/InterfaceData";

const Icon: FC<IconProps> = ({
  iconName,
  width,
  height,
  fill = "var(--silkWhite)",
  transform,
  stroke,
}) => {
  return (
    <svg style={{ transform, width, height, fill, stroke }}>
      <use href={`${sprite}#${iconName}`} />
    </svg>
  );
};

export default Icon;
