import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import PsychologistsPage from "./pages/PsychologistsPage/PsychologistsPage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import ModalContainer from "./components/ModalContainer/ModalContainer";
import ModalContent from "./components/ModalContent/ModalContent";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { useEffect } from "react";
import { useAppDispatch } from "./hooks/useReduxHooks";
import { fetchPsychologists } from "./redux/psyhologists/operationsPsychologists";
import { useSelector } from "react-redux";
import {
  selectCurrentPage,
  selectLoadingPsychologist,
} from "./redux/psyhologists/psyhologistsSelectors";
import LoaderHourglass from "./components/LoaderHourglass/LoaderHourglass";
import { refreshUser } from "./redux/authUser/operationsAuthUser";

const App = () => {
  const dispatch = useAppDispatch();
  const currentPage = useSelector(selectCurrentPage);
  const isLoadingPsychologist = useSelector(selectLoadingPsychologist);

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
