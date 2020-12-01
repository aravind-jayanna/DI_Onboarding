const address = require ('address');
const fs = require ('fs');

    let date_ob = new Date();

    let date = ("0" + date_ob.getDate()).slice(-2);

    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

    let year = date_ob.getFullYear();

    let hours = date_ob.getHours();

    let minutes = date_ob.getMinutes();

    let seconds = date_ob.getSeconds();

    let existingData = fs.readFileSync("./log.txt","utf8")  
    

fs.writeFileSync("./log.txt", existingData +  "\n "+ " "+ "IP ADDRESS"+ " " +address.ip()+ " " +"on"+ " " + year + "-" + month + "-" + date + " " + "at"
                +" " + hours + ":" + minutes + ":" + seconds,'utf8' );


// prints date & time in YYYY-MM-DD HH:MM:SS format


