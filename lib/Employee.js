const db = require('../db/connection.js');

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
        choices: ['Salesperson', 'Sales Lead', 'Engineer', 'Lead Engineer', 'Accountant', 'Chief Financial Officer', 'Lawyer', 'Legal Team Lead', 'Human Resources Employee', 'Human Resources Director']
    },
    {
        type: 'confirm',
        name: 'confirmManager',
        message: 'Does this employee have a manager?',
        default: true
    },
    {
        type: 'list',
        name: 'manager',
        message: "Who is the employee's manager?",
        choices: ['Jon Donkowski', 'Mike Chan', 'Ashley Rodriguez', 'Kevin Tupik', 'Malia Brown', 'Sarah Lourd', 'Tom Allen', 'Jackie Meyer', 'Tyson Mack', 'Rebecca Flounder'],
        when: ({ confirmManager }) => {
            if (confirmManager) {
                return true;
            } else {
                return false;
            }
        }
    }
];

// const employeeArray = [
//     {id: 1, name: 'Jon Donkowski'},
//     {id: 2, name: 'Mike Chan'},
//     {id: 3, name: 'Ashley Rodriguez'},
//     {id: 4, name: 'Kevin Tupik'},
//     {id: 5, name: 'Malia Brown'},
//     {id: 6, name: 'Sarah Lourd'},
//     {id: 7, name: 'Tom Allen'},
//     {id: 8, name: 'Jackie Meyer'},
//     {id: 9, name: 'Tyson Mack'},
//     {id: 10, name: 'Rebecca Flounder'}
// ]



const employeeInsert = (({ first, last, role, manager, confirmManager }) => {
    let employeeManager;
    if (confirmManager === false) {
        employeeManager = null;
    } else {
        employeeManager = manager;
    }
    const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, (SELECT id FROM roles WHERE title = ?), ?)`;
    const params = [first, last, role, employeeManager];
    db.query(sql, params, (err, res) => {});
});

const employeeUpdatePrompt = [
    {
        type: 'list',
        name: 'employeeList',
        message: 'Which employee would you like to update?',
        choices: ['Jon Donkowski', 'Mike Chan', 'Ashley Rodriguez', 'Kevin Tupik', 'Malia Brown', 'Sarah Lourd', 'Tom Allen', 'Jackie Meyer', 'Tyson Mack', 'Rebecca Flounder']
    },
    {
        type: 'list',
        name: 'newRole',
        message: 'What is their new role?',
        choices: ['Salesperson', 'Sales Lead', 'Engineer', 'Lead Engineer', 'Accountant', 'Chief Financial Officer', 'Lawyer', 'Legal Team Lead', 'Human Resources Employee', 'Human Resources Director']
    }
]

const employeeUpdateReturn = (({ employeeList, newRole }) => {
        const sql = `UPDATE employees SET role_id = (SELECT id FROM roles WHERE title = ?) WHERE id = ?`;
        const params = [newRole, employeeList];
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