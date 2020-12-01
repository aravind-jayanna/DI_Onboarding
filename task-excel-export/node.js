var http = require('http');
var fs = require('fs');
const address = require ('address');

let date_ob = new Date();

let date = ("0" + date_ob.getDate()).slice(-2);
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();
let hours = date_ob.getHours();
let minutes = date_ob.getMinutes();
let seconds = date_ob.getSeconds();
let existingData = fs.readFileSync("./log.txt","utf8")  

function onRequest(request, response) {

    response.writeHead(200, {'Content-Type': 'text/html'});

    fs.readFile('./export.html', null, function(error, data) {
        if (error) {
            response.writeHead(404);
            response.write('File not found!');
        } else {
            response.write(data);

            fs.writeFileSync("./log.txt", existingData +  "\n "+ " "+ "IP ADDRESS"+ " " +address.ip()+ " " +"on"+ " " + year + "-" + month + "-" + date + " " + "at"
                +" " + hours + ":" + minutes + ":" + seconds,'utf8' );

        }
        response.end();
    });
}
http.createServer(onRequest).listen(8000);