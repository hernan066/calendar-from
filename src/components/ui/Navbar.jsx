import React from 'react'

const Navbar = () => {
    return (
        <nav className="nav__main">
            <div className="nav__user">
                <h3>Hernan Moneta</h3>
            </div>
            <div className="nav__button">
                <button className="btn btn-danger">Salir</button>
            </div>
        </nav>
    )
}

export default Navbar
