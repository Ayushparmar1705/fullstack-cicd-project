import React, { useEffect, useState } from 'react'

export default function App() {
  const [message, setMessage] = useState("");


  const getMessage = async()=>{
    const URL = "http://localhost:5000/api";
    const data = await fetch(URL);
    const result = await data.json();
    console.log(result);
    setMessage(result.message);
  }

  useEffect(()=>{
    getMessage();
  },[]);
  return (
    <div>
      <p>{message}</p>
    </div>
  )
}
