import React from "react";
import { Route, Routes } from "react-router-dom";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";

const SignInSignUp = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/up" element={<SignUp />} />
    </Routes>
  );
};

export default SignInSignUp;
