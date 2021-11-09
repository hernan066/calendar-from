import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { starLogin } from "../../actions/auth";
import { useForm } from "../../hook/useForm";


const LoginScreen = () => {
  
  const  [formLoginValues, handleLoginInputChnage] = useForm({
      lEmail: "coreo@coreo.com",
      lPassword: "123456"
  })  

  const dispatch = useDispatch();

  const { lEmail, lPassword } = formLoginValues;

  const handleLogin = (e) => {
    e.preventDefault();
    //console.log(formLoginValues);
    dispatch(starLogin(lEmail, lPassword));


  }

  
  return (
    <div className="auth__main">
      <div className="auth__box-container">
        <h3 className="auth__title">Login</h3>
        
        <form onSubmit= {handleLogin}>
          <input
            type="text"
            placeholder="email"
            name="lEmail"
            className="auth__input"
            autoComplete="off"
            value={lEmail}
            onChange={handleLoginInputChnage}
            
          />
          <input
            type="password"
            placeholder="Password"
            name="lPassword"
            className="auth__input"
            
            value={lPassword}
            onChange={handleLoginInputChnage}
          />
          <button type="submit" className="auth__btn btn-danger btn-block">
            Login
          </button>
          <div>

          <span>Not a member?</span> <Link to="/register" className="link">Sign up now</Link><span> <i className="fas fa-arrow-right"></i></span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
