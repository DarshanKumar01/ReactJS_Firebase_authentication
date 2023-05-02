import React, { useState } from "react";
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import {app} from "../firebase";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';


const auth=getAuth(app);

const SignupPage = () => {

    const [email,setEmail] =useState("");
    const [password,setPassword] =useState("");

    const createUser = () =>{

        createUserWithEmailAndPassword(auth,email,password).then(value=>alert('Success'));

    }

  
return(
    <form>
        <div className="signup-page" style={{ backgroundColor: 'yellow', color: 'black', padding: '10px' , 
        }} >
            <h1 style={{color: "blue", fontSize: "40px"}}>Register Here</h1>
           
            <label for="aa">Email : </label>
            <input id="aa"
            style={{ 
                backgroundColor: 'aquamarine', 
                color: 'black', 
                padding: '05px', 
                border: '' 
              }}
            onChange={(e) => setEmail(e.target.value)}
            type="email" required placeholder="Enter your email address"/> <br/><br/>

            <label for="bb">Password : </label>
            <input id="bb" style={{ 
  backgroundColor: 'aquamarine', 
  color: 'black', 
  padding: '05px', 
  border: '' 
}}
            onChange={(e)=> setPassword(e.target.value)}
            type="password" required placeholder="Enter Only 0-9 numbers"/><br/><br/>

          

            <button onClick={createUser} type="submit" style={{ backgroundColor: "blue", color: "white", padding: "10px", borderRadius: "5px", border: "none" }}>Sign up</button>
            
           
           


            

        </div>
        </form>
    )
}

export default SignupPage;