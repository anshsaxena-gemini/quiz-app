import React, { useState } from "react";
import '../App.css';
import {BrowserRouter as Router, Route , Link} from 'react-router-dom';

function Registration(){


    const[formValues,setFormValues] = useState({}); // {} is a object
    const handleInputChange = (event) =>
    {
        const name = event.target.name;

        const value = event.target.value;
       
        
       setFormValues({...formValues,[name]:value})

    };



const handleSubmit =() => {
   
   
        
        if(isUserNameFilled(formValues.userName) && ( isValidMobile(formValues.phone) && isValidEmail(formValues.email))){
            localStorage.setItem("name",formValues.userName);
            localStorage.setItem("password",formValues.password);

        }
        
        function isUserNameFilled(userName){
          
            if(userName === ""){
                alert("Please Enter Your Name");
                return false;
            }
            else{
                return true;
            }
            
        }
     
   
     function isValidEmail(email){
         let emailRegex = /^\w+@[a-zA-Z_.]+?\.[a-zA-Z]{2,3}$/;
         if(email === ""){
             alert("Please Enter Email");
             return false;
         }
         else if(emailRegex.test(email)){
             return true;
         }
         else{
             alert("Sorry! Email is not valid")
             return false;
         }
          
     }
     function isValidMobile(phone){
         let mobileRegex = /^\d{10}$/;
         if(phone === ""){
             alert("Please Enter Mobile Number");
             return false;
         }
         else if(mobileRegex.test(phone)){
             return true;
         }
         else{
             alert("Sorry! Mobile Number is not valid")
             return false;
         }
          
     }

}
  
   return(

    
    <div className="App">
        <form>

            <div>
            <h1 id="head">Register Now</h1>
            </div>
            <div className="container">
            <input type="text"
            name="userName"
            value={formValues.userName}
            onChange={handleInputChange}
            placeholder="Enter Your Name"
            ></input><br></br>
             <input type="text"
             name="email"
            value={formValues.email}
            onChange={handleInputChange}
            placeholder="Enter Your Email"
            ></input><br></br>
             <input type="password"
             name="password"
            value={formValues.password}
            onChange={handleInputChange}
            placeholder="Create Your Password"
            ></input> <br>
            </br>
            <input type="text"
             name="phone"
            value={formValues.phone}
            onChange={handleInputChange}
            placeholder="Enter Your Mobile Number"
            ></input> <br>
            </br>
          
            <div>
               <button type="button" onClick={handleSubmit} >Submit</button>
               
            </div>
            <br></br>
            <div className="loginLink">
            <h3>Already Registered ?</h3>   <Link to="/Login" id="link"> Login</Link>
            </div>
      
    
          
           </div>
        </form>
    </div>
    
   )
  

}
export default Registration;





















