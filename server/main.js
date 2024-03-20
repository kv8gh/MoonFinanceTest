// NPM IMPORTS
const express = require('express')
const dotenv = require("dotenv")
const bodyParser = require("body-parser")
const cors = require("cors")
//ROUTES IMPORT 
const exampleRouter =  require("./routes/example.router")
const defaultRouter = require("./routes/default.router")
const ConnectToDB = require('./config/connect.db')
//CONFIG
dotenv.config();
const app = express()
const port =  process.env.PORT || 3000

//MONGO CONNECTION 
ConnectToDB();
//MIDDLEWARE
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//ROUTES
app.use("/example",exampleRouter)
app.get("/",defaultRouter)

// SERVER START
app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`)
})
