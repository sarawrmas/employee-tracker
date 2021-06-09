# Employee Tracker

## Acceptance Criteria
GIVEN a command-line application that accepts user input

<!-- WHEN I start the application  
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role -->

<!-- WHEN I choose to view all departments  
THEN I am presented with a formatted table showing department names and department ids -->

<!-- WHEN I choose to view all roles  
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role -->

<!-- WHEN I choose to view all employees  
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to -->

WHEN I choose to add a department  
THEN I am prompted to enter the name of the department and that department is added to the database

WHEN I choose to add a role  
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database

WHEN I choose to add an employee  
THEN I am prompted to enter the employee’s first name, last name, role, and manager and that employee is added to the database

WHEN I choose to update an employee role  
THEN I am prompted to select an employee to update and their new role and this information is updated in the database

## Installation
<!-- * MySQL2 package to connect to your MySQL database and perform queries
* Inquirer package to interact with the user via the command-line
* console.table package to print MySQL rows to the console -->
* Look into MySQL2's documentation to make your queries asynchronous (.promise() function on Connections to “upgrade” an existing non-Promise connection to use Promises)

## Schema (Tables)
<!-- **Department**
* id: INT PRIMARY KEY
* name: VARCHAR(30) to hold department name

**Role**
* id: INT PRIMARY KEY
* title: VARCHAR(30) to hold role title
* salary: DECIMAL to hold role salary
* department_id: INT to hold reference to department role belongs to

**Employee**
* id: INT PRIMARY KEY
* first_name: VARCHAR(30) to hold employee first name
* last_name: VARCHAR(30) to hold employee last name
* role_id: INT to hold reference to employee role
* manager_id: INT to hold reference to another employee that is manager of the current employee. This field might be null if the employee has no manager. -->

*You might want to use a separate file containing functions for performing specific SQL queries you'll need to use. A constructor function or class could be helpful for organizing these. You might also want to include a seeds.sql file to pre-populate your database. This will make the development of individual features much easier.

## Bonus
See if you can add some additional functionality to your application, such as the ability to do the following:

* Update employee managers.
* View employees by manager.
* View employees by department.
* Delete departments, roles, and employees.
* View the total utilized budget of a department—in other words, the combined salaries of all employees in that department.