const express = require('express')
const logger = require('morgan')
const app = express()

app.use(logger('dev'))
app.use(express.json())

app.get('/health', (req, res) => {
    res.send("ok")
})

app.post('/api/chat', (req, res) => {
    const text = req.body.text

    res.status(200).json({
        answer: `You said: ${text}`
    })
})

app.listen(3000, () =>{
    console.log("Server is listening on port 3000")
})