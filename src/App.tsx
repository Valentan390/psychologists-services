import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/Layout/Layout";
import ModalContainer from "./components/ModalContainer/ModalContainer";
import ModalContent from "./components/ModalContent/ModalContent";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { lazy, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/useReduxHooks";
import { fetchPsychologists } from "./redux/psyhologists/operationsPsychologists";
import {
  selectCurrentPage,
  selectLoadingPsychologist,
} from "./redux/psyhologists/psyhologistsSelectors";
import LoaderHourglass from "./components/LoaderHourglass/LoaderHourglass";
import { refreshUser } from "./redux/authUser/operationsAuthUser";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const PsychologistsPage = lazy(
  () => import("./pages/PsychologistsPage/PsychologistsPage")
);
const FavoritesPage = lazy(() => import("./pages/FavoritesPage/FavoritesPage"));

const App = () => {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector(selectCurrentPage);
  const isLoadingPsychologist = useAppSelector(selectLoadingPsychologist);

  useEffect(() => {
    dispatch(refreshUser());
    dispatch(fetchPsychologists({ currentPage }));
  }, [dispatch, currentPage]);

  return (
    <>
      {isLoadingPsychologist ? (
        <LoaderHourglass />
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/psychologists" element={<PsychologistsPage />} />
            <Route
              path="/favorites"
              element={
                <PrivateRoute
                  redirectTo="/psychologists"
                  component={FavoritesPage}
                />
              }
            />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}

      <ModalContainer>
        <ModalContent />
      </ModalContainer>

      <ToastContainer position="top-center" autoClose={5000} />
    </>
  );
};

export default App;
