import { FC, useEffect } from "react";
import PsychologistsList from "../../components/PsychologistsList/PsychologistsList";
import MainPsychologists from "../../components/MainPsychologists/MainPsychologists";
import { useAppDispatch } from "../../hooks/useReduxHooks";
import { fetchUserFavorites } from "../../redux/favorite/operations";

const PsychologistsPage: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchFavorites = () => {
      dispatch(fetchUserFavorites());
    };
    const timer = setTimeout(fetchFavorites, 1000);
    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <MainPsychologists>
      <PsychologistsList />
    </MainPsychologists>
  );
};

export default PsychologistsPage;
