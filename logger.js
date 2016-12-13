/**
 * Created by Administrateur on 13/12/2016.
 */
const fs = require('fs');

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

}

module.exports = logger;