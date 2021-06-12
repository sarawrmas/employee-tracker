const inquirer = require('inquirer');
const { departmentSelect, departmentPrompt, departmentInsert, getDepartmentCost, departmentDestroyPrompt, departmentDestroyInsert } = require('./department.js');
const { roleSelect, rolePrompt, roleInsert, roleDestroyPrompt, roleDestroyInsert } = require('./role.js');
const { employeeByManager, employeeByDepartment, employeePrompt, employeeInsert, employeeUpdatePrompt, employeeUpdateReturn, employeeDestroyPrompt, employeeDestroyInsert } = require('./employee.js');
const db = require('../db/connection.js');

const mainMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'What would you like to do?',
            choices: [
                new inquirer.Separator('-----VIEW TABLES-----'),
                'View all departments',
                'View all roles',
                'View all employees by manager',
                'View all employees by department',
                'View utilized budget by department',
                new inquirer.Separator('-----ADD TO TABLES-----'),
                'Add a department',
                'Add a role',
                'Add an employee',
                new inquirer.Separator('-----UPDATE TABLES-----'),
                'Update an employee role',
                new inquirer.Separator('-----REMOVE COLUMNS FROM TABLES-----'),
                'Remove a department',
                'Remove a role',
                'Remove an employee'
            ]
        }
    ])
    .then(({ menu }) => {
        if (menu === 'View all departments') {viewAll(departmentSelect)}
        if (menu === 'View all roles') {viewAll(roleSelect)}
        if (menu === 'View all employees by manager') {viewAll(employeeByManager)}
        if (menu === 'View all employees by department') {viewAll(employeeByDepartment)}
        if (menu === 'View utilized budget by department') {viewAll(getDepartmentCost)}
        if (menu === 'Add a department') {add(departmentPrompt, departmentInsert)}
        if (menu === 'Add a role') {add(rolePrompt, roleInsert)}
        if (menu === 'Add an employee') {add(employeePrompt, employeeInsert)}
        if (menu === 'Update an employee role') {update(employeeUpdatePrompt, employeeUpdateReturn)}
        if (menu === 'Remove a department') {remove(departmentDestroyPrompt, departmentDestroyInsert)}
        if (menu === 'Remove a role') {remove(roleDestroyPrompt, roleDestroyInsert)}
        if (menu === 'Remove an employee') {remove(employeeDestroyPrompt, employeeDestroyInsert)}
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

const update = (promptQuestions, updateSql) => {
    return inquirer.prompt(promptQuestions)
    .then(updateSql)
    .then(mainMenu)
};

const remove = (promptQuestions, deleteSql) => {
    return inquirer.prompt(promptQuestions)
    .then(deleteSql)
    .then(mainMenu)
};

module.exports = mainMenu;