import React from "react";
import { useSelector } from "react-redux";
import { getToken } from "../services/tokenService";
import { Route, Routes as Switch, Navigate } from "react-router-dom";
import Main from "../component/Main/main";
import Login from "../component/LoginPage/login";


export const Routes = () => {
  // const select = localStorage.getItem('token');

  const select = useSelector(getToken());
  console.log(getToken());
  console.log(select);

  // console.log(select);

  if (select) {
    return (
      <Switch>
        <Route path="/" element={<Main />}></Route>
        {/* <Route path="/login" element={<Navigate to="/" replace />} /> */}
      </Switch>
    );
  } else {
    return (
      <Switch>
        <Route path="/login" element={<Login />}></Route>
        {/*<Route*/}
        {/*  path='*'*/}
        {/*  element={<Navigate to='/login' replace />}*/}
        {/*/>*/}
      </Switch>
    );
  }
};
