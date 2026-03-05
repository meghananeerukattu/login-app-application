const express = require("express")
const cors = require("cors")
const path = require("path")

const app = express()

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 5000


// LOGIN API
app.post("/login", (req, res) => {
  const { username, password } = req.body

  if (username === "admin" && password === "admin") {
    res.status(200).json({ message: "Login successful" })
  } else {
    res.status(401).json({ message: "Invalid credentials" })
  }
})


// Serve React build
app.use(express.static(path.join(__dirname, "build")))

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"))
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})