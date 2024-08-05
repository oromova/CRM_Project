import React from "react"
import Login from "./Login";
import NewPassword from "./NewPassword";
import Reset from "./Reset";
import VerificationCode from "./VerificationCode";

const LoginPages = () =>{
return(
  <div>
    <Login/>
    <Reset/>
    <VerificationCode/>
    <NewPassword/>
  </div>
)
}

export default LoginPages