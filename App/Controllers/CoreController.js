/**
 * @author Leon Mwandiringa
 * @uses starting point for app
 * @return global control
 * @comment singularity baby
 */
let rL = require('readline');
let { Greetings } = require("../Helpers");
const RL = rL.createInterface(process.stdin, process.stdout);

let RealestOuchea = null;
let roles = ['SIMPLE JOE', 'SAIYAN MODE', 'GOD MODE'];
 class CoreController{

    constructor(mode = 'SIMPLE JOE'){
        this.mode = mode;
    }

    //starter
    static startApp(){
        
        let index = process.argv.map((value)=>{
            return String(value.trim().toUpperCase);
        });

        let commandflag = process.argv.indexOf('--init') != -1 ? true : false;
        let indexed = commandflag && process.argv.indexOf("autodayo") != -1? true : false;

        if(indexed){

            RealestOuchea = RealestOuchea == null ? new CoreController(namecr.toString().trim(), roles[1]) : RealestOuchea; 
            RealestOuchea.startAutodayo();


        }else{

            RealestOuchea = new CoreController('douche bag');
            process.exit('newbie');

        }
       

    }

    //closing command
    AppClosal(){

        process.on('exit', (command)=>{

            if(command == 'newbie'){
                console.log(`do you know what u doing ${this.name}`+"\n\r");
            }else{
                console.log('you just kicked out bro');
            }

        });

    }

    async startAutodayo(){

        RL.question(Greetings[Math.floor(Math.random()*Greetings.length)]+' its your boy autodayo ouchea\n\r', (response)=>{

            let crREsponse = response;
            console.log("\n\r"+crREsponse);


        });


    }
    
 }

 module.exports = CoreController;