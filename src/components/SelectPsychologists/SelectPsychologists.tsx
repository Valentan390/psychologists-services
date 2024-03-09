import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";
import { setFilter } from "../../redux/filter/filterSlise";
import { StyledOptionInter } from "../../helpers/InterfaceData";
import { customStyles } from "./SelectCustomStyles";
import { options } from "../../helpers/ComponentData";

const SelectPsychologists = () => {
  const [selectedOption, setSelectedOption] =
    useState<StyledOptionInter | null>(options[0]);

  const dispatch = useDispatch();

  const handleChange = (selected: StyledOptionInter | null) => {
    setSelectedOption(selected);
  };

  useEffect(() => {
    dispatch(setFilter(selectedOption));
  }, [dispatch, selectedOption]);

  return (
    <Select
      options={options}
      styles={customStyles}
      value={selectedOption}
      onChange={handleChange}
    />
  );
};

export default SelectPsychologists;
