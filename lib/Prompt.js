const inquirer = require('inquirer');
const { departmentSelect, departmentPrompt, departmentInsert } = require('./department.js');
const { roleSelect, rolePrompt, roleInsert } = require('./role.js');
const { employeeSelect, employeePrompt, employeeInsert } = require('./employee.js');
const db = require('../db/connection.js');

const mainMenu = () => {
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
            viewAll(departmentSelect);
        }
        if (menu === 'View all roles') {
            viewAll(roleSelect);
        }
        if (menu === 'View all employees') {
            viewAll(employeeSelect);
        }
        if (menu === 'Add a department') {
            add(departmentPrompt, departmentInsert);
        }
        if (menu === 'Add a role') {
            add(rolePrompt, roleInsert);
        }
        if (menu === 'Add an employee') {
            add(employeePrompt, employeeInsert);
        }
    })
}

const viewAll = (viewSql) => {
    db.query(viewSql, (err, result) => console.table(result));
    setTimeout(mainMenu, 1000);
}

const add = (promptQuestions, insertSql) => {
    return inquirer.prompt(promptQuestions)
    .then(insertSql)
    .then(mainMenu)
};

module.exports = mainMenu;