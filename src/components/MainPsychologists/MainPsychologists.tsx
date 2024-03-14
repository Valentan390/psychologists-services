import { FC, ReactNode } from "react";
import {
  StyledMainPsychologists,
  StyledMainPsychologistsContainer,
} from "./MainPsychologists.styled";

interface MainPsychologistsProps {
  children: ReactNode;
}

const MainPsychologists: FC<MainPsychologistsProps> = ({ children }) => {
  return (
    <main>
      <StyledMainPsychologists>
        <StyledMainPsychologistsContainer className="container">
          {children}
        </StyledMainPsychologistsContainer>
      </StyledMainPsychologists>
    </main>
  );
};

export default MainPsychologists;
