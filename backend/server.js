const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

app.use(cors())
app.use(bodyParser.json())

const PORT = 5000
app.post('/login', (req, res) => {

    const { username, password } = req.body
    if(username === "admin" && password === "admin"){
        res.status(200).json({ message: "Login successful" })
    } 
    else{
        res.status(401).json({ message: "Invalid credentials" })
    }

})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})