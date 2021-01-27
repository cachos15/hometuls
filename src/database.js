const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
        host: 'localhost',
        user:'root',
        password:'',
        database: 'hometuls'
})

mysqlConnection.connect(function (e){
    if (e){
        console.log(e);
        return;
    }
    else{
        console.log('Base de datos conectada');
    }
})

module.exports = mysqlConnection;