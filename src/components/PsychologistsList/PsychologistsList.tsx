import PsychologistlistItem from "../PsychologistlistItem/PsychologistlistItem";
import {
  StyledPsychologistsButton,
  StyledPsychologistsList,
} from "./PsychologistsList.styled";
import SelectPsychologists from "../SelectPsychologists/SelectPsychologists";
import { useSelector } from "react-redux";
import { FC } from "react";
import sortPsychologists from "../../redux/psyhologists/psyhologistsSelectors";
import { setCurrentPage } from "../../redux/psyhologists/psyhologistsSlice";
import { useAppDispatch } from "../../hooks/useReduxHooks";

const PsychologistsList: FC = () => {
  const dispatch = useAppDispatch();
  const filterPsychologists = useSelector(sortPsychologists);

  return (
    <>
      <SelectPsychologists />
      <StyledPsychologistsList>
        {filterPsychologists?.map((psychologist, index) => (
          <PsychologistlistItem key={index} psychologist={psychologist} />
        ))}
      </StyledPsychologistsList>
      {filterPsychologists.length < 29 && (
        <StyledPsychologistsButton
          onClick={() => {
            dispatch(setCurrentPage());
          }}
        >
          Load more
        </StyledPsychologistsButton>
      )}
    </>
  );
};

export default PsychologistsList;
