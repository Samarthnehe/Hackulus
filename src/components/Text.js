import React, { useState } from 'react';
import './Text.css';
import axios from 'axios';

// https://documenter.getpostman.com/view/10047714/TzCV2PmZ

function Text() {

    const [text,setText]=useState("");
    const[encrypt,setEncrypt]=useState("");

    const handleClick=async(text,e)=>{
        e.preventDefault();
        console.log(text);
        const response =await axios.get(`https://api-hackulus.herokuapp.com/api/encrypt?text=${text}`);
          const answer=(response.data.data)
          console.log(answer)
          setEncrypt(answer);
    }
        
    console.log(encrypt)
    

  


    return (
        <div className="text">
            <h1>Text Encryption</h1>
            <div className="text__body">
            <div className="text__form">
                <form>
                 <h4>Enter Text</h4>
                <input  type="text" onChange={e=>{setText(e.target.value);console.log(text)}} />

                <div className="button">
                <button onClick={(e)=>handleClick(text,e)} className="text__button">ENCRYPT TEXT</button>
                </div>

                 <h4 style={{color:"var(--third)"}}>Encrypted Text</h4>
                <textarea rows="10" cols="70"  value={encrypt}  style={{backgroundColor:"var(--back"}}  ></textarea>

                            
                 </form>
            </div>
            <div className="text__output">

            </div>
            </div>

        </div>
    )
}

export default Text
