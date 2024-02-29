import styled from "styled-components";

export const StyledAuthWrapper = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  width: max-content;
`;

export const StyledAutLogin = styled.button`
  display: flex;
  padding: 14px 39px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 30px;
  border: 1px solid rgba(25, 26, 21, 0.2);
  color: var(--deepAnthracite);
  font-size: 16px;
  font-weight: var(--medium);
  line-height: 1.25;
  letter-spacing: -0.16px;
  transition: var(--transition);

  &:hover,
  &:focus {
    background: var(--seafoamGreen);
  }
`;

export const StyledAuthSignup = styled.button`
  display: flex;
  padding: 14px 40px;
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

  &:hover,
  &:focus {
    background: var(--seaGreen);
  }
`;
