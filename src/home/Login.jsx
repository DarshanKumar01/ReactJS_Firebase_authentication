import React, {useState} from "react";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import{app} from "../firebase"



const auth=getAuth(app);
const LoginPage =()=>{

const [email,setEmail] = useState('');

const [password,setPassword] = useState('');



const loginUser=()=>{
    signInWithEmailAndPassword(auth,email,password)
    .then(()=>
        console.log('login success'))
        .then((err)=>console.log(err));
};
 return(
        <div className="login-page" style={{ backgroundColor: 'red', color: 'black', padding: '10px' , 
    }}>
            <h1 style={{color: "Yellow", fontSize: "40px"}}>Login Here</h1>
            <label for="ee"> User Email : </label>
            <input  id="ee"
             style={{ 
                backgroundColor: 'bisque', 
                color: 'black', 
                padding: '05px', 
                border: '' 
              }}
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
            type="email" placeholder="Enter your email" required /><br/><br/>
           
            <label for="pp" > Password : </label>
            <input id="pp"
            style={{ 
                backgroundColor: 'bisque', 
                color: 'black', 
                padding: '05px', 
                border: '' 
              }}
            onChange={(e)=>setPassword(e.target.value)}
            value={password}
            type="password" placeholder="Enter your password" required /><br/><br/>
           
           <button onClick={loginUser} type="submit" style={{ backgroundColor: "green", color: "white", padding: "10px", borderRadius: "5px", border: "none" }}>Login </button>

           
        </div>
    )
}

export default LoginPage;