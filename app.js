import express from "express"
import { PORT } from "./env.js"

const app = express()

app.get("/",(req,res)=>res.send("<h1>hello word </h1>"))

app.get("/about",(req,res)=>res.send("<h2>hello this is me the about page 1 </h2>"))

// const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`server is running at port : ${PORT}`)
})