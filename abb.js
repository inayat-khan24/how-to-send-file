import express from "express"
import { PORT } from "./env.js"
import path from "path"

const app = express()

const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
const result = await response.json()
console.log(result) 

console.log(import.meta.filename)

// absolute path
const staticPath = path.join(import.meta.dirname,"public")
app.use("/public",express.static(staticPath));




app.get("/",(req,res)=>{
// console.log(__dirname)
// console.log(__filename)
// console.log(import.meta.dirname) a
// console.log(import.meta.url)
// const __filename = new URL(import.meta.url)
// console.log(__filename.pathname) 

const homePagePath = path.join(import.meta.dirname,"public","index.html")

res.sendFile(homePagePath)
})

app.get("/about",(req,res)=>res.send("<h2>hello this is me the about page 1 </h2>"))

// const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`server is running at port : ${PORT}`)
})