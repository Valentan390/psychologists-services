import { ComponentType, FC } from "react";
import { Navigate } from "react-router-dom";
import useAuthUser from "../../hooks/useAuthUser";

interface RestrictedRouteProps {
  component: ComponentType;
  redirectTo?: string;
}

export const RestrictedRoute: FC<RestrictedRouteProps> = ({
  component: Component,
  redirectTo = "/",
}) => {
  const { isAuth } = useAuthUser();

  return isAuth ? <Navigate to={redirectTo} /> : <Component />;
};
