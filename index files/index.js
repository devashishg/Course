const http=require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const mimeTypes = {
    'html':'text/html',
    'css':'text/css',
    'js':'text/javascript',
    'jpeg':'image/jpeg',
    'png':'image/png',
    'jpg':'image/jpg'
}

http.createServer((req,res)=>{
    var myUri = url.parse(req.url).pathname;
    var filename = path.join(process.cwd(),unescape(myUri));

    var loadfile ;
    try {
        loadfile=fs.lstatSync(filename);
        
    } catch (error) {
        res.writeHead(404,{'Content-Type':'text/plain'});
        res.write('page not found');
        res.end();
        return;
        }
    

    if(loadfile.isFile()){
        var mimeType = mimeTypes[filename
            .split('.')
            .reverse()[0]];
        //console.log(mimeType);
        res.writeHead(200,{'Content-Type':mimeType});
        var filestream=fs.createReadStream(filename);
        console.log(filename);
        filestream.pipe(res);
        //res.end();
    }else if(loadfile.isDirectory()){
        res.writeHead(302,{'location':'index.html'});
        res.end();
    }else{
        res.writeHead(500,{'Content-Type':'text/plain'});
        res.write('500 Internal server Error');
        res.end();
    }
}).listen(5000,'127.0.0.1',()=>{
    console.log('Hi This line runs...=|');
});