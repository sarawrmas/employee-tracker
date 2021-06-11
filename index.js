const db = require('./db/connection.js');
const mainMenu = require('./lib/prompt.js');

db.connect(err => {
    if (err) throw err;
})

// const inquirer = require('inquirer');

// return inquirer.prompt([
//     {
//         type: 'input',
//         name: 'roleName',
//         message: 'What is the role name?'
//     },
//     {
//         type: 'input',
//         name: 'salary',
//         message: 'What is the salary? (Enter a NUMBER)'
//     },
//     {
//         type: 'list',
//         name: 'department',
//         message: 'In which department is this role?',
//         // TO DO: ADD CHOICES!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//         choices: [
//             { id: 1, name: 'Sales' },
//             { id: 2, name: 'Engineering' },
//             { id: 3, name: 'Finance' },
//             { id: 4, name: 'Legal' },
//             { id: 5, name: 'Human Resources' }
//         ]
//     }
// ])
// .then(({ roleName, salary, department }) => {
//     const sql = `INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)`;
//     const params = [roleName, salary, department.id];
//     db.query(sql, params);
// })

// db.query(`SELECT id AS value, name FROM departments`, (req, res) => {
//     console.log(Object.values(JSON.parse(JSON.stringify(res))))
// })


// db.query("SELECT * FROM departments", function (err, result, fields) {
//     Object.keys(result).forEach(function(key) {
//         var row = result[key];
//         console.log(JSON.stringify(row.name))
//     });
// });

// db.query(`SELECT * FROM departments`, (req, res) => {
//     console.log(Object.values(JSON.parse(JSON.stringify(res))))
// })

// const arrayizeDept = () => {
//     let dept = [];
//     db.query(`SELECT name FROM departments`, (req, res) => {
//         dept.push(res)
//     })
//     return dept;
// };

// console.log(arrayizeDept());

mainMenu();