import React from "react";
import Login from '../components/Login'
import NewPassword from "../components/NewPassword";
import Reset from '../components/Reset'
import VerificationCode from '../components/VerificationCode'
import { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar.jsx";

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
    </div>
  )
}



