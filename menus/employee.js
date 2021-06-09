const db = require('../db/connection');
const inquirer = require('inquirer');
require('console.table');

// managers

const viewAll = () => {
    const sql = `
    SELECT a.first_name, a.last_name, b.first_name b.last_name AS manager
    FROM employees a
    LEFT JOIN employees b ON a.manager_id = b.id
    `;
    // const sql = `
    // SELECT employees.id, employees.first_name, employees.last_name, roles.title AS role, roles.salary AS salary, departments.name AS department
    // FROM employees
    // LEFT JOIN roles ON employees.role_id = roles.id
    // LEFT JOIN departments ON roles.department_id = departments.id`;
    db.query(sql, (err, result) => console.table(result));
}

const add = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the employee name?'
        }
    ])
}

const updateRole = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'newRole',
            message: 'Which employee would you like to update?',
            choices: [
            ]
        }
    ])
}

module.exports = {
    viewAll,
    add,
    updateRole
};