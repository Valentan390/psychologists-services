import styled from "styled-components";

export const StyledUnregisteredWrapper = styled.div`
  width: 600px;
  border-radius: 30px;
  background: var(--silkWhite);
  padding: 64px;
  position: relative;
`;

export const StyledUnregisteredTitle = styled.h3`
  color: var(--deepAnthracite);
  font-size: 40px;
  font-weight: var(--medium);
  line-height: 1.2;
  letter-spacing: -0.8px;
  margin-bottom: 20px;
  text-align: center;
`;

export const StyledUnregisteredSunUpButton = styled.button`
  display: flex;
  width: 100%;
  padding: 23px 217px;
  margin-top: 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 30px;
  background: var(--mintGreen);
  color: var(--silkWhite);
  font-size: 16px;
  font-weight: var(--medium);
  line-height: 1.25px;
  letter-spacing: -0.16px;
  transition: var(--transition);

  &:hover {
    background: var(--seaGreen);
  }
`;

export const StyledUnregisteredSinInButton = styled.button`
  display: flex;
  width: 100%;
  padding: 12px 199px;
  margin-top: 24px;
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

// export const StyledUnregistered = styled.``;
// export const StyledUnregistered = styled.``;
// export const StyledUnregistered = styled.``;
// export const StyledUnregistered = styled.``;
