// const Company = require('./Company.js');

class Role {
    constructor(title, salary, department) {
        // super(name);
        this.title = title;
        this.salary = salary;
        this.department = department;
        this.sql = `
        SELECT roles.id, roles.title, roles.salary, departments.name
        AS department
        FROM roles
        LEFT JOIN departments
        ON roles.department_id = departments.id`;
    }
};

module.exports = Role;

// const db = require('../db/connection');
// const inquirer = require('inquirer');
// require('console.table');

// const viewAll = () => {
    // const sql = `
    // SELECT roles.id, roles.title, roles.salary, departments.name
    // AS department
    // FROM roles
    // LEFT JOIN departments
    // ON roles.department_id = departments.id`;
//     db.query(sql, (err, result) => console.table(result));
// }

// const add = () => {
//     return inquirer.prompt([
//         {
//             type:'input',
//             name: 'name',
//             message: 'What is the role name?'
//         }
//     ])
// }

// module.exports = {
//     viewAll,
//     add
// };