const mysql = require('think-model-mysql');

module.exports = {
    handle: mysql,
    database: 'dabai',
    prefix: 'hiolabs_',
    encoding: 'utf8mb4',
    host: '182.61.145.106',
    port: '3306',
    user: 'rdsroot',
    password: 'cb9wUC#0',
    dateStrings: true
};
