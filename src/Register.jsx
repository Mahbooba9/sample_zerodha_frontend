import { useState } from "react"
import {safeParse, z} from "zod"

let userschema=z.string().min(6,"username must need min 6 charecters").max(16,"max limit 16 charecters")
let passwordschema=z.string().min(8,"password must need min 8 charecters").max(16,"max limit 16 charecters")
let emailschema=z.email()
let roleschema=z.string().min(1,"role must need min 1 charecters")

function validate(schema,value)
{
    if(!value) return ''
    let result=schema.safeParse(value) 
    if(result.success) return ""
    else
        return result.error.issues[0].message
}
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
        <p>{validate(userschema,username)}</p>

        <input onChange={(e)=>{setpassword(e.target.value)}} type="text" placeholder="password"/><br/>
        <p>{validate(passwordschema,password)}</p>

        <input onChange={(e)=>{setemail(e.target.value)}} type="text" placeholder="email"/><br/>
        <p>{validate(emailschema,email)}</p>

        <input onChange={(e)=>{setrole(e.target.value)}} type="text" placeholder="role"/><br/>
        <p>{validate(roleschema,role)}</p>

        <button type="submit">Register</button>
    </form>
    </>
)
}

export default Register