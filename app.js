import express from "express"
import { PORT } from "./env.js"
import path from "path"

const app = express()




// absolute path
const staticPath = path.join(import.meta.dirname,"public")
app.use(express.static(staticPath));

// middleware 
app.use(express.urlencoded({extended:true}))

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

app.use(express.urlencoded()); // ✔️ Good: to parse form data (x-www-form-urlencoded)
app.post("/contact", (req, res) => {
    console.log(req.body);     // ✔️ Correct: will log form data
    res.redirect("/");
});


app.use((req,res)=>{
return res.status(404).send(`<h1> page not found </h1>`)

})

// const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`server is running at port : ${PORT}`)
})