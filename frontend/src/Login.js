import React, { useState, useEffect } from "react"
import axios from "axios"

function Login(){
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [error,setError] = useState("")
    useEffect(()=>{
        const savedUser = localStorage.getItem("username")
        if(savedUser){
            setUsername(savedUser)
        }
    },[])
    const handleLogin = async (e) => {
        e.preventDefault()
        try{
            const res = await axios.post(
                "http://localhost:5000/login",
                {username,password}
            )
            if(res.status === 200){
                localStorage.setItem("username",username)
                window.location.href="/welcome"
            }
        }catch(err){
            setError("Invalid credentials")
        }
    }
    return(
    <div className="container">
        <div className="login-box">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                required
                />
                <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                required
                />
                <button type="submit">
                  Login
                </button>
            </form>
            {error && <p className="error">{error}</p>}
        </div>
    </div>
)
}

export default Login