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
    db.query(sql, params, (err, res) => {});
});

const getDepartmentCost = `
SELECT departments.name AS department, SUM(roles.salary) AS cost 
FROM employees
LEFT JOIN roles ON role_id = roles.id
LEFT JOIN departments ON roles.department_id = departments.id 
GROUP BY department`;

departmentDestroyPrompt = [
    {
        type: 'list',
        name: 'destroyDepartment',
        message: 'Which department would you like to remove?',
        choices: ['Sales', 'Engineering', 'Finance', 'Legal', 'Human Resources']
    }
];

departmentDestroyInsert = (({ destroyDepartment }) => {
    const sql = `DELETE FROM departments WHERE name = ?`;
    const params = [destroyDepartment];
    db.query(sql, params, (err, res) => {});
});

module.exports = {
    departmentSelect,
    departmentPrompt,
    departmentInsert,
    getDepartmentCost,
    departmentDestroyPrompt,
    departmentDestroyInsert
};