const express = require('express')
const app = express()
const port = 3000

app.set("view engine","ejs"); // template engine ejs configure

app.use(express.static('./Public'));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/tiger', (req, res) => {
    res.render('index')
})

app.get('/destination', (req, res) => {
    res.render('index1',{sapna:"DREAM"})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

