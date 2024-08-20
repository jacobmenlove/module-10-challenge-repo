const { Client } = require('pg');

const client = new Client({
  user: 'your_user',
  host: 'localhost',
  database: 'employee_db',
  password: 'your_password',
  port: 5432,
});

client.connect();

module.exports = client;
