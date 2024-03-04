import styled, { keyframes } from "styled-components";

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
`;

export const StyledButtonClose = styled.button`
  padding: 0;
  width: 32px;
  height: 32px;
  position: absolute;
  top: 20px;
  right: 20px;
  transition: transform 0.3s ease-in-out;
  transform-origin: center;

  &:hover {
    animation: ${rotateAnimation} 0.3s forwards;
  }
`;
