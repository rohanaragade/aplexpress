const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})








// const express = require('express') // Import the Express.js module
// const app = express()    // Create an Express application
// const port = 3000        // Define the port number


// app.set("view engine", "ejs");  // configure ejs
// app.use(express.static('./Public')); // static files setup/configure

// // Define a route for GET requests to the root URL ('/')
// app.get('/rohan', (req, res) => {
//   let output = {
//     "userId": 1,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false
//   }
//   res.send(output)  // Send "hello world" as a response
// })

// app.get("/", (req, res) => {
//   res.send("Hello World");
// })

// app.get("/home/:username", (req, res) => {
//   res.send(`hello from ${req.params.username}`);
// })

// app.get("/aragade", (req, res) => {
//   res.render("index", { name: "rohan" }); // repalce send with render
// })


// app.get("/sp", (req, res) => {
//   throw Error("Enginnring");
// })

// app.get('/error',(req,res,next)=>{
//   throw Error("wrong bruh");
// })

// app.use(function errorHandler(err, req, res, next) {  // error handling
//   if (res.headersSent) {
//     return next(err)
//   }
//   res.status(500)
//   res.render('error', { error: err })
// })

// // Start the server and listen on the specified port
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

