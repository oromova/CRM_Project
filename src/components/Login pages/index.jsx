import React from "react"
import Login from "./Login";
import NewPassword from "./NewPassword";
import Reset from "./Reset";
import VerificationCode from "./VerificationCode";
import { Button } from "./Login/style";
import { useState } from "react";

const LoginPages = () =>{
  const [state, setState] = useState("Login")

  const onToggle = (name) => setState(name)
  
return(
  <div>
    <div style={{display: 'flex', }}>
      <Button active={state === 'Login'} onClick={() => onToggle('Login')} style={{marginRight: '10px'}}>Login</Button>
      <Button active={state === 'Reset'} onClick={() => onToggle('Reset')} style={{marginRight: '10px'}}>Reset</Button>
      <Button active={state === 'Verification'} onClick={() => onToggle('Verification')} style={{marginRight: '10px'}}>Verification</Button>
      <Button active={state === 'NewPassword'} onClick={() => onToggle('NewPassword')} >NewPassword</Button>
    </div>
   {state === "Login" && <Login/>}
   {state === "Reset" && <Reset/>}
   {state === "Verification" && <VerificationCode/>}
   {state === "NewPassword" &&  <NewPassword/> }
  </div>
)
}

export default LoginPages