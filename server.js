const express = require('express');
const admin = require('firebase-admin');
const bcrypt = require('bcrypt');
const path = require('path');
/////declare static path
let staticPath = path.join(__dirname,"codeWeb");

/// instializing express.js
const app = express();

//// middlewares 
app.use(express.static(staticPath));
app.use(express.json());
// rote
// home route
app.get("/",(req,res)=>{
    res.sendFile(path.join(staticPath,"index.html"))
})
/// signup route
app.get('/signup',(req,res)=>{
    res.sendFile(path.join(staticPath,"signup.html"))
})
app.post('/signup',(req,res)=>{
    let{name,email,password,number,tac,notification} = req.body;
//// form validations
    if(name.length < 3 ){
        console.log(name.value);
        return res.json({'alert':'Name must be 3 letters long'});
    }
    else if(!email.length){
        return res.json({'alert':'Enter your email'});
    }   
    else if(password.length < 8){
        return res.json({'alert':'password should be 8 letters long'});
    }
    else  if(!number.length){
        return res.json({'alert':'enter your phone number'})
    }
    else  if(!Number(number.length) ||  number.length < 10){
        return res.json({'alert':'invalid number, pls enter valid one'});
    }
    else  if(!tac){ ////===> sai sam, ngu vai~
        return res.json({'alert':'you should agree terms and conditions'});
    }
    else{
        //store user in data base
    }
    // console.log(tac);
    //console.log(req.body); // => gui thong tin ve terminal
    res.json('data recieved');
})
//// 404 route


app.get('/404',(req,res)=>{
    res.sendFile(path.join(staticPath,"404.html"));
})


app.use((req,res)=>{
    res.redirect('/404');
})


app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})


