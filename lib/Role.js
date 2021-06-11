const db = require('../db/connection.js');

const roleSelect = `SELECT roles.id, roles.title, roles.salary, departments.name
AS department
FROM roles
LEFT JOIN departments
ON roles.department_id = departments.id`;

// const arrayizeDept = () => {
//     let dept = [];
//     db.query(`SELECT name FROM departments`, (req, res) => {
//         dept.push(res)
//     })
//     return dept;
// };


// db.query("SELECT * FROM departments", function (err, result, fields) {
//     Object.keys(result).forEach(function(key) {
//         var row = result[key];
//         return(JSON.stringify(row.name))
//     });
// });

// var departmentData = [
//     {
//         name: db.query("SELECT name FROM departments", (req, res) => {return res}),
//         value: db.query(`SELECT id FROM departments`, (req, res) => {return res})
//     }
// ]

// const deptArray = () => {
//     db.query(`SELECT id AS value, name FROM departments`, (req, res) => {
//         Object.values(JSON.parse(JSON.stringify(res)))
//     })
// }


const rolePrompt = [
    {
        type: 'input',
        name: 'roleName',
        message: 'What is the role name?'
    },
    {
        type: 'input',
        name: 'salary',
        message: 'What is the salary? (Enter a NUMBER)'
    },
    {
        type: 'list',
        name: 'department',
        message: 'In which department is this role?',
        choices: ['Sales', 'Engineering', 'Finance', 'Legal', 'Human Resources']
    }
];

const roleInsert = (({ roleName, salary, department }) => {
    const sql = `INSERT INTO roles (title, salary, department_id) VALUES (?, ?, (SELECT id FROM departments WHERE name = ?))`;
    const params = [roleName, salary, department];
    db.query(sql, params);
})

module.exports = {
    roleSelect,
    rolePrompt,
    roleInsert
};