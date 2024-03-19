import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";
import { useAppDispatch } from "./useReduxHooks";
import { removeUser, setUser } from "../redux/authUser/authUserSlice";
import { AuthOptionsInter } from "../helpers/InterfaceData";
import useModalHandler from "./useModalHandler";
import { toast } from "react-toastify";
import { useState } from "react";

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const { handleCloseModal } = useModalHandler();
  const [isLoading, setIsLoading] = useState(false);

  const handleAuth = async ({
    email,
    password,
    username,
    modalType,
    reset,
  }: AuthOptionsInter) => {
    setIsLoading(true);
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
        toast.success(`${username}, you have successfully registered`);
      } else {
        userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        toast.success(
          `${userCredential.user.displayName}, You have successfully logged in`
        );
      }

      const user = userCredential.user;

      await dispatch(
        setUser({
          email: user.email || "",
          id: user.uid || "",
          token: user.refreshToken || "",
          name: user.displayName || "",
        })
      );

      await handleCloseModal();

      reset();
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`${error.message}`);
      }
    } finally {
      await handleCloseModal();
      reset();
      setIsLoading(false);
    }
  };

  const logOutUser = async () => {
    setIsLoading(true);
    const auth = getAuth();
    try {
      await signOut(auth);
      await dispatch(removeUser());
      toast.success("You have successfully logged out");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`${error.message}`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const refresUser = async () => {
    setIsLoading(true);
    const auth = getAuth();

    try {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          dispatch(
            setUser({
              email: user.email || "",
              id: user.uid || "",
              token: user.refreshToken || "",
              name: user.displayName || "",
            })
          );
        } else {
          return;
        }
      });
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`${error.message}`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { handleAuth, logOutUser, refresUser, isLoading };
};
