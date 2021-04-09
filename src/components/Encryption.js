import React, { useEffect } from 'react';
import './Encryption.css'
import './main.js';
import {Link} from 'react-router-dom';

function Encryption() {

    useEffect(()=>{
        var modal = document.getElementById("myModal");

 
        var btn = document.getElementById("myBtn");

        var span = document.getElementsByClassName("close")[0];

            btn.onclick = function() {
                modal.style.display = "block";
              }
      
 
              span.onclick = function() {
                modal.style.display = "none";
              }
        

        window.onclick = function(event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        }
    },[])

    return (

        <div className="encrypt">
            <h1>Random Encryption Technology</h1>
            <div className="en__body">
                <h3>What it does?</h3>
                <p>There is no such thing called a PERFECT encryption algortihm, as every algorithm has some or the other loophole that could be identified by hacker. So what we do is select 10 of the best encrypting algorithm and whenever a user wishes to encrypt some data, the system will randomly choose any algorithm. Even if the hacker decodes the algrithm the other data remains safe </p>
            </div>
            <div className="en__button">
                <button id="myBtn" style={{backgroundColor:"var(--third)",color:"black"}}>ENCRYPT</button>
                <button style={{backgroundColor:"black",color:"white"}}>DECRYPT</button>
            </div>
            <div id="myModal" class="modal">


                <div class="modal-content">
                <div class="modal-header">
                    <span class="close">&times;</span>
                    <h2>What do you want to ENCRYPT?</h2>
                </div>
                <div class="modal-body">
                        <div className="en__button">
                        <Link to="/encrypt_text"><button style={{backgroundColor:"var(--third)",color:"black"}}>TEXT</button></Link>
                        <Link to="/encrypt_file"><button style={{backgroundColor:"black",color:"white"}}>FILE</button></Link>
                    </div>
                </div>
             
                </div>

            </div>
        </div>
    )
}

export default Encryption
