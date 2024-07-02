
const addEmployeesBtn = document.querySelector('#add-employees-btn');

const employeesArr = [];
let next = true;
// Collect employee data
const collectEmployees = function () {

  while (next) {
    const fname = prompt('Enter your first name :');
    const lname = prompt('Enter your last name :');
    const sal = prompt('Enter your salary  :');

    const employee = {
      firstName: fname,
      lastName: lname,
      salary: parseFloat(sal)
    }

    employeesArr.push(employee);
    next = confirm('Do you wish to continue ?');
  }
  return employeesArr;
}

// Display the average salary
const displayAverageSalary = function (employeesArray) {

  const totalEmp = employeesArray.length;
  let totalSalary = 0;
  for (let emp of employeesArray) {
    totalSalary += emp.salary;
  }
  const avSalary = totalSalary / totalEmp;
  return avSalary;
}

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  const index = Math.floor(Math.random() * employeesArray.length);
  console.log(index);
  return employeesArray[index];
}


// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  const av = displayAverageSalary(employees);

  console.log(`the average salary is : ${av} $`);

  console.log('============================');

  const winner = getRandomEmployee(employees);
  console.log(`The winner is : ${winner.firstName} ${winner.lastName}`);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
