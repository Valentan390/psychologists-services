import { StylesConfig } from "react-select";
import { OptionSelectMeetingTime } from "../../helpers/InterfaceData";

export const customStyles: StylesConfig<OptionSelectMeetingTime, false> = {
  container: (provided) => ({
    ...provided,
    width: "calc((100% - 8px) / 2)",
    height: "52px",
  }),

  control: (provided) => ({
    ...provided,
    borderRadius: "12px",
    border: "1px solid rgba(25, 26, 21, 0.10)",
    // background: "#54BE96",
    color: "var(--deepAnthracite)",
    fontFamily: "Inter",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "1.25",
    transition: "var(--transition)",
    padding: "10px 18px",

    input: {
      display: "none",
    },

    svg: {
      color: "var(--deepAnthracite)",
    },

    "&:hover": {
      boxShadow: "0px 3px 10px 0px rgba(0, 0, 0, 0.3)",
    },
  }),

  menu: (provided) => ({
    ...provided,
    marginLeft: "90px",
    width: "60%",
    height: "180px",
    borderRadius: "12px",
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
    width: "max-content",
    padding: "6px 0",
    marginLeft: "auto",
    marginRight: "auto",
    fontFamily: "Inter",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "1.25",

    ...(state.isDisabled && {
      pointerEvents: "none",
    }),

    ...(state.data &&
      state.data.value === "meeting_time_header" && {
        fontFamily: "Inter",
        color: "var(--deepAnthracite)",
        fontSize: "16px",
        fontWeight: "var(--medium)",
        lineHeight: "1.5",
      }),
  }),

  placeholder: (provided) => ({
    ...provided,
    color: "var(--deepAnthracite)",
  }),

  singleValue: (provided) => ({
    ...provided,
    color: "var(--deepAnthracite)",
    fontFamily: "Inter",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "1.25",
  }),

  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),
};
