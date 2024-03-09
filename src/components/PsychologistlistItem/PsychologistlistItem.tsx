import { FC, useState } from "react";
import Icon from "../Icon/Icon";
import {
  StyledAbout,
  StyledBuutonHeart,
  StyledBuutonReadMore,
  StyledContainerDescription,
  StyledContainerDiv,
  StyledContainerFoto,
  StyledContainerHeart,
  StyledContainerP,
  StyledContainerPrice,
  StyledContainerPsychologist,
  StyledContainerRating,
  StyledContainerSpan,
  StyledImg,
  StyledName,
  StyledPriceSpan,
  StyledPsychologist,
  StyledRating,
  StyledSvgContainer,
  StyledWrapper,
} from "./PsychologistlistItem.styled";
import PsychologistItemReviews from "../PsychologistItemReviews/PsychologistItemReviews";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorite } from "../../redux/favorite/favoriteSelectors";
import {
  addFavorites,
  removeFavorites,
} from "../../redux/favorite/favoriteSlise";

interface Psychologist {
  avatar_url: string;
  name: string;
  rating: number;
  price_per_hour: number;
  experience: string;
  license: string;
  specialization: string;
  initial_consultation: string;
  about: string;
  reviews: [];
}

interface PsychologistlistItemProps {
  psychologist: Psychologist;
}

const PsychologistlistItem: FC<PsychologistlistItemProps> = ({
  psychologist,
}) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const favorites = useSelector(selectFavorite);
  const dispatch = useDispatch();

  const isFavorite = favorites.some(
    (favorite) => favorite.name === psychologist.name
  );

  const toggleFavorite = (psychologist: Psychologist) => {
    if (isFavorite) {
      dispatch(removeFavorites(psychologist));
    } else {
      dispatch(addFavorites(psychologist));
    }
  };

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <StyledWrapper>
      <StyledContainerFoto>
        <StyledImg src={psychologist.avatar_url} alt={psychologist.name} />
        <StyledSvgContainer>
          <Icon iconName="icon-Group82" width="14px" height="14px" />
        </StyledSvgContainer>
      </StyledContainerFoto>

      <StyledContainerDescription>
        <StyledContainerPsychologist>
          <StyledPsychologist>Psychologist</StyledPsychologist>
          <StyledContainerHeart>
            <StyledContainerPrice>
              <StyledContainerRating>
                <Icon width="16px" height="16px" iconName="icon-Star2" />
                <StyledRating>Rating:{psychologist.rating}</StyledRating>
              </StyledContainerRating>
              <Icon
                iconName="icon-Vector3"
                width="2px"
                height="16px"
                stroke="rgba(25, 26, 21, 0.20)"
              />
              <StyledRating>
                Price / 1 hour:{" "}
                <StyledPriceSpan>
                  {psychologist.price_per_hour}$
                </StyledPriceSpan>
              </StyledRating>
            </StyledContainerPrice>

            <StyledBuutonHeart onClick={() => toggleFavorite(psychologist)}>
              <Icon
                width="26px"
                height="26px"
                iconName="icon-heartNormal"
                stroke={isFavorite ? "" : "var(--deepAnthracite)"}
                fill={isFavorite ? "var(--mintGreen)" : "var(--silkWhite)"}
              />
            </StyledBuutonHeart>
          </StyledContainerHeart>
        </StyledContainerPsychologist>

        <StyledName>{psychologist.name}</StyledName>

        <StyledContainerDiv>
          <StyledContainerP>
            Experience:
            <StyledContainerSpan>{psychologist.experience}</StyledContainerSpan>
          </StyledContainerP>
          <StyledContainerP>
            License:
            <StyledContainerSpan>{psychologist.license}</StyledContainerSpan>
          </StyledContainerP>
        </StyledContainerDiv>

        <StyledContainerDiv>
          <StyledContainerP>
            Specialization:
            <StyledContainerSpan>
              {psychologist.specialization}
            </StyledContainerSpan>
          </StyledContainerP>
          <StyledContainerP>
            Initial_consultation:
            <StyledContainerSpan>
              {psychologist.initial_consultation}
            </StyledContainerSpan>
          </StyledContainerP>
        </StyledContainerDiv>

        <StyledAbout>{psychologist.about}</StyledAbout>

        {showFullDescription ? (
          <PsychologistItemReviews reviews={psychologist.reviews} />
        ) : null}

        <StyledBuutonReadMore type="button" onClick={toggleDescription}>
          {showFullDescription ? "Read less" : "Read more"}
        </StyledBuutonReadMore>
      </StyledContainerDescription>
    </StyledWrapper>
  );
};

export default PsychologistlistItem;
