import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNav = styled.nav`
  display: flex;
  gap: 40px;
  width: max-content;
`;

export const StyledNavLink = styled(NavLink)`
  color: var(--deepAnthracite);
  font-size: 16px;
  font-weight: var(--regular);
  line-height: 1.25;
  letter-spacing: -0.16px;
  position: relative;

  &.active::before {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 2px;
    background-color: var(--mintGreen);
    border-radius: 2px;
    animation: expandLine 0.3s linear forwards;
  }

  @keyframes expandLine {
    from {
      width: 2px;
    }
    to {
      width: 100%;
    }
  }
`;
