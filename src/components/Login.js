import React,{useState} from 'react';
import './Login.css';
import {Link,useHistory} from 'react-router-dom';
import axios from 'axios';
import login from '../images/login.svg';

function Login() {

    const history=useHistory();
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[otp,setOtp]=useState("");

    const handleLogin=async(email,password,e)=>{
        e.preventDefault();
        const response =await axios.post(`https://api-hackulus.herokuapp.com/api/user/login?email=${email}&password=${password}`);
        const answer=(response)
        console.log(answer.status);
        console.log(answer.status==200);
        if(answer.status==200){
            // history.push('/features');
            var butt = document.getElementById("login__otp");
            butt.style.display="block";

        }
        if(answer.status==401){
            var butt = document.getElementById("Login__otp");
            butt.style.display="block";
        }
       

    }

    const handleOtp=async(email,e)=>{
        e.preventDefault();
        const response =await axios.post(`https://api-hackulus.herokuapp.com/api/send/mail?email=${email}`);
        const answer=(response)
        console.log(answer);
       


    }
    const handleOtpSubmit=async()=>{
        
    }

    return (
            

            <div className="login__container">
            
                    <div className="login__left">
                        <div className="login__header">
                           <Link to="/"><h1>HACKULUS</h1></Link> 
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
                                    <input  onChange={e=>setEmail(e.target.value)}  type="email" placeholder="&#xf007;       Enter Email" style={{fontFamily:"Montserrat, FontAwesome"}}/>

                                    <h5>Password</h5>
                                    <input  onChange={e=>setPassword(e.target.value)}   type="password"  placeholder="&#xf023;       Enter Password" style={{fontFamily:"Montserrat, FontAwesome"}}/>

                                    {/* <button type="submit" className="login__loginButton">Login</button> */}
                                </form>
                        </div>
                        <div style={{textAlign:"right",paddingRight:"5%",color:"white",width:"80%"}}>
                            <p style={{fontSize:"small",fontWeight:"500"}}>Forgot Password?</p>
                        </div>
                        <div className="login__button">
                            <button id="login" onClick={(e)=>handleLogin(email,password,e)}>Login</button>
                        </div>
                        <div style={{textAlign:"center",color:"white",fontWeight:"500"}}>
                            <p>Don't have an account? <a style={{textDecoration:"none",color:"white"}} href="/signup">Sign Up</a></p>
                        </div>

                        <div className="login__otp">
                      
                                <form>
                                    <h5>OTP</h5>
                                    <input  onChange={e=>setOtp(e.target.value)}  type="text" placeholder="&#xf084;       Enter OTP" style={{fontFamily:"Montserrat, FontAwesome"}}/>

                                   

                                    {/* <button type="submit" className="login__loginButton">Login</button> */}
                                </form>
                            <div className="buttons">
                                <button id ="otp"  onClick={(e)=>handleOtp(email,e)}>Request OTP</button>
                                <button id ="otp"  onClick={(e)=>handleOtpSubmit(otp,e)}>Submit</button>

                            </div>
                       
                        </div>



                    </div>
             
            </div>
      
    )
}

export default Login
