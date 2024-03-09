import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
// import { RestrictedRoute } from "./components/RestrictedRoute/RestrictedRoute";
import HomePage from "./pages/HomePage/HomePage";
import PsychologistsPage from "./pages/PsychologistsPage/PsychologistsPage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import ModalContainer from "./components/ModalContainer/ModalContainer";
import ModalContent from "./components/ModalContent/ModalContent";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/psychologists" element={<PsychologistsPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          {/* <Route
            index
            element={
              <RestrictedRoute redirectTo="/home" component={HomePage} />
            }
          /> */}
        </Route>
      </Routes>

      <ModalContainer>
        <ModalContent />
      </ModalContainer>
    </>
  );
};

export default App;
