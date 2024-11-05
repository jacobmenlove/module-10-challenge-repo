# module-10-challenge-repo

# Employee Tracker
- Description:
The Employee Tracker is a command-line application designed to manage a company's employee database. Built with Node.js, Inquirer, and PostgreSQL, this application allows users to interact with employee data in a user-friendly way, enabling CRUD operations for departments, roles, and employees. This project is ideal for business owners or HR teams who need a structured system to organize and plan employee roles, departments, and salaries effectively.

# Table of Contents
Description
Installation
Usage
Features
Database Schema
Demo
Technologies

# Installation
To install and set up the Employee Tracker application, follow these steps:

- Clone the repository:

bash
git clone https://github.com/jacobmenlove/module-10-challenge-repo
Navigate into the project folder:

bash
cd employee-tracker

- Install dependencies:
bash
npm install
Set up environment variables:

Create a .env file in the root of the project and add your PostgreSQL configuration. Use this format:

plaintext
Copy code
DB_USER=yourUsername
DB_HOST=localhost
DB_NAME=employee_db
DB_PASS=yourPassword
DB_PORT=5432
Replace yourUsername, yourPassword, and other details with your actual PostgreSQL credentials.

- Set up the database:

Open the PostgreSQL command-line interface:

bash
psql -U yourUsername
Create the database:
sql
CREATE DATABASE employee_db;

Run the seed file to create tables and insert sample data:
bash
psql -U yourUsername -d employee_db -f db/seeds.sql

# Usage

- To start the Employee Tracker application:

bash
node src/app.js

Available Options
Once the application starts, you’ll be presented with a menu offering the following options:

- View All Departments - Displays a table of all departments.

- View All Roles - Displays job titles, department affiliations, and salaries for all roles.

- View All Employees - Displays employees along with their ID, names, job titles, departments, salaries, and managers.

- Add Department - Prompts the user to enter a new department name, then adds it to the database.

- Add Role - Prompts for role title, salary, and associated department, then adds the role to the database.

- Add Employee - Prompts for employee details including name, role, and manager, then adds the employee to the database.

- Update Employee Role - Allows updating the role of an existing employee.

# Features

- Command-line Interface: Interact with the database directly from the command line.

- Data Organization: Manage company departments, employee roles, and reporting structure.

- CRUD Operations: Create, read, update, and delete departments, roles, and employees.

- User-Friendly Prompts: Uses Inquirer to create an intuitive experience for users to input data.

- Database Schema
The PostgreSQL database schema for the Employee Tracker consists of three tables:

department

id: Unique identifier for each department.
name: Name of the department.
role

id: Unique identifier for each role.
title: Job title.
salary: Salary for the role.
department_id: Foreign key referencing the id in the department table.
employee

id: Unique identifier for each employee.
first_name: First name of the employee.
last_name: Last name of the employee.
role_id: Foreign key referencing the id in the role table.
manager_id: Foreign key referencing the id in the employee table to establish a manager-subordinate relationship.

Demo
A walkthrough video demonstrating the full functionality of the Employee Tracker application is available here: https://www.youtube.com/watch?v=a_qC4a8T1ds 

The video covers:

Starting the application.
Viewing departments, roles, and employees.
Adding new departments, roles, and employees.
Updating an employee's role.

# Technologies
Node.js - JavaScript runtime for executing the application.
Inquirer - Package for creating interactive command-line prompts.
PostgreSQL - Relational database to store and manage data.
pg - Node.js client for PostgreSQL, used for database queries.
dotenv - Module for managing environment variables securely.