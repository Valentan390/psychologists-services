import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useAppDispatch } from "./useReduxHooks";
import { setUser } from "../redux/authUser/authUserSlice";
import { AuthOptionsInter } from "../helpers/InterfaceData";

export const useAuth = () => {
  const dispatch = useAppDispatch();

  const handleAuth = async ({
    email,
    password,
    username,
    modalType,
    reset,
  }: AuthOptionsInter) => {
    const auth = getAuth();
    try {
      let userCredential;

      if (modalType === "SignUp") {
        userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        if (username && auth.currentUser) {
          await updateProfile(auth.currentUser, { displayName: username });
        }
      } else {
        userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
      }

      const user = userCredential.user;

      dispatch(
        setUser({
          email: user.email || "",
          id: user.uid || "",
          token: user.refreshToken || "",
          name: user.displayName || "",
        })
      );

      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return { handleAuth };
};
