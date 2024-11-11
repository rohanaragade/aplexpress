const express = require('express')
const app = express()
const port = 3000

app.use(function (req, res, next) {
    next();
});

app.use(function (req, res, next) {
    console.log("this is middleware brother");
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/contact', (req, res) => {
    res.send('My contact')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
