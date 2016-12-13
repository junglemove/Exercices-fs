/**
 * Created by Administrateur on 13/12/2016.
 */
const logger = require('./logger');

const mylog = new logger({
    file: 'Exercices-fs/app.log'
});

//logger.file = 'app.log';
//logger.log('Un message');
console.log("Begin sync");
mylog.log('Un message');
console.log("End sync");

// 2 - Réécrire de maniere asynchrone
// 3 - npm install fs-promise
console.log("Begin async");
mylog.logAsync('Un message async');
console.log("End async");

// 4 - réécrire Asynch avec des promesses
mylog.logAsyncWithPromises('Un message aves promises');
