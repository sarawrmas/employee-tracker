class Department {
    constructor(name) {
        this.name = name;
        this.sql = `SELECT * FROM departments`;
    }
};

module.exports = Department;

// const db = require('../db/connection');
// const inquirer = require('inquirer');
// // require('console.table');
// // const mainMenu = require('../index.js');
// const Company = require('./Company.js');

// class Department extends Company {
//     constructor(name) {
//         super(name);
//         // this.sql = `SELECT * FROM departments`;
//     }

//     // addDepartment() {
//     //     return inquirer.prompt([
//     //         {
//     //             type: 'input',
//     //             name: 'deptName',
//     //             message: 'What is the department name?'
//     //         }
//     //     ])
//         // .then(({ deptName }) => {
//         //     const sql = `INSERT INTO departments (name) VALUES (?)`;
//         //     const params = deptName;
//         //     db.query(sql, params, (err, res) => {
//         //         console.log(`Successfully added ${deptName} to departments`);
//         //     });
//         // })
//     // }
// };

// module.exports = Department;

// class Department {
//     constructor(name) {
//         this.name = name;
//     }
//     viewAll() {
//         const sql = `SELECT * FROM departments`;
//         db.query(sql, (err, result) => console.table(result));
//     }

//     add() {
        // return inquirer.prompt([
        //     {
        //         type: 'input',
        //         name: 'deptName',
        //         message: 'What is the department name?'
        //     }
        // ])
        // .then(({ deptName }) => {
        //     const sql = `INSERT INTO departments (name) VALUES (?)`;
        //     const params = deptName;
        //     db.query(sql, params, (err, res) => {
        //         console.log(`Successfully added ${deptName} to departments`);
        //     });
        // })
//     }
// }

// const viewAll = () => {
//     const sql = `SELECT * FROM departments`;
//     db.query(sql, (err, result) => console.table(result));
// }

// const add = () => {
//     return inquirer.prompt([
//         {
//             type: 'input',
//             name: 'deptName',
//             message: 'What is the department name?'
//         }
//     ])
//     .then(({ deptName }) => {
//         const sql = `INSERT INTO departments (name) VALUES (?)`;
//         const params = deptName;
//         db.query(sql, params, (err, res) => {
//             console.log(`Successfully added ${deptName} to departments`);
//         });
//     })
// };

// module.exports = {
//     viewAll,
//     add
// };