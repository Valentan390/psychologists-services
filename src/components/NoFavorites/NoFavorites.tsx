import picture from "../../images/dasctop/thinking.webp";
import {
  StyledNoFavoritesFoto,
  StyledNoFavoritesText,
  StyledNoFavoritesWrapper,
} from "./NoFavorites.styled";

const NoFavorites = () => {
  return (
    <StyledNoFavoritesWrapper>
      <StyledNoFavoritesFoto src={picture} alt="picture" />
      <StyledNoFavoritesText>
        You haven't added psychologists to your favorites yet. Please add the
        psychologists you like to your favorites on the psychologists page.
      </StyledNoFavoritesText>
    </StyledNoFavoritesWrapper>
  );
};

export default NoFavorites;
