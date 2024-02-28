// import { useAuth } from "../../hooks/userAuth.js";
import { ComponentType, FC } from "react";
import { Navigate } from "react-router-dom";

interface RestrictedRouteProps {
  component: ComponentType;
  redirectTo?: string;
}

export const RestrictedRoute: FC<RestrictedRouteProps> = ({
  component: Component,
  redirectTo = "/",
}) => {
  //   const { isLoggedIn } = useAuth();
  const isLoggedIn = false;

  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};
