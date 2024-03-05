import styled from "styled-components";

interface StyledInputProps {
  $error?: boolean;
}

export const StyledLabel = styled.label`
  position: relative;
  width: 100%;
`;

export const StyledInput = styled.input<StyledInputProps>`
  display: flex;
  padding: 16px 18px;
  justify-content: center;
  align-items: center;
  gap: 18px;
  border-radius: 12px;
  border: 1px solid
    ${(props) => (props.$error ? "red" : "rgba(25, 26, 21, 0.1)")};
  width: 100%;
  color: ${(props) => (props.$error ? "red" : "var(--deepAnthracite)")};
  font-size: 16px;
  font-weight: var(--regular);
  line-height: 1.25;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &::placeholder {
    color: ${(props) => (props.$error ? "red" : "var(--deepAnthracite)")};
  }

  &:hover {
    border-color: ${(props) =>
      props.$error ? "red" : "rgba(25, 26, 21, 0.3)"};
    background-color: ${(props) =>
      props.$error ? "transparent" : "transparent"};
    box-shadow: ${(props) =>
      props.$error ? "none" : "0 0 10px rgba(0, 0, 0, 0.3)"};
  }

  &:focus {
    outline: none;
    border-color: ${(props) => (props.$error ? "red" : "var(--seafoamGreen)")};
    box-shadow: ${(props) =>
      props.$error
        ? "0 0 0 3px rgba(255, 0, 0, 0.3)"
        : "0 0 10px rgba(0, 0, 0, 0.3)"};
  }
`;

export const StyledError = styled.p`
  position: absolute;
  left: 0;
  bottom: -18px;
  color: var(--red);
  font-size: 10px;
  font-weight: var(--regular);
  line-height: 1.1;
`;
