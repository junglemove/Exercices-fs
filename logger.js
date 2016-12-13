/**
 * Created by Administrateur on 13/12/2016.
 */
const fs = require('fs');
const fsp = require('fs-promise');

class logger {
    constructor(options = {}){
        this.file = options.file || ""
    }

    log (msg) {
        fs.writeFileSync(this.file, msg);
    }

    logAsync (msg) {
        fs.writeFile(this.file+"Async", msg,()=>console.log("Async write file handled"))
    }

    logAsyncWithPromises(msg){
        fsp.writeFile(this.file+"Async", msg)
            .then(console.log("Return from promise"));
    }

    reset(){

    }

}

module.exports = logger;