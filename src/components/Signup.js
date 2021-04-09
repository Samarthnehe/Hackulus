import React from 'react';
import './Signup.css';
import signup from '../images/signup.svg';
import {Link} from 'react-router-dom';


function Signup() {
    return (
        <div className="signup__container">
            
        <div className="signup__left">
        <div className="signup__head">
                    <h1>Hello There!</h1>
                    <p>Create a new account here</p>

             </div>
             <div className="signup__form">
                    <form>
                        <h5>Email</h5>
                        <input  type="text" placeholder="&#xf007;       Enter Username" style={{fontFamily:"Montserrat, FontAwesome"}}/>

                        <h5>Email</h5>
                        <input  type="email" placeholder="&#xf0e0;       Enter Email" style={{fontFamily:"Montserrat, FontAwesome"}}/>

                        <h5>Password</h5>
                        <input type="password"  placeholder="&#xf023;       Enter Password" style={{fontFamily:"Montserrat, FontAwesome"}}/>

                        <h5>Confirm Password</h5>
                        <input type="password"  placeholder="&#xf023;       Enter Password" style={{fontFamily:"Montserrat, FontAwesome"}}/>

                        
                    </form>
            </div>
     
            <div className="signup__button">
                <button>Create Account</button>
            </div>
            <div style={{textAlign:"center",color:"white",fontWeight:"500"}}>
                <p>Already have an account? <a style={{textDecoration:"none",color:"white"}}  href="/login">Login</a></p>
            </div>
           
            
        </div>
        <div className="signup__right">
        <div className="signup__header">
               <Link to="/"><h1>HACKULUS</h1></Link> 
            </div>
            <div className="signup__main">
                <div className="signup__svg">
                        <img src={signup}  width={"550px"} height={"550px"}/>
                </div>
                <div style={{textAlign:"center"}}>
                    <h2>Your security is our priority</h2>
                    <p>There are many variations of passages of Lorem Ipsum available</p>
                </div>
            </div>


        </div>
 
</div>
    )
}

export default Signup
