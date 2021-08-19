import React, { useState,useEffect } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import { useAppContext } from "../libs/contextLib";
import { useHistory } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory()
  const { userHasAuthenticated } = useAppContext();


  useEffect(() => {
    console.log('Monted First Time.....')
  },[]);

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    localStorage.setItem('user',JSON.stringify({'email':email, 'password':password}))
    userHasAuthenticated(true);
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <ControlLabel>Email</ControlLabel>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </FormGroup>
        <Button
        onClick = {()=>{
          console.log('history')
          history.push('/NotFound')
        }}
         block bsSize="large" disabled={!validateForm()} 
         type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}