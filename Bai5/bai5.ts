// Bai5/bai5.ts
class Employee {
    public name: string;
    private salary: number;

    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }

    public displayInfo(): void {
        console.log(`Nhân viên: ${this.name} - Lương: ${this.salary}$`);
    }
}

const emp = new Employee("Lương Anh Minh", 2500);
emp.displayInfo();

//console.log(emp.salary);