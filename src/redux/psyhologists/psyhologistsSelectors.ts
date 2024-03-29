import { RootState } from "../stor";
import { createSelector } from "@reduxjs/toolkit";

export const selectPsychologists = (state: RootState) =>
  state.psychologists.psychologists;

export const selectCurrentPage = (state: RootState) =>
  state.psychologists.currentPage;

export const selectLoadingPsychologist = (state: RootState) =>
  state.psychologists.isLoadingPsychologist;

export const selectFilterValue = (state: RootState) =>
  state.filter.selectFilter;

const sortPsychologists = createSelector(
  [selectPsychologists, selectFilterValue],
  (psychologists, selectValue) =>
    [...psychologists].sort((a, b) => {
      const lastNameA = a.name.split(" ").pop() || "";
      const lastNameB = b.name.split(" ").pop() || "";
      switch (selectValue) {
        case "A to Z":
          return lastNameA.toLowerCase().localeCompare(lastNameB.toLowerCase());
        case "Z to A":
          return lastNameB.toLowerCase().localeCompare(lastNameA.toLowerCase());
        case "Less than 10$":
          return a.price_per_hour - b.price_per_hour;
        case "Greater than 10$":
          return b.price_per_hour - a.price_per_hour;
        case "Not popular":
          return a.rating - b.rating;
        case "Popular":
          return b.rating - a.rating;
        case "Show all":
          return 0;
        default:
          return 0;
      }
    })
);

export default sortPsychologists;
