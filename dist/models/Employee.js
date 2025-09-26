"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
const Person_1 = require("./Person");
class Employee extends Person_1.Person {
    constructor(name, age, position) {
        super(name, age);
        this.position = position;
    }
    getInfo() {
        return `${this.getName()} (${this.getAge()} years) works as ${this.position}`;
    }
}
exports.Employee = Employee;
//# sourceMappingURL=Employee.js.map