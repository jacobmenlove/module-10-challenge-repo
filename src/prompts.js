const inquirer = require('inquirer');
const { viewAllDepartments, addDepartment } = require('../queries/departmentQueries');
const { viewAllRoles, addRole } = require('../queries/roleQueries');
const { viewAllEmployees, addEmployee, updateEmployeeRole } = require('../queries/employeeQueries');

async function mainMenu() {
    const { choice } = await inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'What would you like to do?',
            choices: [
                'View All Departments',
                'View All Roles',
                'View All Employees',
                'Add Department',
                'Add Role',
                'Add Employee',
                'Update Employee Role',
                'Exit',
            ],
        },
    ]);

    switch (choice) {
        case 'View All Departments':
            await viewAllDepartments();
            break;
        case 'Add Department':
            const { departmentName } = await inquirer.prompt({ type: 'input', name: 'departmentName', message: 'Enter department name:' });
            await addDepartment(departmentName);
            break;
        case 'View All Roles':
            await viewAllRoles();
            break;
        case 'Add Role':
            const { title, salary, department_id } = await inquirer.prompt([
                { type: 'input', name: 'title', message: 'Enter role title:' },
                { type: 'input', name: 'salary', message: 'Enter role salary:' },
                { type: 'input', name: 'department_id', message: 'Enter department ID for role:' },
            ]);
            await addRole(title, salary, department_id);
            break;
        case 'View All Employees':
            await viewAllEmployees();
            break;
        case 'Add Employee':
            const { first_name, last_name, role_id, manager_id } = await inquirer.prompt([
                { type: 'input', name: 'first_name', message: 'Enter employee first name:' },
                { type: 'input', name: 'last_name', message: 'Enter employee last name:' },
                { type: 'input', name: 'role_id', message: 'Enter role ID for employee:' },
                { type: 'input', name: 'manager_id', message: 'Enter manager ID for employee (optional):' },
            ]);
            await addEmployee(first_name, last_name, role_id, manager_id || null);
            break;
        case 'Update Employee Role':
            const { employee_id, new_role_id } = await inquirer.prompt([
                { type: 'input', name: 'employee_id', message: 'Enter employee ID to update:' },
                { type: 'input', name: 'new_role_id', message: 'Enter new role ID:' },
            ]);
            await updateEmployeeRole(employee_id, new_role_id);
            break;
        case 'Exit':
            console.log('Exiting application.');
            process.exit();
    }

    mainMenu();
}

module.exports = { mainMenu };
