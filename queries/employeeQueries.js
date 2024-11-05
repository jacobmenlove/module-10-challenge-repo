const pool = require('../config/db');

async function viewAllEmployees() {
    const { rows } = await pool.query(`
        SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, employee.manager_id
        FROM employee
        JOIN role ON employee.role_id = role.id
        JOIN department ON role.department_id = department.id
    `);
    console.table(rows);
}

async function addEmployee(first_name, last_name, role_id, manager_id) {
    await pool.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)', [first_name, last_name, role_id, manager_id]);
    console.log(`Employee "${first_name} ${last_name}" added successfully.`);
}

async function updateEmployeeRole(employee_id, role_id) {
    await pool.query('UPDATE employee SET role_id = $1 WHERE id = $2', [role_id, employee_id]);
    console.log(`Employee ID "${employee_id}" role updated successfully.`);
}

module.exports = { viewAllEmployees, addEmployee, updateEmployeeRole };
