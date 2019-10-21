const express = require('express');
const app = express();


app.get('/home',(req,res)=>{
    res.send("hello man, I am home Page")
})

app.post('/login',(req,res)=>{
    res.send("Login Attempted!")
});

app.delete('/remove',(req,res)=>{
    res.send('Removing scrap Data')
});
/*
app.get('/',(req,res)=>{
    res.send("hello man, I am home Page")
})
*/
app.get('/name/:name-:surname',(req,res)=>{
    //res.send(req.params)
    res.send(`Hello ${req.params.name}, Nice to see you here!`)
})
// app.get('/',(req,res)=>{
//     res.json({'name':'Devashish'})
// })


app.get('/',(req,res)=>{
    res.status(403).json({'error':'Access Forbidden'})
})

app.listen(3000,()=>{
    console.log("hi.. server is running.")
})



/*
res.download();
res.end();
res.json();
res.send();
res.render();
res.sendStatus();
res.status()   returns res Object;*/