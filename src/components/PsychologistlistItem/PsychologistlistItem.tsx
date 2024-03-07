import { FC } from "react";
import Icon from "../Icon/Icon";
import {
  StyledAbout,
  StyledBuutonHeart,
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

interface PsychologistlistItemInter {
  avatar_url: string;
  name: string;
  rating: number;
  price_per_hour: number;
  experience: string;
  license: string;
  specialization: string;
  initial_consultation: string;
  about: string;
}

const PsychologistlistItem: FC<PsychologistlistItemInter> = ({
  avatar_url,
  name,
  rating,
  price_per_hour,
  experience,
  license,
  specialization,
  initial_consultation,
  about,
}) => {
  return (
    <StyledWrapper>
      <StyledContainerFoto>
        <StyledImg src={avatar_url} alt={name} />
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
                <StyledRating>Rating:{rating}</StyledRating>
              </StyledContainerRating>
              <Icon
                iconName="icon-Vector3"
                width="2px"
                height="16px"
                stroke="rgba(25, 26, 21, 0.20)"
              />
              <StyledRating>
                Price / 1 hour:{" "}
                <StyledPriceSpan>{price_per_hour}$</StyledPriceSpan>
              </StyledRating>
            </StyledContainerPrice>

            <StyledBuutonHeart>
              <Icon
                width="26px"
                height="26px"
                iconName="icon-heartNormal"
                stroke="var(--deepAnthracite)"
              />
            </StyledBuutonHeart>
          </StyledContainerHeart>
        </StyledContainerPsychologist>

        <StyledName>{name}</StyledName>

        <StyledContainerDiv>
          <StyledContainerP>
            Experience:
            <StyledContainerSpan>{experience}</StyledContainerSpan>
          </StyledContainerP>
          <StyledContainerP>
            License:
            <StyledContainerSpan>{license}</StyledContainerSpan>
          </StyledContainerP>
        </StyledContainerDiv>

        <StyledContainerDiv>
          <StyledContainerP>
            Specialization:
            <StyledContainerSpan>{specialization}</StyledContainerSpan>
          </StyledContainerP>
          <StyledContainerP>
            Initial_consultation:
            <StyledContainerSpan>{initial_consultation}</StyledContainerSpan>
          </StyledContainerP>
        </StyledContainerDiv>

        <StyledAbout>{about}</StyledAbout>
      </StyledContainerDescription>
    </StyledWrapper>
  );
};

export default PsychologistlistItem;
