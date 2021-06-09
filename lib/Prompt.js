const inquirer = require('inquirer');
const db = require('../db/connection.js');
const Department = require('./Department.js');
const Role = require('./Role.js');
const Employee = require('./Employee.js');

function Prompt() {
    this.department;
    this.role;
    this.employee;
}

Prompt.prototype.mainMenu = function() {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'What would you like to do?',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']
        }
    ])
    .then(({ menu }) => {
        if (menu === 'View all departments') {
            this.viewAll("departments");
        }
        if (menu === 'View all roles') {
            this.role = new Role(menu);
            this.role.viewAll();
        }
        if (menu === 'View all employees') {
            this.employee = new Employee(menu);
            this.employee.viewAll();
        }
        if (menu === 'Add a department') {
            this.department = new Department(menu);
            this.addDepartment();
        }
    })
}

Prompt.prototype.viewAll = function(table) {
    const sql = `SELECT * FROM ${table}`;
    db.query(sql, (err, result) => console.table(result));
}

Prompt.prototype.addDepartment = function() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'deptName',
            message: 'What is the department name?'
        }
    ])
    .then(({ deptName }) => {
        const sql = `INSERT INTO departments (name) VALUES (?)`;
        const params = deptName;
        db.query(sql, params, (err, res) => {
            console.log(`Successfully added ${deptName} to departments`);
        });
        this.mainMenu();
    })
}

module.exports = Prompt;