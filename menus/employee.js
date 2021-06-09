const db = require('../db/connection');
const inquirer = require('inquirer');
require('console.table');

const viewAll = () => {
    const sql = `
    SELECT a.id, a.first_name, a.last_name, roles.title AS role, departments.name AS department, roles.salary AS salary, CONCAT_WS(' ', b.first_name, b.last_name) AS manager
    FROM employees a
    LEFT JOIN employees b ON a.manager_id = b.id
    LEFT JOIN roles ON a.role_id = roles.id
    LEFT JOIN departments ON roles.department_id = departments.id`;
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