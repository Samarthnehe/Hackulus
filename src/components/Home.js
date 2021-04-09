import React from 'react';
import './Home.css';
import {Link} from'react-router-dom';
import Mysvg from '../images/wallpaper.svg';


function Home() {
    return (
        <div className="home">
            <div className="home__left">
                <h1>Cyber Security</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Link to="/login"><button>Login</button></Link>
            </div>
            <div className="home__right">
                <img src={Mysvg} width={"700px"} height={"610px"}/>
            </div>

        </div>
    )
}

export default Home
