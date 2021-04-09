import React from 'react';
import './Login.css';
import login from '../images/login.svg';

function Login() {
    return (
        
            <div className="login__container">
            
                    <div className="login__left">
                        <div className="login__header">
                            <h2>HACKULUS</h2>
                        </div>
                        <div className="login__main">
                            <div className="login__svg">
                                    <img src={login}  width={"550px"} height={"550px"}/>
                            </div>
                            <div style={{textAlign:"center"}}>
                                <h2>Your security is our priority</h2>
                                <p>There are many variations of passages of Lorem Ipsum available</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="login__right">
                         <div className="login__head">
                                <h1>Welcome Back</h1>
                                <p>Sign In to your account</p>

                         </div>
                         <div className="login__form">
                                <form>
                                    <h5>Email</h5>
                                    <input  type="text" placeholder="&#xf007;       Enter Username" style={{fontFamily:"Montserrat, FontAwesome"}}/>

                                    <h5>Password</h5>
                                    <input type="password"  placeholder="&#xf023;       Enter Password" style={{fontFamily:"Montserrat, FontAwesome"}}/>

                                    {/* <button type="submit" className="login__loginButton">Login</button> */}
                                </form>
                        </div>
                        <div style={{textAlign:"right",paddingRight:"5%",color:"white",width:"80%"}}>
                            <p style={{fontSize:"small",fontWeight:"500"}}>Forgot Password?</p>
                        </div>
                        <div className="login__button">
                            <button>Login</button>
                        </div>
                        <div style={{textAlign:"center",color:"white",fontWeight:"500"}}>
                            <p>Don't have an account? <a>Sign Up</a></p>
                        </div>


                    </div>
             
            </div>
      
    )
}

export default Login
