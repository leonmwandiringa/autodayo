/**
 * @author Leon Mwandiringa
 * @uses starting point for app
 * @return global control
 * @comment singularity baby
 */
const RL = require('readline');
let { Greetings } = require("../Helpers");
RL.createInterface(process.stdin, process.stdout);

let RealestOuchea = null;
 class CoreController{

    constructor(name, mode = 'jack'){
        this.name = starter;
        this.mode = mode;
        this.AppClosal();
        this.roles = ['jack', 'real nigga'];
    }

    //starter
    static startApp(){
        
        let index = process.argv.map((value)=>{
            return String(value.trim().toUpperCase);
        });

        let indexed = process.argv.indexOf("autodayo") != -1? true : false;

        if(indexed){

            process.stdout.write('Enter Your name bro\n\r');
            process.on('data', (data)=>{

                var name = String(data.trim().toUpperCase());

                process.stdout.write('whats the magic word');

                process.on('data', (data)=>{

                    let mode = data.split(" ").map((val)=>{
                        return String(val.trim().toUpperCase);
                    });

                    if(mode.indeOf(this.roles[1]) != -1){

                        let greetingsLength = Greetings.length;
                        console.log(greetingsLength);
                        RealestOuchea = RealestOuchea == null ? new CoreController(name, this.roles[1]) : RealestOuchea;                        

                    }else{

                        RealestOuchea = RealestOuchea == null ? new CoreController(name, this.roles[0]) : RealestOuchea;  

                    }

                })
            });

        }else{
            process.stdout.write("You aint gon get shhh cuz");
            process.exit('newbie');
        }
       

    }

    //closing command
    AppClosal(){

        process.on('exit', (command)=>{

            if(command == 'newbie'){
                console.log('do you know what u doing bro');
            }else{
                console.log('you just kicked out bro');
            }

        });

    }

    async startAutodayo(){

        
        console.log("you are ");

        /*
        RL.question('its your boy autodayo ouchea', (response)=>{

            let crREsponse = response;


        });*/


    }
    
 }

 module.exports = CoreController;