
import {readFile,writeFile} from 'fs/promises'
import { createServer } from 'http'
import path from 'path'
import crypto from "crypto";
import express from "express"

const app = express()

const PORT =  process.env.PORT || 3000
const DATA_FILE = path.join("data","links.json");

app.use(express.static("public"))

const loadLinks = async()=>{
    try {
        const data = await readFile(DATA_FILE,"utf8")
        return JSON.parse(data)
    } catch (error) {
        if(error.code === "ENOENT"){
            await writeFile(DATA_FILE,JSON.stringify({}))
            return {}
             }

             throw error
    }
};

const saveLinks = async (links)=>{
    await writeFile(DATA_FILE,JSON.stringify(links))
}

// use get method with express
app.get("/",async(req,res)=>{
try {
    const file = await fs.readFile(path.join("public","index.html"))
    const links = await loadLinks()
} catch (error) {
    console.error(err)
    return res.status(500).send("Internal Server error")
}
})


// use post method with express
app.post("/",async (req,res)=>{
try {
   const {url,shortCode} = req.body 
   const finalShortcode = shortCode || crypto.randomBytes(4).toString("hex")
    if(links[finalShortcode]){
        return res.status(400).send("Short code already exists. please choose another.");
    }
   
    links[finalShortcode] = url
  await saveLinks(links)        
   
} catch (error) {
    
}
})


const server = createServer(async(req,res)=>{
if(req.method==="GET"){
 if(req.url === "/"){
     
try {
    const data = await readFile(path.join("public","index.html"),)
        res.writeHead(200,{"Content-Type":"text/html"})
        res.end(data)
    } catch (error) {
        res.writeHead(404,{"Content-Type":"text/html"})
        res.end("404 page not found") }

}} else if (req.url === "/links"){
    const links = await loadLinks()
    res.writeHead(200,{"content-type":"application/json"})
    return res.end(JSON.stringify(links))
}


})

server.listen(PORT,()=>{
    console.log(` server running at http://localhost:${PORT} `)
})

