const db = require('../db/connection.js');
const inquirer = require('inquirer');

const employeeSelect = `
SELECT a.id, a.first_name, a.last_name, roles.title AS role, departments.name AS department, roles.salary AS salary, CONCAT_WS(' ', b.first_name, b.last_name) AS manager
FROM employees a
LEFT JOIN employees b ON a.manager_id = b.id
LEFT JOIN roles ON a.role_id = roles.id
LEFT JOIN departments ON roles.department_id = departments.id`;

const employeePrompt = [
    {
        type: 'input',
        name: 'first',
        message: "What is the employee's first name?"
    },
    {
        type: 'input',
        name: 'last',
        message: "What is the employee's last name?"
    },
    {
        type: 'list',
        name: 'role',
        message: "What is the employee's role?",
        choices: []
    },
    {
        type: 'list',
        name: 'manager',
        message: "Who is the employee's manager?",
        choices: []
    }
];

const employeeInsert = (({ first, last, role, manager }) => {
    const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`;
    const params = [first, last, role, manager];
    db.query(sql, params, (err, res) => {
        console.log(`Successfully added ${first} ${last} to employees`);
    });
});

const employeeUpdatePrompt = [
    {
        type: 'list',
        name: 'employeeList',
        message: 'Which employee would you like to update?',
        choices: []
    },
    {
        type: 'list',
        name: 'newRole',
        message: 'What is their new role?',
        choices: []
    }
]

const employeeUpdateReturn = (({ employeeList, newRole }) => {
        const sql = `UPDATE employees SET role = ? WHERE id = ?`;
        const params = [employeeList, newRole];
        db.query(sql, params, (req, res) => {
            console.log(`Employee updated!`)
        })
});

module.exports = {
    employeeSelect,
    employeePrompt,
    employeeInsert,
    employeeUpdatePrompt,
    employeeUpdateReturn
};