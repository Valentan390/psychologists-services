import { useSelector } from "react-redux";
import SelectPsychologists from "../SelectPsychologists/SelectPsychologists";
import { sortFavoritasArray } from "../../redux/favorite/favoriteSelectors";
import PsychologistlistItem from "../PsychologistlistItem/PsychologistlistItem";
import { StyledFavoritList } from "./FavoritesList.styled";

const FavoritesList = () => {
  const filterFavoritesPsychologists = useSelector(sortFavoritasArray);
  console.log(filterFavoritesPsychologists);

  return (
    <>
      <SelectPsychologists typeSelect="Favorites" />
      <StyledFavoritList>
        {filterFavoritesPsychologists.map((favorite, index) => (
          <PsychologistlistItem key={index} psychologist={favorite} />
        ))}
      </StyledFavoritList>
    </>
  );
};

export default FavoritesList;
