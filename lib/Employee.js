const db = require('../db/connection.js');
const inquirer = require('inquirer');

const employeeSelect = `
SELECT a.id, a.first_name, a.last_name, roles.title AS role, departments.name AS department, roles.salary AS salary, CONCAT_WS(' ', b.first_name, b.last_name) AS manager
FROM employees a
LEFT JOIN employees b ON a.manager_id = b.id
LEFT JOIN roles ON a.role_id = roles.id
LEFT JOIN departments ON roles.department_id = departments.id`;

const employeePrompt = [
    {
        type: 'input',
        name: 'first',
        message: "What is the employee's first name?"
    },
    {
        type: 'input',
        name: 'last',
        message: "What is the employee's last name?"
    },
    {
        type: 'list',
        name: 'role',
        message: "What is the employee's role?",
        // TO DO: ADD CHOICES!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        choices: ['Salesperson', 'Sales Lead', 'Engineer', 'Lead Engineer', 'Accountant', 'Chief Financial Officer', 'Lawyer', 'Legal Team Lead', 'Human Resources Employee', 'Human Resources Director']
    },
    {
        type: 'list',
        name: 'manager',
        message: "Who is the employee's manager?",
        // TO DO: ADD CHOICES!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        choices: ['Jon Donkowski', 'Mike Chan', 'Ashley Rodriguez', 'Kevin Tupik', 'Malia Brown', 'Sarah Lourd', 'Tom Allen', 'Jackie Meyer', 'Tyson Mack', 'Rebecca Flounder']
    }
];

const employeeInsert = (({ first, last, role, manager }) => {
    // let roleId;
    // for (r = 0; r < role.length; r++) {
    //     roleId = role[r] + 1;
    // }

    // let managerId;
    // for (m = 0; m < manager.length; m++) {
    //     managerId = manager[m] + 1;
    // }

    // let roleId;
    // if (role === 'Salesperson') {
    //     roleId = 1
    // }
    // if (role === 'Sales Lead') {
    //     roleId = 2
    // }
    // if (role === 'Engineer') {
    //     roleId = 3
    // }
    // if (role === 'Lead Engineer') {
    //     roleId = 4
    // }
    // if (role === 'Accountant') {
    //     roleId = 5
    // }
    // if (role === 'Chief Financial Officer') {
    //     roleId = 6
    // }
    // if (role === 'Lawyer') {
    //     roleId = 7
    // }
    // if (role === 'Legal Team Lead') {
    //     roleId = 8
    // }
    // if (role === 'Human Resources Employee') {
    //     roleId = 9
    // }
    // if (role === 'Human Resources Director') {
    //     roleId = 10
    // }
    const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`;
    const params = [first, last, roleId, managerId];
    db.query(sql, params, (err, res) => {
        console.log(`Successfully added ${first} ${last} to employees`);
    });
});

const employeeUpdatePrompt = [
    {
        type: 'list',
        name: 'employeeList',
        message: 'Which employee would you like to update?',
        // TO DO: ADD CHOICES!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        choices: ['Jon Donkowski', 'Mike Chan', 'Ashley Rodriguez', 'Kevin Tupik', 'Malia Brown', 'Sarah Lourd', 'Tom Allen', 'Jackie Meyer', 'Tyson Mack', 'Rebecca Flounder']
    },
    {
        type: 'list',
        name: 'newRole',
        message: 'What is their new role?',
        // TO DO: ADD CHOICES!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        choices: ['Salesperson', 'Sales Lead', 'Engineer', 'Lead Engineer', 'Accountant', 'Chief Financial Officer', 'Lawyer', 'Legal Team Lead', 'Human Resources Employee', 'Human Resources Director']
    }
]

const employeeUpdateReturn = (({ employeeList, newRole }) => {
        const sql = `UPDATE employees SET role = ? WHERE id = ?`;
        const params = [employeeList, newRole];
        db.query(sql, params, (req, res) => {
            console.log(`Employee updated!`)
        })
});

module.exports = {
    employeeSelect,
    employeePrompt,
    employeeInsert,
    employeeUpdatePrompt,
    employeeUpdateReturn
};