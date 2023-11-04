const http = require("http")
const fs=require("fs")


const port=2000;
const hostname="localhost";
const home=fs.readFileSync("./index.html","utf-8")
console.log(__filename)

const server= http.createServer((req,res)=>{

if(req.url==="/"){
   return res.end(home)
}
if(req.url==="/conctact"){
   return res.end("<h1> conctact page<h1>")
}
if(req.url==="/service"){
   return res.end("<h1> service page<h1>")
}
if(req.url==="/about"){
   return res.end("<h1> About page<h1>")
}
else{
    res.end("<h1>404 Page not found<h1>")
}


});
server.listen(port,hostname,()=>{
    console.log(`Server is working on http://${hostname}:${port})`);
});
