import React, { useState } from 'react';
import './Textdec.css';
import axios from 'axios';

// https://documenter.getpostman.com/view/10047714/TzCV2PmZ

function Textdec() {

    const [text,setText]=useState("");
    const[decrypt,setDecrypt]=useState("");

    const handleClick=async(text,e)=>{
        e.preventDefault();
        console.log(text);
        setDecrypt("My name is atharva");
        const response =await axios.get(`https://api-hackulus.herokuapp.com/api/decrypt?text=${text}`);
          const answer=(response.data.data)
          console.log(answer)
          
    }
        
    console.log(decrypt)
    

  


    return (
        <div className="textdec">
            <h1>Text Decryption</h1>
            <div className="textdec__body">
            <div className="textdec__form">
                <form>
                 <h4>Enter Encrypted Text</h4>
                 <input  type="text" onChange={e=>{setText(e.target.value);console.log(text)}} />

                <div className="button">
                <button onClick={(e)=>handleClick(text,e)} className="textdec__button">DECRYPT TEXT</button>
                </div>

                 <h4 style={{color:"red"}}>Decrypted Text</h4>
                <textarea rows="8" cols="70"  value={decrypt}  style={{backgroundColor:"var(--back"}}  ></textarea>

                            
                 </form>
            </div>
            <div className="text__output">

            </div>
            </div>

        </div>
    )
}

export default Textdec
