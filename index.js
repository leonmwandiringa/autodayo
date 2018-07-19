//const app = require('express')();
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');
let User = require('./App/Models/User');
/*const request = require('request-promise');
const cheerio = require('cheerio');*/
const CoreController = require("./App/Controllers/CoreController");


//mongoose.connect('mongodb://autodayo:Kaboombro1/@ds147180.mlab.com:47180/autodayo');

(()=>{

    //call em
    CoreController.startApp();

})();


function scrapeStuff(){

    let fileTowritey = fs.createWriteStream(path.join(__dirname, "./localization.txt"), {flags: 'a'});

    let loalix = [];
    for(let loc in locales){
 
        var options = {
            uri: 'https://www.xbox.com/'+locales[loc].toLocaleLowerCase()+'/games/xbox-one',
            transform: function (body) {
                return cheerio.load(body);
            }
        };

        request.get(options).then(($)=>{

            let viewing = $('html').find('.gameList .pregamelist .pregameleft .clearall').text().trim();
            fileTowritey.write(locales[loc]+":{\r\nclear filter: "+viewing+"\r\n},\r\n");
            //console.log(viewing);
        }).catch((err)=>{
            console.log(err);
        });

    } 

    setTimeout(()=>{
        console.log(loalix);
    }, 0);
    
    //await res.send(loalix);


}

/*

app.listen(3000, (err)=>{

    if(err){
        console.log(err);
    }
    console.log("listening");
})*/