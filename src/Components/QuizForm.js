import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function QuizForm(){
  const [question, setQuestion] = useState({
    title: "",
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    answer: "",
  });

  const [isAdded, setIsAdded] = useState(false);

  const [addQuestionDetails, setAddQuestionDetails] = useState([]);

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setQuestion((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
    setIsAdded(false);
  };

  const addEvent = (e) => {
    setAddQuestionDetails((prevData) => {
      return [...prevData, question];
    });
    setIsAdded(true);
    document.getElementById("form").reset();
  };

  const addTOStorage = () => {
    localStorage.setItem(
      `${question.title}`,
      JSON.stringify(addQuestionDetails)
    );
    let code = Math.floor(100000 + Math.random() * 900000);
    localStorage.setItem("code",code);
    alert("Quiz Created");
    
    setAddQuestionDetails([]);
  };
  let data = localStorage.getItem("Angular");
  let test  = JSON.parse(data);
  console.log(test.option1);
  return (
   <div style={
     {
      backgroundImage:
      "url('https://blusignalsystems.com/wp-content/uploads/2016/12/Savin-NY-Website-Background-Web1.jpg')",
      height: "100vh",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
     }
   }>
       {isAdded ? (
          <h5>Question is Added</h5>
        ) : null} 
        
           
        <div className="QuizForm" style={{
          textAlign:'center',
        }}>
        <form id="form">

           
            <div className="Container">
            <div className='QuizDetails'>
    
             <div className='Header'>
            <h1>Enter Quiz Details</h1>
            </div>
            
            <input
              type="text"
              id="quizTitle"
              name="title"
              value={question.title}
              onChange={inputEvent}
              placeholder="Enter The Quiz Title"
              /><br></br>
            <input type="text"
            name="question"
            id="question"
            value={question.question}
            onChange={inputEvent}
            placeholder="Enter The Question"
            ></input><br></br>
             <input type="text"
             name="option1"
            value={question.option1}
            onChange={inputEvent}
            placeholder="Option 1"
            ></input><br></br>
             <input type="text"
             name="option2"
            value={question.option2}
            onChange={inputEvent}
            placeholder="Option 2"
            ></input> <br>
            </br>
            <input type="text"
             name="option3"
            value={question.option3}
            onChange={inputEvent}
            placeholder="Option 3"
            ></input> <br>
            </br>
            <input type="text"
             name="option4"
            value={question.option4}
            onChange={inputEvent}
            placeholder="Option 4"
            ></input> <br>
            </br>
            <input type="text"
             name="answer"
            value={question.answer}
            onChange={inputEvent}
            placeholder="Enter the Correct Answer"
            ></input> <br>
            </br>
            <button
               
                type="button"
                onClick={addEvent}
                style={{ 
                  paddingLeft:'20px',
                  paddingRight:'20px',
                  
                 }}
              > Add Question </button>
              <button
              
                type="button"
                className="btn btn-primary mt-4 "
                onClick={addTOStorage}
                style={{ 
                  paddingLeft:'20px',
                  paddingRight:'20px',
                  marginLeft:'6px'

                 }}
              >
                Create Quiz 
              </button>
      
    </div>
             
           </div>
        </form>
    </div>
   </div>
  )
};

export default QuizForm;
