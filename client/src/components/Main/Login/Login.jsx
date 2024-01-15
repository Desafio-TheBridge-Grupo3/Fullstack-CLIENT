import React, { useState } from "react";
import LoginForm from "./LoginForm";
import LoginImage from "./LoginImage";

const Login = () => {

  const [error, setError] = useState('');

  return (
    <>
    <main className="loginContainer">
    <LoginImage />
    <LoginForm />
    </main>
    </>
  );
};

export default Login;
