import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const LoginForm = () => {
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
