import { ComponentType, FC } from "react";
import { Navigate } from "react-router-dom";
import useAuthUser from "../../hooks/useAuthUser";
// import { useAuth } from "../../hooks/userAuth.js";

interface PrivateRouteProps {
  component: ComponentType;
  redirectTo: string;
}

export const PrivateRoute: FC<PrivateRouteProps> = ({
  component: Component,
  redirectTo = "/",
}) => {
  const { isAuth } = useAuthUser();
  // const { handleOpenModal } = useModalHandler();

  // useEffect(() => {
  //   if (!isAuth) {
  //     handleOpenModal("UnregisteredUserModalFavorites");
  //   }
  // }, [isAuth, handleOpenModal]);

  return !isAuth ? <Navigate to={redirectTo} /> : <Component />;
};
