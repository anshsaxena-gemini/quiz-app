import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function TakeQuiz() {
    const [input,SetInputValue] = useState("");
    let navigate = useNavigate();
    const handleInput = (e) =>
    {
        
        SetInputValue(e.target.value);
    }
    const handleSubmit =()=>{
        if(input == localStorage.getItem("code")){
            navigate('/ShowQuiz');
        }
        else{
            alert("Code is Invalid !")
        }
    }
    
  return (
    <div
    style={{
        textAlign:'center',
        backgroundImage:
        "url('https://venngage-wordpress.s3.amazonaws.com/uploads/2018/09/Colorful-Circle-Simple-Background-Image-1.jpg')",
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
    }}
    >
        
        <p 
        style={
            {
     fontSize:'35px',
     paddingTop:'30px',
     color:'white',
            }
        }>
            Enter The Code To Start The Quiz
        </p>
        <br>
        </br>
        <input 
        style={{
            border:'2px solid gray',
            width:'300px',
            fontSize:'30px',
            borderRadius:'10px',
            backgroundColor:'white',
           
            

        }}
        type="text" 
        name="code"
        placeholder='   Enter The Code'
        value={input.code}
        onChange={handleInput}
        />
<br></br>
        <button 
        style={{
            paddingLeft:'100px',
            paddingRight:'100px',
        }}
        onClick={handleSubmit}>
            Start Quiz
        </button>
        </div>
  )
}

export default TakeQuiz