const pool = require('../config/db');

async function viewAllRoles() {
    const { rows } = await pool.query(`
        SELECT role.id, role.title, department.name AS department, role.salary
        FROM role
        JOIN department ON role.department_id = department.id
    `);
    console.table(rows);
}

async function addRole(title, salary, department_id) {
    await pool.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)', [title, salary, department_id]);
    console.log(`Role "${title}" added successfully.`);
}

module.exports = { viewAllRoles, addRole };
