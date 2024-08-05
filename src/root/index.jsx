import React from "react";
import Sidebar from "../components/Sidebar";
import Analytics from "../components/Analytics";
import LoginPages from "../components/Login pages";

export const Root = () => {

  return (
    <div>
      <LoginPages/>
      <Sidebar/>
      <Analytics/>
    </div>
  )
}



