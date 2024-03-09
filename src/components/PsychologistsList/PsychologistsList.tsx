import PsychologistlistItem from "../PsychologistlistItem/PsychologistlistItem";
import { StyledPsychologistsList } from "./PsychologistsList.styled";
import SelectPsychologists from "../SelectPsychologists/SelectPsychologists";
import { useSelector } from "react-redux";
import { sortPsychologists } from "../../redux/psyhologists/psyhologistsSelectors";
import { Dispatch, FC, SetStateAction } from "react";

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

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const filterPsychologists = useSelector(sortPsychologists);

  return (
    <>
      <SelectPsychologists />
      <StyledPsychologistsList>
        {filterPsychologists?.map((psychologist, index) => (
          <PsychologistlistItem key={index} psychologist={psychologist} />
        ))}
        <button onClick={handlePrevPage} disabled={currentPage === 0}>
          Previous
        </button>
        <button onClick={handleNextPage}>Next</button>
      </StyledPsychologistsList>
    </>
  );
};

export default PsychologistsList;
