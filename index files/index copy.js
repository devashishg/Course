const express = require('express');
const app=express();
const bodyparser=require('body-parser');

app.use(bodyparser.urlencoded({extended: false}));

app.use('/login',express.static(__dirname+"/login.html"));

 app.get('/',(req,res)=>{
     res.send('hi welcome to the page....click <a href="/login">here</a> to login')
 })

app.post('/login',(req,res)=>{
    res.send(`Hi ${req.body.email}, You are welcome!!`)
});


app.listen(3000,()=>{
    console.log('server is running');
});