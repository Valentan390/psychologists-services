import { useState } from "react";
import Select from "react-select";
import { StylesConfig } from "react-select";

interface OptionInter {
  value: string;
  label: string;
}

const options: OptionInter[] = [
  { value: "A to Z", label: "A to Z" },
  { value: "Z to A", label: "Z to A" },
  { value: "Less than 10$", label: "Less than 10$" },
  { value: "Greater than 10$", label: "Greater than 10$" },
  { value: "Popular", label: "Popular" },
  { value: "Not popular", label: "Not popular" },
  { value: "Show all", label: "Show all" },
];

const customStyles: StylesConfig = {
  container: (provided) => ({
    ...provided,
    width: "226px",
    height: "48px",
  }),

  control: (provided) => ({
    ...provided,
    borderRadius: "14px",
    background: "#54BE96",
    fontFamily: "Inter",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "1.25",
    transition: "var(--transition)",

    input: {
      display: "none",
    },

    svg: {
      color: "var(--silkWhite)",
    },

    "&:hover": {
      background: "var(--seaGreen)",
      boxShadow: "0px 3px 10px 0px rgba(0, 0, 0, 0.3)",
    },
  }),

  menu: (provided) => ({
    ...provided,
    borderRadius: "14px",
    background: "#FFF",
    boxShadow: "0px 20px 69px 0px rgba(0, 0, 0, 0.3)",
  }),

  option: (provided, state) => ({
    ...provided,
    backgroundColor: "none",
    color: state.isSelected
      ? "var(--deepAnthracite)"
      : "rgba(25, 26, 21, 0.30)",
    "&:hover": {
      color: "var(--deepAnthracite)",
    },
  }),

  placeholder: (provided) => ({
    ...provided,
    color: "rgba(25, 26, 21, 0.30)",
  }),

  singleValue: (provided) => ({
    ...provided,
    color: "var(--silkWhite)",
    fontFamily: "Inter",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "1.25",
  }),

  dropdownIndicator: (provided, state) => ({
    ...provided,
    transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : "rotate(0deg)",
  }),

  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),
};

const firstOption = options[0];

const SelectPsychologists = () => {
  const [selectedOption, setSelectedOption] = useState<OptionInter>(options[0]);

  console.log(selectedOption);

  const handleChange = (selectedOption: any) => {
    setSelectedOption(selectedOption);
  };
  return (
    <Select
      options={options}
      styles={customStyles}
      placeholder={firstOption.label}
      value={selectedOption}
      onChange={handleChange}
    />
  );
};

export default SelectPsychologists;
