import PsychologistlistItem from "../PsychologistlistItem/PsychologistlistItem";
import {
  StyledPsychologistsButton,
  StyledPsychologistsList,
} from "./PsychologistsList.styled";
import SelectPsychologists from "../SelectPsychologists/SelectPsychologists";
import { useSelector } from "react-redux";
import { Dispatch, FC, SetStateAction } from "react";
import sortPsychologists from "../../redux/psyhologists/psyhologistsSelectors";

interface PsychologistsListProps {
  setCurrentPage: Dispatch<SetStateAction<number>>;
  currentPage: number;
}

const PsychologistsList: FC<PsychologistsListProps> = ({
  setCurrentPage,
  currentPage,
}) => {
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const filterPsychologists = useSelector(sortPsychologists);

  return (
    <>
      <SelectPsychologists />
      <StyledPsychologistsList>
        {filterPsychologists?.map((psychologist, index) => (
          <PsychologistlistItem key={index} psychologist={psychologist} />
        ))}
      </StyledPsychologistsList>
      <StyledPsychologistsButton onClick={handleNextPage}>
        Load more
      </StyledPsychologistsButton>
    </>
  );
};

export default PsychologistsList;
