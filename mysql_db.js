const mysql = require('mysql')

const url = require('url');

var pool = mysql.createPool({
        connectionLimit : 10,
        host     : 'localhost',
        user     : 'root',
        password : '9203skin22',
        database : 'firsttesting'
    });


pool.on('error', function (err) {

  console.log('idle client error', err.message, err.stack);
});


const teachersModelsFunction = require('./models/modelsIndex.js');
const teachersModelsObject = teachersModelsFunction(pool)


module.exports = {
    queryInterface: (text, params, callback) => {
        return pool.query(text, params, callback);
      },

    pool:pool,

    teachers: teachersModelsObject
};