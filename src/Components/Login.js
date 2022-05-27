import React from 'react'
import '../CSS/Login.css';
import { useState } from 'react';
import {BrowserRouter as Router, Route , Link,useNavigate} from 'react-router-dom';

function Login(){
    let navigate = useNavigate();
    const[formValues,setFormValues] = useState({}); // {} is a object
    const handleInputChange = (event) =>
    {
        const name = event.target.name;

        const value = event.target.value;
        
        
       setFormValues({...formValues,[name]:value})

    };
    function handleSubmit()
    {
        
        if(localStorage.getItem("name") === formValues.userName && localStorage.getItem("password") === formValues.password){
           alert("Login Success");
           navigate('/QuizForm')
        }
        else{
            alert("Invalid Credentials !");
        }
        
    }

    return(
     <div className='Container'

     style={{
        backgroundImage:
        "url('https://cutewallpaper.org/21/white-background-gif/Interactive-Background-by-Denys-Loveiko-on-Dribbble.gif')",
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
    }}
     
     >
         <div className='LoginDetails'>
             <div className='Header'>
            <h1>Login</h1>
            </div>
            <input type="text"
            name='userName'
            placeholder='Enter Your Username'
            value={formValues.userName}
            onChange={handleInputChange}
            />
            <br></br>
            <input type="password"
            name='password'
            placeholder='Enter Your Password'
            value={formValues.password}
            onChange={handleInputChange}
            />
            <div>
               <button type="button" onClick={handleSubmit} >Login</button>
               
            </div>
            <br></br>
            <div className="loginLink">
            <h3>Not Registered ?</h3>   <Link to="/Registration" id="link">Register</Link>
            </div>
            
            

         </div>
     </div>
    )
}

export default Login;