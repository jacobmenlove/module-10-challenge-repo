require('dotenv').config();
const { Pool } = require('pg');  // Only define Pool once

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
});

console.log("Database User:", process.env.DB_USER);  // Check if this prints the correct DB_USER

module.exports = pool;
