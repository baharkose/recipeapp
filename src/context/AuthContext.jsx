import React, { createContext, useContext } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { auth } from "../auth/firebase";

//- 1 create context
export const AuthContext = createContext();

// - create custom hook
export const useAuthContext = () => {
  return useContext(AuthContext);
};

//-2 create provider
const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  // - register işlemleri
  const createUser = async (email, password, displayName) => {
    try {
      //? yeni bir kullanıcı oluşturmak için kullanılan firebase metodu
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential);
      navigate("/");
      toastSuccessNotify("Registered Successfully!");
    } catch (error) {
      console.log(error);
      toastErrorNotify(error.message);
    }
  };

  const signIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigate("/");
      toastSuccessNotify("Logged in successfully!");
    } catch (error) {
      toastErrorNotify(error.message);
    }
  };

  const values = {
    createUser,
    signIn
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
