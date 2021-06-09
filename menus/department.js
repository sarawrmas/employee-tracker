const db = require('../db/connection');
const inquirer = require('inquirer');
require('console.table');

const viewAll = () => {
    const sql = `SELECT * FROM departments`;
    db.query(sql, (err, result) => console.table(result));
}

const add = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'deptName',
            message: 'What is the department name?'
        }
    ])
    .then(deptName => {
        const sql = `INSERT INTO departments (name) VALUES (?)`;
        const params = [deptName];
        db.query(sql, params, (err, res) => {
            console.log('Added')
        })
    })
}

module.exports = {
    viewAll,
    add
};