import { RootState } from "../stor";
import { createSelector } from "@reduxjs/toolkit";

export const selectFavorite = (state: RootState) =>
  state.favorite.favoritesArray;

export const selectFavoriteFilterValue = (state: RootState) =>
  state.filter.selectFavoriteFilter;

export const sortFavoritasArray = createSelector(
  [selectFavorite, selectFavoriteFilterValue],
  (favorites, selectValue) =>
    [...favorites].sort((a, b) => {
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
