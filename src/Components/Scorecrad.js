import React from 'react'
import {Link} from 'react-router-dom';

function Scorecrad() {
  return (
    <div
    style={{
        textAlign:'center',
        marginTop:'20px',
        color:' #ff00ff',
        fontSize:'25px'
    }}
    >
        
        <p>
            
            Your Score is {localStorage.getItem("currUserScore")}<br></br>
            &#128515;
        </p>
        
        
       <Link to='/ShowQuiz'
        style={{
            fontSize:'18px',
            textDecoration:'none',
            borderBottom:'2px solid blue'
        }}
       >Try Again</Link>
        
        
        </div>
  )
}

export default Scorecrad