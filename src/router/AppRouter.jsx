import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import LoginScreen from "../components/auth/LoginScreen";
import RegisterScreen from "../components/auth/RegisterScreen";
import CalendarScreen from "../components/calendar/CalendarScreen";

const AppRouter = () => {
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
