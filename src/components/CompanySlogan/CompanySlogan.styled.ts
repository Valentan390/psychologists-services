import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledWrapper = styled.div`
  max-width: 595px;
`;

export const StyledTitle = styled.h1`
  color: var(--deepAnthracite);
  font-size: 80px;
  font-weight: 600;
  line-height: 1.02;
  letter-spacing: -1.6px;
  margin-bottom: 20px;
`;

export const StyledTitleSpan = styled.span`
  color: var(--mintGreen);
  font-size: 80px;
  font-weight: 600;
  font-style: italic;
  line-height: 1.02;
  letter-spacing: -1.6px;
`;

export const StyledText = styled.p`
  color: var(--deepAnthracite);
  font-size: 18px;
  font-weight: var(--medium);
  line-height: 1.33;
  letter-spacing: -0.36px;
  margin-bottom: 40px;
  max-width: 510px;
`;

export const StyledLink = styled(Link)`
  display: flex;
  padding: 18px 50px;
  justify-content: center;
  align-items: center;
  gap: 18px;
  border-radius: 30px;
  background: var(--mintGreen);
  color: var(--silkWhite);
  font-size: 20px;
  font-weight: var(--medium);
  line-height: 1.2;
  letter-spacing: -0.2px;
  transition: var(--transition);
  width: max-content;

  &:hover,
  &:focus {
    background: var(--seaGreen);
  }
`;
