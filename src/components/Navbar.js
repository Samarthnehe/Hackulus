import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">
             <Link to="/">
            <div className="header__logo">
                    
            </div>
            </Link>

            <div className="header__nav">
                
                    <div className="header__options">
                    <Link to="/"> <span>Home</span>  </Link>
                    </div>
              
                    <div className="header__options">
                    <Link to="/about"><span>About</span>    </Link>
                    </div>
     
                    <div className="header__options">
                    <Link to="/help">   <span>Help</span>  </Link>
                    </div>

                    <div className="header__options">
                    <Link to="/login">   <span>Login</span>  </Link>
                    </div>

            </div>
        </div>
    )
}

export default Navbar
