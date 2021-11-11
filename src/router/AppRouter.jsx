import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { startChecking } from "../actions/auth";
import LoginScreen from "../components/auth/LoginScreen";
import RegisterScreen from "../components/auth/RegisterScreen";
import CalendarScreen from "../components/calendar/CalendarScreen";

const AppRouter = () => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startChecking())
  }, [dispatch])
  
  return (
    <Router>
      <>
        <Switch>
          <Route path="/login" component={LoginScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/" component={CalendarScreen} exact></Route>
          <Redirect to="/" />   
        </Switch>
      </>
    </Router>
  );
};

export default AppRouter;
