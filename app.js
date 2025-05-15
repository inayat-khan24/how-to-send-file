import express from "express"
import { PORT } from "./env.js"
import path from "path"

const app = express()




// absolute path
const staticPath = path.join(import.meta.dirname,"public")
app.use(express.static(staticPath));


// ============
// with GEt method
// ============
// app.get("/contact",(req,res)=>{
//     console.log(req.query)
//     res.redirect("/")

// })

// ================
// with POST method
// =================

app.post("/contact",(req,res)=>{
    console.log(req.body)
    res.redirect("/")

})

// const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`server is running at port : ${PORT}`)
})