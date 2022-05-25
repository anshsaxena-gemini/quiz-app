import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom'

function HomePage() {
  const navigate = useNavigate();
 const[isLogin,setisLogin] = useState(true);


  return (
    <div
          style={{
            backgroundImage:
            "url('https://img.freepik.com/free-photo/yellow-rectangular-wooden-box-drawn-face-outline-with-chalk-blackboard_23-2147874007.jpg?t=st=1653459942~exp=1653460542~hmac=bbb2f3061e70d44a0ea3f7be143220e3ae61cf8a70347096130f745053937a9b&w=996')",
            height: "100vh",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
        <div className='heading'>
            <h1 style={{
                color:'yellow',
                fontFamily:'Arial, Helvetica, sans-serif',
                fontSize:'40px',
                textAlign:'center',
                paddingTop:'30px',
                paddingLeft:'200px'
                }}>QUIZ BUILDER
                </h1>
        </div>
        <Link to='/QuizForm'> <button style={{
        marginLeft:'650px',
        marginTop:'100px',
        backgroundColor:'blue',
        paddingLeft:'10px',
        paddingRight:'20px',
    
        }}>Create a Quiz</button>
           
        </Link>
    </div>
  )
}

export default HomePage  