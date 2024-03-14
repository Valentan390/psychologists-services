import { FC, useEffect, useState } from "react";
import PsychologistsList from "../../components/PsychologistsList/PsychologistsList";
import {
  getDatabase,
  ref,
  onValue,
  query,
  // startAt,
  // endAt,
  // limitToLast,
  // equalTo,
  limitToFirst,
} from "firebase/database";
import { useDispatch } from "react-redux";
import { setPsychologists } from "../../redux/psyhologists/psyhologistsSlice";
import { PsychologistInter } from "../../helpers/InterfaceData";
import MainPsychologists from "../../components/MainPsychologists/MainPsychologists";

const PsychologistsPage: FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const psychologistsPerPage = 3;
  const dispatch = useDispatch();

  useEffect(() => {
    const db = getDatabase();
    const postsRef = ref(db, "Psyhologists");

    const startIndex = currentPage * psychologistsPerPage;
    // const endIndex = startIndex + psychologistsPerPage;

    const queryRef = query(
      postsRef,
      limitToFirst(startIndex + psychologistsPerPage)
    );

    onValue(queryRef, (snapshot) => {
      const data = snapshot.val();
      const psychologistsData = data ? Object.values(data) : [];
      dispatch(setPsychologists(psychologistsData as PsychologistInter[]));
    });
  }, [currentPage, psychologistsPerPage, dispatch]);

  return (
    <MainPsychologists>
      <PsychologistsList
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </MainPsychologists>
  );
};

export default PsychologistsPage;
