import React from "react";
import { Link } from "react-router-dom";

const LoginScreen = () => {
  return (
    <div className="auth__main">
      <div className="auth__box-container">
        <h3 className="auth__title">Login</h3>
        
        <form>
          <input
            type="text"
            placeholder="email"
            name="email"
            className="auth__input"
            autoComplete="off"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="auth__input"
          />
          <button type="submit" className="auth__btn btn-danger btn-block">
            Login
          </button>
          <div>

          <span>Not a member?</span> <Link to="/register" className="link">Sign up now</Link><span> <i class="fas fa-arrow-right"></i></span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
