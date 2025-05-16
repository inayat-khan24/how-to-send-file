import express from "express"
import path from "path"
const app = express()
const PORT = 3008

const staticPath = path.join(import.meta.dirname,"public")
app.use(express.static(staticPath))

app.use(express.urlencoded({extended:true}))

app.post("/contact",(req,res)=>{
console.log(req.body)

res.redirect("/")

})

app.listen(PORT,()=>{
console.log(`server is running${PORT}`)

})


