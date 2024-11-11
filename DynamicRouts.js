const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/profile', (req, res) => {
    res.send('My profile')
})

app.get('/profile/:username', (req, res) => {
    res.send(`this is ${req.params.username} profile`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
