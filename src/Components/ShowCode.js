import React from 'react'

function ShowCode() {
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
    style={{
        fontSize:'35px',
     paddingTop:'80px',
     color:'white',
    }}
    >
        Plaese Share This Code With Participants To Start The Quiz
    </p>
     <h1
     style={{
        fontSize:'50px',
        paddingTop:'30px',
        color:'cyan',
        
     }}
     >
         {localStorage.getItem("code")}

     </h1>
    

    </div>
  )
}

export default ShowCode