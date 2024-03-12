import Select from "react-select";
import { FC, useState } from "react";
import { customStyles } from "./SelectMeetingTime";
import CustomIconComponent from "./CustomIconComponent/CustomIconComponent";
import {
  OptionSelectMeetingTime,
  SelectMeetingTimeProps,
} from "../../helpers/InterfaceData";
import { optionsSelectMeetingTime } from "../../helpers/ComponentData";

const SelectMeetingTime: FC<SelectMeetingTimeProps> = ({
  onChange,
  onBlur,
  disabled,
  name,
}) => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu: () => void = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleChange = (selectedOption: OptionSelectMeetingTime | null) => {
    if (selectedOption !== null) {
      onChange(selectedOption.value);
      setMenuOpen(false);
    }
  };

  return (
    <>
      <Select
        onBlur={onBlur}
        name={name}
        isDisabled={disabled}
        options={optionsSelectMeetingTime}
        placeholder={"00 : 00"}
        styles={customStyles}
        menuIsOpen={isMenuOpen}
        onMenuOpen={toggleMenu}
        onMenuClose={toggleMenu}
        onChange={handleChange}
        components={{
          DropdownIndicator: () => (
            <CustomIconComponent onToggleMenu={toggleMenu} />
          ),
        }}
      />
    </>
  );
};

export default SelectMeetingTime;
