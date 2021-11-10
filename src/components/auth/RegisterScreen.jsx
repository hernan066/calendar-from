import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { startRegister } from '../../actions/auth'
import { useForm } from '../../hook/useForm'

const RegisterScreen = () => {
    
  const  [formRegisterValues, handleRegisterInputChnage] = useForm({
    rName: "Hernan",
    rEmail: "coreo1@coreo.com",
    rPassword1: "123456",
    rPassword2: "123456",
})  

  const dispatch = useDispatch();
  
   
    const {rName, rEmail, rPassword1, rPassword2 }= formRegisterValues;

    const handleRegister = (e) => {
      e.preventDefault();
      //console.log(formLoginValues);
      //dispatch(starLogin(lEmail, lPassword));
      if (rPassword1 !== rPassword2){
        return Swal.fire('Error', 'Las contraseñas deben ser iguales', 'error')
      }
      
      console.log('Registrado')
      dispatch(startRegister( rEmail, rPassword1, rName))
    }

  return (
        <div className="auth__main">
        <div className="auth__box-container">
          <h3 className="auth__title">Register</h3>
          
          <form onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Name"
              name="rName"
              className="auth__input"
              autoComplete="off"
              value= {rName}
              onChange={handleRegisterInputChnage}

            />
            <input
              type="text"
              placeholder="Email"
              name="rEmail"
              className="auth__input"
              autoComplete="off"
              value= {rEmail}
              onChange={handleRegisterInputChnage}
            />
            <input
              type="password"
              placeholder="Password"
              name="rPassword1"
              className="auth__input"
              value= {rPassword1}
              onChange={handleRegisterInputChnage}
            />
            <input
              type="password"
              placeholder="Repeat password"
              name="rPassword2"
              className="auth__input"
              value= {rPassword2}
              onChange={handleRegisterInputChnage}
            />
            <button type="submit" className="auth__btn btn-danger btn-block">
              Login
            </button>
            <div>
  
            <span>You are a member?</span> <Link to="/login" className="link">Login now</Link><span> <i className="fas fa-arrow-right"></i></span>
            </div>
          </form>
        </div>
      </div>
    )
}

export default RegisterScreen
