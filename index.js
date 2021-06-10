const db = require('./db/connection.js');
const mainMenu = require('./lib/prompt.js');

db.connect(err => {
    if (err) throw err;
})

mainMenu();