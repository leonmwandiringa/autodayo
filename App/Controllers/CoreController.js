/**
 * @author Leon Mwandiringa
 * @uses starting point for app
 * @return global control
 * @comment singularity baby
 */
let rL = require('readline');
let { Greetings } = require("../Helpers");
const RL = rL.createInterface(process.stdin, process.stdout);

const projectId = 'autodayo-c177f';
const sessionId = '20761ae55a113309d034e38e97b94147e663087f';
const query = 'hello';
const languageCode = 'en-US';

// Instantiate a DialogFlow client.
const dialogflow = require('dialogflow');
const sessionClient = new dialogflow.SessionsClient();
 
// Define session path
const sessionPath = sessionClient.sessionPath(projectId, sessionId);

const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: query,
        languageCode: languageCode,
      },
    },
  };

let RealestOuchea = null;
let roles = ['SIMPLE-JOE', 'SAIYAN-MODE', 'GOD-MODE'];
 class CoreController{

    constructor(mode){
        this.mode = mode;
        this.username;


    }

    //starter
    static startApp(){
        
        let index = process.argv.map((value)=>{
            return String(value.trim().toUpperCase);
        });

        let commandflag = process.argv.indexOf('--init') != -1 ? true : false;
        let indexed = commandflag && process.argv.indexOf("autodayo") != -1? true : false;

        let mode = process.argv.indexOf('--mode') != -1 && process.argv[process.argv.indexOf('--mode')+1] != undefined ? process.argv[process.argv.indexOf('--mode')+1].toString().toUpperCase().trim() : 'SIMPLE-JOE';

        if(indexed){

            RealestOuchea = RealestOuchea == null ? new CoreController(mode) : RealestOuchea; 
            RealestOuchea.startAutodayo();


        }else{

            RealestOuchea = new CoreController('SIMPLE-JOE');
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

        RL.question('\n\r----'+this.mode+'-------\n\r'+Greetings[Math.floor(Math.random()*Greetings.length)]+',\n\r enter your username cuz\n\r', (response)=>{

            this.username = response.toString().trim();
            
            console.log(`Wasap ${this.username}`+'\n\r ?' );

            RL.on('line', (response)=>{

                let crREsponse = response;

                sessionClient
                .detectIntent(request)
                .then(responses => {
                    console.log('Detected intent');
                    const result = responses[0].queryResult;
                    console.log(`  Query: ${result.queryText}`);
                    console.log(`  Response: ${result.fulfillmentText}`);
                    if (result.intent) {
                    console.log(`  Intent: ${result.intent.displayName}`);
                    } else {
                    console.log(`  No intent matched.`);
                    }
                })
                .catch(err => {
                    console.error('ERROR:', err);
                });
                
                RL.setPrompt(`Wasap ${this.username}`+'\n\r');
                RL.prompt();

            });

        });


    }
    
 }

 module.exports = CoreController;