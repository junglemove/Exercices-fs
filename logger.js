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



}

module.exports = logger;