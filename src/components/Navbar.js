import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import InfoIcon from '@material-ui/icons/Info';
import HelpIcon from '@material-ui/icons/Help';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';

function Navbar() {
    return (
        <div className="navbar">
             <Link to="/">
            <div className="header__logo">
                    <h2>HACKULUS</h2>
            </div>
            </Link>

            <div className="header__nav">
                
                    <div className="header__options">
                    <Link to="/"><HomeIcon/> <span>Home</span>  </Link>
                    </div>
              
                    <div className="header__options">
                    <Link to="/about"><InfoIcon/><span>About</span>    </Link>
                    </div>
     
                    <div className="header__options">
                    <Link to="/help"><HelpIcon/>   <span>Help</span>  </Link>
                    </div>

                    <div className="header__options">
                    <Link to="/signup">  <PersonIcon/> <span>SignUp</span>  </Link>
                    </div>

            </div>
        </div>
    )
}

export default Navbar
