import { useState } from "react"
function Register() {
    const [username,setusername]=useState('')
    const [password,setpassword]=useState('')
    const [email,setemail]=useState('')
    const [role,setrole]=useState('')

    let senddetails=async (event)=>{
        event.preventDefault()
    let response=await fetch('http://localhost:5000/register',{
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({username,password,email,role})
    })
    let data=await response.json()
    let token = data.token
    localStorage.setItem("token",token)
    alert(data.message)

    }

  return (
    <>
    <form onSubmit={senddetails}>
        <input onChange={(e)=>{setusername(e.target.value)}} type="text" placeholder="username"/><br/>
        <input onChange={(e)=>{setpassword(e.target.value)}} type="text" placeholder="password"/><br/>
        <input onChange={(e)=>{setemail(e.target.value)}} type="text" placeholder="email"/><br/>
        <input onChange={(e)=>{setrole(e.target.value)}} type="text" placeholder="role"/><br/>

        <button type="submit">Register</button>
    </form>
    </>
)
}

export default Register