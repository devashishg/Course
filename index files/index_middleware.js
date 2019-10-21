const express = require('express');
const app=express();

let auth=(req,res,next)=>{
    console.log('Middleware is running');
    next();
};

app.use(auth);
app.get('/',(req,res)=>{
    res.send('Hi world!!');
});


app.listen(3000,()=>{
    console.log('server is running');
});