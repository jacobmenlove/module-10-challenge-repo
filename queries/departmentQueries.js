const pool = require('../config/db');

async function viewAllDepartments() {
    const { rows } = await pool.query('SELECT * FROM department');
    console.table(rows);
}

async function addDepartment(name) {
    await pool.query('INSERT INTO department (name) VALUES ($1)', [name]);
    console.log(`Department "${name}" added successfully.`);
}

module.exports = { viewAllDepartments, addDepartment };
