import { FC } from "react";
import Icon from "../Icon/Icon";
import {
  StyledAppointmen,
  StyledContainerNameRating,
  StyledContainerPsychjlogistRating,
  StyledContainerRating,
  StyledPsyhologistComent,
  StyledPsyhologistName,
  StyledPsyhologistRating,
  StyledReviewsItem,
  StyledReviewsWrapper,
  StyledTitl,
} from "./PsychologistItemReviews.styled";
import useModalHandler from "../../hooks/useModalHandler";

interface PsychologistItemReviewsProps {
  reviews: [];
  psychologist?: { name: string; avatar_url: string };
}

interface ReviewInter {
  reviewer: string;
  rating: number;
  comment: string;
}

const PsychologistItemReviews: FC<PsychologistItemReviewsProps> = ({
  reviews,
  psychologist,
}) => {
  const { handleOpenModal } = useModalHandler();

  return (
    <>
      <StyledReviewsWrapper>
        {reviews.map((review: ReviewInter, index) => (
          <StyledReviewsItem key={index}>
            <StyledContainerPsychjlogistRating>
              <StyledTitl>{review.reviewer[0]}</StyledTitl>
              <StyledContainerNameRating>
                <StyledPsyhologistName>{review.reviewer}</StyledPsyhologistName>
                <StyledContainerRating>
                  <Icon width="16px" height="16px" iconName="icon-Star2" />
                  <StyledPsyhologistRating>
                    {review.rating}
                  </StyledPsyhologistRating>
                </StyledContainerRating>
              </StyledContainerNameRating>
            </StyledContainerPsychjlogistRating>
            <StyledPsyhologistComent>{review.comment}</StyledPsyhologistComent>
          </StyledReviewsItem>
        ))}
      </StyledReviewsWrapper>
      <StyledAppointmen
        onClick={() => handleOpenModal("MakeAppointment", psychologist)}
      >
        Make an appointment
      </StyledAppointmen>
    </>
  );
};

export default PsychologistItemReviews;
