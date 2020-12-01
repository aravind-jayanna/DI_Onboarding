const fs = require('fs');
const http = require('http');

http.createServer(function(req,res){
    fs.readFile('export.html', function(err,data){
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
  });

  }).listen(8000);

  console.log("listening at http://localhost:8000/");