import { useAppSelector } from "./useReduxHooks";

const useAuthUser = () => {
  const { name, email, token, id } = useAppSelector((state) => state.user);
  return { isAuth: !!email, name, email, token, id };
};

export default useAuthUser;
