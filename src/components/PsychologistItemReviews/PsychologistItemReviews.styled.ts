import styled from "styled-components";

export const StyledReviewsWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;
  justify-content: start;
  align-items: start;
  width: 100%;
  margin-top: 34px;
  margin-bottom: 40px;
`;

export const StyledReviewsItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: start;
  align-items: start;
  width: 100%;
`;

export const StyledContainerPsychjlogistRating = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;
  width: max-content;
`;

export const StyledTitl = styled.p`
  border-radius: 100px;
  background: rgba(84, 190, 150, 0.2);
  color: var(--mintGreen);
  font-size: 20px;
  font-weight: var(--medium);
  line-height: 1;
  padding: 12px 15px;
`;

export const StyledContainerNameRating = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: start;
  align-items: start;
  width: max-content;
`;

export const StyledPsyhologistName = styled.p`
  color: var(--deepAnthracite);
  font-size: 16px;
  font-weight: var(--medium);
  line-height: 1.25;
`;

export const StyledContainerRating = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  width: max-content;
`;

export const StyledPsyhologistRating = styled.p`
  color: var(--deepAnthracite);
  font-size: 14px;
  font-weight: var(--medium);
  line-height: 1.25;
`;

export const StyledPsyhologistComent = styled.p`
  color: rgba(25, 26, 21, 0.5);
  font-size: 16px;
  font-weight: var(--regular);
  line-height: 1, 25;
`;

export const StyledAppointmen = styled.button`
  display: inline-flex;
  padding: 14px 32px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 30px;
  background: var(--mintGreen);
  color: var(--silkWhite);
  font-size: 16px;
  font-weight: var(--medium);
  line-height: 1.25;
  letter-spacing: -0.16px;
  transition: var(--transition);
  margin-right: 88px;

  &:hover {
    background: var(--seaGreen);
  }
`;
