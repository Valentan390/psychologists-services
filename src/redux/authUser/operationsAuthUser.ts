import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAuth,
  onAuthStateChanged,
  User as FirebaseUser,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { User } from "../../helpers/InterfaceData";
import { toast } from "react-toastify";
import { AppDispatch, RootState } from "../stor";

export const refreshUser = createAsyncThunk<
  User,
  void,
  { dispatch: AppDispatch; state: RootState }
>("auth/refreshUser", async (_, { rejectWithValue }) => {
  const auth = getAuth();
  try {
    const user = await new Promise<FirebaseUser | null>((resolve) => {
      onAuthStateChanged(auth, (user) => {
        resolve(user);
      });
    });

    if (user) {
      const userData: User = {
        email: user.email || "",
        id: user.uid || "",
        token: user.refreshToken || "",
        name: user.displayName || "",
      };
      return userData;
    } else {
      throw new Error("User not found");
    }
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    throw error;
  }
});

export const logOutUser = createAsyncThunk<
  void,
  void,
  { dispatch: AppDispatch; state: RootState }
>("auth/logOutUser", async (_, { rejectWithValue }) => {
  const auth = getAuth();
  try {
    await signOut(auth);
    toast.success("You have successfully logged out");
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
  }
});

interface IsignUpUser {
  email: string;
  password: string;
  username?: string;
}

export const signUpUser = createAsyncThunk<
  User,
  IsignUpUser,
  { rejectValue: string }
>(
  "auth/signUpUser",
  async ({ email, password, username }, { rejectWithValue }) => {
    const auth = getAuth();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (username && auth.currentUser) {
        await updateProfile(auth.currentUser, { displayName: username });
      }

      const user = userCredential.user;
      if (!user) {
        throw new Error("User not found");
      }

      const data: User = {
        email: user.email || "",
        id: user.uid || "",
        token: user.refreshToken || "",
        name: user.displayName || "",
      };
      toast.success(`${username}, you have successfully registered`);
      return data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      throw error;
    }
  }
);

export const sinInUser = createAsyncThunk<
  User,
  IsignUpUser,
  { rejectValue: string }
>("auth/sinInUser", async ({ email, password }, { rejectWithValue }) => {
  const auth = getAuth();
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    if (!user) {
      throw new Error("User not found");
    }

    const data: User = {
      email: user.email || "",
      id: user.uid || "",
      token: user.refreshToken || "",
      name: user.displayName || "",
    };

    return data;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    throw error;
  }
});
