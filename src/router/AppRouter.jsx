import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { startChecking } from "../actions/auth";
import LoadinScreen from "../components/auth/LoadingScreen";
import LoginScreen from "../components/auth/LoginScreen";
import RegisterScreen from "../components/auth/RegisterScreen";
import CalendarScreen from "../components/calendar/CalendarScreen";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

const AppRouter = () => {
  
  const dispatch = useDispatch();
  const {checking, uid} = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(startChecking())
  }, [dispatch]);

  
  
  if (checking){
    return <LoadinScreen />
  }
  
  return (
    <Router>
      <>
        <Switch>
          <PublicRoute 
            exact
            path="/login" 
            component={LoginScreen}
            isAuthenticated={!!uid}
            //uid es string, !uid = false, !!uid= true, uid si es null, !!uid false
          />
          <PublicRoute 
            exact
            path="/register" 
            component={RegisterScreen}
            isAuthenticated={!!uid}
          />
            
          <PrivateRoute 
            exact
            path="/" 
            component={CalendarScreen} 
            isAuthenticated={!!uid}
          />
          <Redirect to="/" />   
        </Switch>
      </>
    </Router>
  );
};

export default AppRouter;
