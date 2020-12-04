const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'));

app.get("/index",(req,res)=>{
    

    res.sendFile(__dirname+"index.html");
    
});

app.post("/",(req,res)=>{
    var Name = req.body.user;
    var mail = req.body.Mail;
    var Password = req.body.password;

    console.log("FirstName: "+ Name +", Email-ID: "+ mail + ", Password: "+ Password)
})






app.listen(3000,()=>{
    console.log("port connected")
})