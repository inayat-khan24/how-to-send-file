import express from "express"
import { PORT } from "./env.js"

const app = express()

app.get("/",(req,res)=>{
// console.log(__dirname)
// console.log(__filename)
// console.log(import.meta.dirname) 
// console.log(import.meta.url)
const __filename = new URL(import.meta.url)
console.log(__filename.pathname) 

res.send("hii")
})

app.get("/about",(req,res)=>res.send("<h2>hello this is me the about page 1 </h2>"))

// const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`server is running at port : ${PORT}`)
})