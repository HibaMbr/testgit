import React, { useState } from "react"
import Form from "./component/Form"

function App() {

 const [FeedbackForm,setFeedbackForm]= useState(null) 
 const handleformSubmit=(data)=>{
  setFeedbackForm(data)
 }

  return (
    <>
    <h1>feedback form</h1>
      <Form onsubmit={handleformSubmit} />
    </>
  )
}


export default App
