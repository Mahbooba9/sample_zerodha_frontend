import React from 'react'
import {useState} from "react"

function Login() {
    let [username,setusername]=useState('')
    let [password,setpassword]=useState('')
    let senddetails=async (e)=>{
        e.preventDefault()
       let jwttoken= localStorage.getItem('token')

       let res=await fetch('http://localhost:5000/login',{
       method:'POST',
        headers:{
            "Content-Type":"application/json",
            authorization:`Bearer ${jwttoken}`
        },
        body:JSON.stringify({username,password})
    })
    let data=await response.json()
    alert(data.message)
    }
  return (
    <>
    <section style={{textAlign:"center"}}>     
      <h1>Login to your Account</h1>
      <form onSubmit={senddetails}>
        <input onChang={(e)=>{setusername=e.target.value}}type="text" placeholder='username'/><br/>
        <input onChang={(e)=>{setpassword=e.target.value}}type='password' placeholder='password'/><br/>
        <button type="submit">Login</button>
      </form>
    </section>
    </>
  )
}

export default Login