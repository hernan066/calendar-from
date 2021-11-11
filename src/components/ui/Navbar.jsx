import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { starLogout } from '../../actions/auth'

const Navbar = () => {
    
    const {name} = useSelector(state => state.auth)
    const dispatch = useDispatch()
    
    const handleLogout = ()=>{
        dispatch(starLogout());
        console.log('logout')
    }
    
    return (
        <nav className="nav__main">
            <div className="nav__user">
                <h3>Usuario: {name}</h3>
            </div>
            <div className="nav__button">
                <button 
                    className="btn btn-danger"
                    onClick= {handleLogout}
                >Salir
                </button>
            </div>
        </nav>
    )
}

export default Navbar
