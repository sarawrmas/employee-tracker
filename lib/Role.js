const db = require('../db/connection.js');

const roleSelect = `SELECT roles.id, roles.title, roles.salary, departments.name
AS department
FROM roles
LEFT JOIN departments
ON roles.department_id = departments.id`;

const rolePrompt = [
    {
        type: 'input',
        name: 'roleName',
        message: 'What is the role name?'
    },
    {
        type: 'input',
        name: 'salary',
        message: 'What is the salary?'
    },
    {
        type: 'list',
        name: 'department',
        message: 'In which department is this role?',
        choices: []
    }
];

const roleInsert = (({ roleName, salary, department }) => {
    const sql = `INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)`;
    const params = [roleName, salary, department];
    db.query(sql, params, (err, res) => {
        console.log(`Successfully added ${roleName} to roles`);
    });
})

module.exports = {
    roleSelect,
    rolePrompt,
    roleInsert
};