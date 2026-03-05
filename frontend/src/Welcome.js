import React from "react"

function Welcome(){

  const username = localStorage.getItem("username")

  return (
    <div className="container">
      <div className="login-box">
        <h1>Welcome, {username}!</h1>
      </div>
    </div>
  )
}

export default Welcome