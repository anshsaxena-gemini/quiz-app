import React from 'react'

function Question() {
  let data = localStorage.getItem("Angular");
  data = JSON.parse(data);
  console.log(data.option1);
  return (
    <div>Question</div>
  )
}

export default Question