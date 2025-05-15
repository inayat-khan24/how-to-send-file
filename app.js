import express from "express"
import { PORT } from "./env.js"
import path from "path"

const app = express()




// absolute path
const staticPath = path.join(import.meta.dirname,"public")
app.use("/public",express.static(staticPath));

app.get("/product",(req,res)=>{
console.log(req.query)
// we use this api
// "http://localhost:3000/product?search=apple&page=10"
res.send(` <h1>user search for product ${req.query.page} ${req.query.limit}  mobile</h1>`)
})



app.get("/profile/:username",(req,res)=>{
 console.log(req.params)
 res.send(`<h1>hello how are you? ${req.params.username}</h1>`)
})

app.get("/profile/:username/artical/:slug",(req,res)=>{
 console.log(req.params)
 const formatedSlug = req.params.slug.replace(/-/g," ")
 res.send(`<h1>hello how are you? ${req.params.username} by ${formatedSlug}</h1>`)
})

app.get("/about",(req,res)=>res.send("<h2>hello this is me the about page 1 </h2>"))

// const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`server is running at port : ${PORT}`)
})