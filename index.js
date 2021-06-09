const db = require('./db/connection.js');
// const inquirer = require('inquirer');
const Prompt = require('./lib/Prompt.js');

// const department = require('./menus/department.js');
// const role = require('./menus/role.js');
// const employee = require('./menus/employee.js');

db.connect(err => {
    if (err) throw err;
})

// const mainMenu = () => {
//     return inquirer.prompt([
//         {
//             type: 'list',
//             name: 'menu',
//             message: 'What would you like to do?',
//             choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']
//         }
//     ])
//     .then(({ menu }) => {
//         if (menu === 'View all departments') {
//             department.viewAll();
//         }
//         if (menu === 'View all roles') {
//             role.viewAll();
//         }
//         if (menu === 'View all employees') {
//             employee.viewAll();
//         }
//         if (menu === 'Add a department') {
//             department.add();
//         }
//         if (menu === 'Add a role') {
//             role.add();
//         }
//         if (menu === 'Add an employee') {
//             employee.add();
//         }
//         if (menu === 'Update an employee role') {
//             employee.updateRole();
//         }
//     })
// }

new Prompt().mainMenu();