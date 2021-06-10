const db = require('../db/connection.js');

const departmentSelect = `SELECT * FROM departments`;

const departmentPrompt = [
    {
        type: 'input',
        name: 'deptName',
        message: 'What is the department name?'
    }
];

const departmentInsert = (({ deptName }) => {
    const sql = `INSERT INTO departments (name) VALUES (?)`;
    const params = deptName;
    db.query(sql, params, (err, res) => {
        console.log(`Successfully added ${deptName} to departments`);
    });
});

module.exports = {
    departmentSelect,
    departmentPrompt,
    departmentInsert
};