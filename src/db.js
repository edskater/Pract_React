const { Pool } = require('pg')

const pool   = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'tasksdb',
    password: 'Durango97',
    port: 5432, // el puerto predeterminado de PostgreSQL
});

module.exports = pool;