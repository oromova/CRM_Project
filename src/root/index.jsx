import React from "react";
import Login from '../components/Login'
import NewPassword from "../components/NewPassword";
import Reset from '../components/Reset'
import VerificationCode from '../components/VerificationCode'
import Sidebar from "../components/Sidebar";
import Analytics from "../components/Analytics";

export const Root = () => {

  return (
    <div>
    <Login />
    <hr />
    <Reset />
    <hr />
    <NewPassword />
    <hr />
    <VerificationCode />
    
    <Sidebar/>
    <Analytics/>
    </div>
  )
}



