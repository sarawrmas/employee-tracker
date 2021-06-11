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
        choices: [
            'Sales', 'Engineering', 'Finance', 'Legal', 'Human Resources'
            // { id: 1, name: 'Sales' },
            // { id: 2, name: 'Engineering' },
            // { id: 3, name: 'Finance' },
            // { id: 4, name: 'Legal' },
            // { id: 5, name: 'Human Resources' }
        ]
    }
];

const roleInsert = (({ roleName, salary, department }) => {
    // let departmentId = department.id;

    let departmentId;
    if (department === 'Sales') {
        departmentId = 1
    }
    if (department === 'Engineering') {
        departmentId = 2
    }
    if (department === 'Finance') {
        departmentId = 3
    }
    if (department === 'Legal') {
        departmentId = 4
    }
    if (department === 'Human Resources') {
        departmentId = 5
    }

    // let departmentId = db.query(`SELECT id FROM departments WHERE name = '${department}'`);

    const sql = `INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)`;
    const params = [roleName, salary, departmentId];
    db.query(sql, params);
})

module.exports = {
    roleSelect,
    rolePrompt,
    roleInsert
};