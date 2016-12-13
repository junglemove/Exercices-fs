/**
 * Created by Administrateur on 13/12/2016.
 */
const logger = require('./logger');

const mylog = new logger({
    file: 'Exercices-fs/app.log'
});

//logger.file = 'app.log';
//logger.log('Un message');

mylog.log('Un message');

// 2 - Réécrire de maniere asynchrone
// 3 - npm install fs-promise
// réécrire avec des promesses

