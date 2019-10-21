const express = require('express');
const app = express();
const multer = require('multer');
const ejs = require('ejs');
const path = require('path');

var Storage = multer.diskStorage(
    {
        destination:(req,res,cb)=>{
            cb(null,"./public");
        },
        filename:(req,file,cb)=>{
            cb(null,file.fieldname+"-"+Date.now()+path.extname(file.originalname));
        }
    }
);

var upload = multer({
    storage: Storage  
}).single("Wall");

app.set('view engine','ejs');
app.use(express.static("./public"));

app.get('/',(req,res)=>{
    res.render('index');
});

var fileN = '';
app.post("/upload",(req,res)=>{
    upload(req,res,(error)=>{
        if(error){res.render('index',{
                message: error
            });
        }else{res.render('index',{
                message: 'File Uploaded Sucessfully!!',
                filename: `../public/${req.file.filename}`
            });
            //fileN = req.file.filename;
        }
    });
    //var imagE = window.document.getElementById("photo");
    //imagE.src= `./public/${fileN}`
});



// app.get('/app',(req,res)=>{
//     res.send('It works fine');
// });

app.listen(3000,(req,res)=>{
    console.log('Server strated...... Running!!')
});
















// // packege.json
// // For each test case, print a single line containing one integer ― the maximum star value.
