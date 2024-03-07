import PsychologistsList from "../../components/PsychologistsList/PsychologistsList";
import {
  StyledPsychologistsPageSection,
  StyledPsychologistsPageWrapper,
} from "./PsychologistsPage.styled";

const PsychologistsPage = () => {
  return (
    <main>
      <StyledPsychologistsPageSection>
        <StyledPsychologistsPageWrapper className="container">
          <PsychologistsList />
        </StyledPsychologistsPageWrapper>
      </StyledPsychologistsPageSection>
    </main>
  );
};

export default PsychologistsPage;
