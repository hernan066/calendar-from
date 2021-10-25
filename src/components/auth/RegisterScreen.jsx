import React from 'react'
import { Link } from 'react-router-dom'

const RegisterScreen = () => {
    return (
        <div className="auth__main">
        <div className="auth__box-container">
          <h3 className="auth__title">Register</h3>
          
          <form>
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="auth__input"
              autoComplete="off"
            />
            <input
              type="text"
              placeholder="Email"
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
            <input
              type="password"
              placeholder="Repeat password"
              name="rEpassword"
              className="auth__input"
            />
            <button type="submit" className="auth__btn btn-danger btn-block">
              Login
            </button>
            <div>
  
            <span>You are a member?</span> <Link to="/login" className="link">Login now</Link><span> <i class="fas fa-arrow-right"></i></span>
            </div>
          </form>
        </div>
      </div>
    )
}

export default RegisterScreen
