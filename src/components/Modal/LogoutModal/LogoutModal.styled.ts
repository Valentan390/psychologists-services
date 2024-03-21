import styled from "styled-components";

export const StyledLogoutModalWrapper = styled.div`
  width: 600px;
  border-radius: 30px;
  background: var(--silkWhite);
  padding: 64px;
  position: relative;
`;

export const StyledLogoutModalTitle = styled.h3`
  color: var(--deepAnthracite);
  font-size: 40px;
  font-weight: var(--medium);
  line-height: 1.2;
  letter-spacing: -0.8px;
  margin-bottom: 20px;
  text-align: center;
`;

export const StyledButtonLogoutModalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const StyledLogoutModalCansel = styled.button`
  display: flex;
  padding: 14px 68px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 30px;
  background: var(--mintGreen);
  color: var(--silkWhite);
  text-align: center;
  font-size: 16px;
  font-weight: var(--medium);
  line-height: 1.25;
  letter-spacing: -0.16px;
  transition: var(--transition);
  //   min-width: 100%;

  &:hover,
  &:focus {
    background: var(--seaGreen);
  }
`;

export const StyledLogoutModalLogOut = styled.button`
  display: flex;
  padding: 14px 68px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 30px;
  background: var(--red);
  color: var(--silkWhite);
  text-align: center;
  font-size: 16px;
  font-weight: var(--medium);
  line-height: 1.25;
  letter-spacing: -0.16px;
  transition: var(--transition);
  //   min-width: 100%;

  &:hover,
  &:focus {
    background: var(--darkRed);
  }
`;
