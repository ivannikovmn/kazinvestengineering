const express = require('express')
const logger = require('morgan')
const app = express()
const cors = require("cors")

app.use(logger('dev'))
app.use(express.json())
app.use(cors())
app.use(express.json())

app.get('/health', (req, res) => {
    res.send("ok")
})

/*
// Simulated delay for frontend loading state testing
app.post('/api/chat', (req, res) => {
    const text = req.body.text

    setTimeout(() => {
        res.status(200).json({
            answer: `You said: ${text}`
        })
    }, 1500)
})
*/

app.post('/api/chat', (req, res) => {
    const text = req.body.text

    res.status(200).json({
        answer: `You said: ${text}`
    })
})

app.listen(3000, () =>{
    console.log("Server is listening on port 3000")
})