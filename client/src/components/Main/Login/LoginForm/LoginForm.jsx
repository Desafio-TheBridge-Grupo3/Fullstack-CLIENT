import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../../../context/UserContext"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const LoginForm = () => {

  const { updateUser } = useContext(UserContext);

  const [ logError, setLogError ] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    // const email = data.get("email");
    const email = "julia@gmail.com";

    // const pwd = data.get("password");
    const pwd = "123456";


    if (email && pwd) {
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_SERVER_URL}/login`,
          JSON.stringify({ email, pwd }),
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );
        if (res.data.success === true) {
          updateUser(res.data.user);
          return navigate('/home');
        }
      } catch (error) {
        setLogError("Wrong email or password.");
      }
    } else {
      setLogError('Invalid email or password format.')
    }
  };

  return (
    <Form className="formContainer">
      <h1 className="loginTitle">¡Te damos la bienvenida!</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="loginLabel" id='usuarioLabel'>Usuario</Form.Label>
        <Form.Control type="email" placeholder="palomaocanha@severalenergy.com" className="loginInput"/>
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="loginLabel" id='passwordLabel'>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" className="loginInput"/>
      </Form.Group>
      <Button variant="primary" type="submit" id="ingresar">
        Ingresar
      </Button>
    </Form>
  );
};

export default LoginForm;
