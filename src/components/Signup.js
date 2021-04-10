import React, { useEffect, useState } from 'react';
import './Signup.css';
import signup from '../images/signup.svg';
import axios from 'axios';
import {Link,useHistory} from 'react-router-dom';
import zxcvbn from 'zxcvbn';



function Signup() {
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState('');
    const history=useHistory();
    useEffect(()=>{
        var strength = {
            0: "Worst",
            1: "Bad",
            2: "Weak",
            3: "Good",
            4: "Strong"
          }

          var password = document.getElementById('password');
var meter = document.getElementById('password-strength-meter');
var text = document.getElementById('password-strength-text');

password.addEventListener('input', function() {
  var val = password.value;
  var result = zxcvbn(val);

  // Update the password strength meter
  meter.value = result.score;

  // Update the text indicator
  console.log(val);
  console.log(result.score)
  if (val !== "") {
    text.innerHTML = "Strength: " + strength[result.score]; 
  } else {
    text.innerHTML = "";
  }
});
    },[password])
    

    const handleSubmit=async(name,email,password,e)=>{
        e.preventDefault();
        const response =await axios.post(`https://api-hackulus.herokuapp.com/api/user/create?name=${name}&email=${email}&password=${password}`);
        const answer=(response.data.data)
        console.log(answer);
        history.push('/features');


    }


    return (
        <div className="signup__container">
            
        <div className="signup__left">
        <div className="signup__head">
                    <h1>Hello There!</h1>
                    <p>Create a new account here</p>

             </div>
             <div className="signup__form">
                    <form>
                        <h5>Username</h5>
                        <input  onChange={e=>setName(e.target.value)}  type="text" placeholder="&#xf007;       Enter Username" style={{fontFamily:"Montserrat, FontAwesome"}}/>

                        <h5>Email</h5>
                        <input  onChange={e=>setEmail(e.target.value)}  type="email" placeholder="&#xf0e0;       Enter Email" style={{fontFamily:"Montserrat, FontAwesome"}}/>

                        <h5>Password</h5>
                        <input onChange={e=>setPassword(e.target.value)} type="password" id="password" placeholder="&#xf023;       Enter Password" style={{fontFamily:"Montserrat, FontAwesome"}}/>

                        <meter max="4" id="password-strength-meter"></meter>        
                        <p id="password-strength-text"></p>

                        
                    </form>
            </div>
     
            <div className="signup__button">
                <button onClick={(e)=>handleSubmit(name,email,password,e)}>Create Account</button>
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
