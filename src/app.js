const express = require("express");
const path = require ("path")
const app = express();
const port = process.env.PORT || 5000 ; 

const static_path = path.join(__dirname,"../public");

app.set('view engine','hbs');

 app.use(express.static(static_path));

app.get("",( req,resp)=>{
resp.render('index.hbs')
})
app.get("/about",( req,resp)=>{
resp.render('about.hbs')
})
app.get("/weather",( req,resp)=>{
resp.render('weather')
})
app.get("*",( req,resp)=>{
resp.render("404error",{
    errorMsg:'Oops!Page Not found'
})
})
app.listen(port,()=>{
    console.log(`listening to the ${port}`)
})