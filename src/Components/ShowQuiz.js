import React from 'react'
import {Link,useNavigate} from 'react-router-dom';

function ShowQuiz() {
     
    let navigate = useNavigate();
    const questionData = localStorage.getItem("Quiz");
    const questionArray = JSON.parse(questionData);
    let i=0;
    let score =0;
    const finalScore = () =>{
     localStorage.setItem("currUserScore",score);
     navigate('/Scorecard');
    }
   
    const hanldleAction = (e) =>
    {
        
       
        if(e.target.value === questionArray[i].answer){
           
            score++;
           
        }
       
       i++;
    }
   const items = questionArray.map(
       (element) =>{
  return (
    <div className='Container'
    style={{
        
        margin:'10px',
        padding:'10px',
       
    }}
    >
    
      
      <h2 id='question'type="radio" 
      style={{
          fontFamily:'Georgia',
          marginBottom:'10px',
          color:'purple'

      }} 
      >&#128310; {element.question} ?</h2>
       <label style={{
           fontSize:'15px',
         marginLeft:'30px',
        
        
           
       }}>{element.option1}</label>
     <input type="radio" name={element.question} value={element.option1} onClick={hanldleAction} /><br></br>
     <label style={{
           fontSize:'15px',
           marginLeft:'30px',
       }}>{element.option2}</label>
     <input type="radio" name={element.question} value={element.option2} onClick={hanldleAction} /><br></br>
     <label style={{
         fontSize:'15px',
         marginLeft:'30px',
       }}>{element.option3}</label>
     <input type="radio" name={element.question} value={element.option3} onClick={hanldleAction} /><br></br>
     <label style={{
         fontSize:'15px',
         marginLeft:'30px',
       }}>{element.option4}</label>
     <input type="radio" name={element.question} value={element.option4} onClick={hanldleAction} /><br></br> 
     

    </div>
    
  )
  }
  
   )
   return(
       <div>
          
           {items}
           <br></br>
          <button onClick={finalScore}
          style={{
            paddingLeft:'20px',
            paddingRight:'20px',
            marginLeft:'40px'
          }}
          >Submit</button>
       </div>
   )
}

  


export default ShowQuiz