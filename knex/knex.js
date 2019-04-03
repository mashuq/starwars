const knexMmysql = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : 'r00t@pa55w0rD_',
      database : 'starwars'
    }
});

var knexPostgres = require('knex')({
  client: 'pg',
  connection: 'postgres://postgres:postgres@localhost:5432/starwars',
  searchPath: ['starwars'],
});


module.exports = knexMmysql;