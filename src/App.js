import { useEffect,useState } from "react";
import { getAuth, onAuthStateChanged, signOut ,} from "firebase/auth";
import{ app } from './firebase';
import SignupPage from "./home/Signup";
import LoginPage from "./home/Login";
import './App.css';

const auth=getAuth(app);


function App() {

  const [user,setUser]=useState(null);

  useEffect (()=>{
    onAuthStateChanged(auth, (user)=>{
      if(user){
        //yes,you are logged in
       setUser(user);
       alert('Login success')
      }else{
        //user is logged out
        // alert('Account created');
        
        
        setUser(null)
      }
    })
  })

if(user ===null){
  return (
    <div className="App">
 <SignupPage />
 <br/><br/>
 
 <LoginPage/>
    </div>
  )
}


  return (
    <div className="App">
      <h1 style={{ fontSize: "100px", color: "Yellow", fontWeight: "bold" }}>Hello World</h1>

 

 <button onClick={()=>signOut(auth)} style={{ backgroundColor: "blue", color: "white", padding: "10px", borderRadius: "5px", border: "none" }}>Logout</button>

    </div>
  );
}



export default App;


