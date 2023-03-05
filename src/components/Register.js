import React, {useState} from "react";
import {auth} from './../firebase.js'
import { createUserWithEmailAndPassword } from "firebase/auth";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Register = () => {
  const [signUpSuccess, setSignUpSuccess] = useState(null);
  const [showRegisterForm, setShowRegisterForm] = useState(true);

  const handleRegisterSubmission = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSignUpSuccess(`You've successfully registered as ${userCredential.user.email}!`)
        setShowRegisterForm(false)
      })
      .catch((error) => {
        setSignUpSuccess(`There was a problem registering: ${error.message}`)
      })
    
    e.target.password.value = null;
  }
  
  let regForm = null;
  if (showRegisterForm) {
    regForm = 
    <Form onSubmit={handleRegisterSubmission}>
          <Form.Group className="mb-3" controlId="formBasicEmailReg">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name='email' placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPasswordReg">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name='password' placeholder="Password" />
          </Form.Group>
          
          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
  }

  return(
    // TODO: add syling for signin error
    <div className="login-container">
      <h2>Register</h2>
      {signUpSuccess}
      {regForm}
    </div>
  )
}

export default Register  