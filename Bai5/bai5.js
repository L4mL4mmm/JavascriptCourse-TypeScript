"use strict";
// Bai5/bai5.ts
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    displayInfo() {
        console.log(`Nhân viên: ${this.name} - Lương: ${this.salary}$`);
    }
}
const emp = new Employee("Lương Anh Minh", 2500);
emp.displayInfo();
//console.log(emp.salary);
