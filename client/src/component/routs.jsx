import React from "react";
import { Route, Routes as Switch, Navigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { getToken } from "../services/tokenService";
import Main from "./main";
import Login from "./LoginPage/login";
import Personal from "./PersonalCabinet/personal";

export const Routes = () => {
  const select = useSelector(getToken());
  console.log("select");
  console.log(select);
  debugger;
  if (select) {
    return (
      <Switch>
        <Route path="/" element={<Main />}></Route>
        <Route path="/login" element={<Navigate to="/" replace />} />
      </Switch>
    );
  } else {
    return (
      <Switch>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<Navigate to="/login" replace />} />
                <Route path="/personalpage" element={<Personal />}></Route>
      </Switch>
    );
  }
};
