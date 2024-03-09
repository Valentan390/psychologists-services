import { StylesConfig } from "react-select";
import { StyledOptionInter } from "../../helpers/InterfaceData";

export const customStyles: StylesConfig<StyledOptionInter, false> = {
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
