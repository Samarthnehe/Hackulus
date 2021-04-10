import React from 'react';
import './Home.css';
import {Link} from'react-router-dom';
import Mysvg from '../images/wallpaper.svg';


function Home() {
    return (
        <div className="home">
            <div className="home__left">
                <h1>CryptO-Roulette</h1>
                <p>Generally it's really hard to find and develop Application Level Security Algorithms for providing application level security so that it can be used for defense mechanisms.</p>
                <Link to="/login"><button>Login</button></Link>
            </div>
            <div className="home__right">
                <img src={Mysvg} width={"700px"} height={"610px"}/>
            </div>

        </div>
    )
}

export default Home
