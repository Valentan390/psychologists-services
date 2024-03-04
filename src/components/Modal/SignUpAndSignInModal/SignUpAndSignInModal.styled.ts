import styled from "styled-components";

export const StyledSignUpWrapper = styled.div`
  width: 566px;
  flex-shrink: 0;
  border-radius: 30px;
  background: #fbfbfb;
  padding: 64px;
  position: relative;
`;

export const StyledFormSignUpWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 40px;
  width: 100%;
`;

export const StyledFormSignUpTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 20px;
  width: 100%;
`;

export const StyledFormSignUpHeading = styled.h2`
  color: #191a15;
  font-size: 40px;
  font-weight: var(--medium);
  line-height: 1.2;
  letter-spacing: -0.8px;
`;

export const StyledFormSignUpDescription = styled.p`
  color: rgba(25, 26, 21, 0.5);
  font-size: 16px;
  font-weight: var(--regular);
  line-height: 1.25;
`;

export const StyledFormSignUpInputtWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 20px;
  width: 100%;
`;

export const StyledFormSignUpButton = styled.button<{ $isDisabled?: boolean }>`
  display: flex;
  width: 100%;
  padding: 16px 189px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 30px;
  background: ${(props) =>
    props.$isDisabled ? "var(--gray)" : "var(--mintGreen)"};
  transition: var(--transition);
  color: ${(props) =>
    props.$isDisabled ? "var(--disabledTextColor)" : "var(--silkWhite)"};
  font-size: 16px;
  font-weight: var(--medium);
  line-height: 1.25;
  letter-spacing: -0.16px;
  cursor: ${(props) => (props.$isDisabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.$isDisabled ? "0.5" : "1")};

  &:focus,
  &:hover {
    background: ${(props) =>
      props.$isDisabled ? "var(--gray)" : "var(--seaGreen)"};
  }
`;
