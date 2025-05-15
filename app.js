import express from "express"
import { PORT } from "./env.js"
import path from "path"

const app = express()




// absolute path
const staticPath = path.join(import.meta.dirname,"public")
app.use("/public",express.static(staticPath));




app.get("/profile/:username",(req,res)=>{
 console.log(req.params)
 res.send(`hello how are you? ${req.params.username}`)
})

app.get("/about",(req,res)=>res.send("<h2>hello this is me the about page 1 </h2>"))

// const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`server is running at port : ${PORT}`)
})