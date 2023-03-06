import React, {useState} from "react";
import {auth} from './../firebase.js'
import { signInWithEmailAndPassword } from "firebase/auth";
import { PropTypes } from "prop-types";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Login = ({onRegister}) => {
  const [signInSuccess, setSignInSuccess] = useState(null);
  const [showForm, setShowForm] = useState(true);

  const handleLoginSubmission = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSignInSuccess(`You've successfully signed in as ${userCredential.user.email}!`)
        setShowForm(false);
      })
      .catch((error) => {
        setSignInSuccess(`There was a problem signing in: ${error.message}`)
      })
    
    e.target.password.value = null;
  }

  let form = null;
  if (showForm) {
    form = 
    <Form onSubmit={handleLoginSubmission}>
        <Form.Group className="mb-3" controlId="formBasicEmailSignIn">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPasswordSignIn">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" />
        </Form.Group>
        
        <Button variant="outline-dark" type="submit">
          Login
        </Button>
        {' '}
        <Button variant="outline-dark" onClick={onRegister}>
          Register
        </Button>

      </Form>
  } 

  return(
    // TODO: add syling for signin error
    <div className="login-container">
    <h2>Login</h2>
    {signInSuccess}
    {form}
    </div>
  )
}

Login.propTypes = {
  onRegister: PropTypes.func
}

export default Login  