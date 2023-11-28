let employee = {
    firstName: 'Василий',
    lastName: 'Тёркин',
    age: '28',
}

function getFullName(employee) {
    return (employee.firstName + ' ' + employee.lastName);
}

const fullName = getFullName(employee);
console.log(fullName);