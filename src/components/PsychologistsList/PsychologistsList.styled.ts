import styled from "styled-components";

export const StyledPsychologistsList = styled.ul`
  display: flex;
  gap: 32px;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 100%;
  margin-top: 32px;
`;

export const StyledPsychologistsButton = styled.button`
  display: block;
  padding: 14px 48px;
  border-radius: 30px;
  background: var(--mintGreen);
  color: var(--silkWhite);
  font-size: 16px;
  font-weight: var(--medium);
  line-height: 1.25;
  letter-spacing: -0.16px;
  margin-top: 28px;
  margin-left: auto;
  margin-right: auto;
`;
