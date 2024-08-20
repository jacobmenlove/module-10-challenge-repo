const inquirer = require('inquirer');
const queries = require('./lib/queries');

async function init() {
  const { action } = await inquirer.prompt({
    type: 'list',
    name: 'action',
    message: 'What would you like to do?',
    choices: [
      'View All Departments',
      'View All Roles',
      'View All Employees',
      'Add Department',
      'Add Role',
      'Add Employee',
      'Update Employee Role',
      'Exit'
    ]
  });

  switch (action) {
    case 'View All Departments':
      await queries.viewAllDepartments();
      break;
    case 'View All Roles':
      await queries.viewAllRoles();
      break;
    case 'View All Employees':
      await queries.viewAllEmployees();
      break;
    case 'Add Department':
      const { departmentName } = await inquirer.prompt({
        type: 'input',
        name: 'departmentName',
        message: 'Enter the name of the new department:'
      });
      await queries.addDepartment(departmentName);
      break;
    case 'Add Role':
      const { roleTitle, roleSalary, departmentId } = await inquirer.prompt([
        { type: 'input', name: 'roleTitle', message: 'Enter the role title:' },
        { type: 'number', name: 'roleSalary', message: 'Enter the role salary:' },
        { type: 'number', name: 'departmentId', message: 'Enter the department ID this role belongs to:' }
      ]);
      await queries.addRole(roleTitle, roleSalary, departmentId);
      break;
    case 'Add Employee':
      const { firstName, lastName, roleId, managerId } = await inquirer.prompt([
        { type: 'input', name: 'firstName', message: 'Enter the employee\'s first name:' },
        { type: 'input', name: 'lastName', message: 'Enter the employee\'s last name:' },
        { type: 'number', name: 'roleId', message: 'Enter the employee\'s role ID:' },
        { type: 'number', name: 'managerId', message: 'Enter the employee\'s manager ID (or leave blank):', default: null }
      ]);
      await queries.addEmployee(firstName, lastName, roleId, managerId);
      break;
    case 'Update Employee Role':
      const { employeeId, newRoleId } = await inquirer.prompt([
        { type: 'number', name: 'employeeId', message: 'Enter the employee ID you want to update:' },
        { type: 'number', name: 'newRoleId', message: 'Enter the new role ID for this employee:' }
      ]);
      await queries.updateEmployeeRole(employeeId, newRoleId);
      break;
    case 'Exit':
      process.exit();
  }

  init();
}

init();
