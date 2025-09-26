import { Employee } from "./models/Employee";
import { DriverLicense } from "./models/DriverLicense";

const emp = new Employee("John", 28, "Dev");
console.log(emp.getInfo());

console.log("\nCreating a Driver License...\n");

const driverLicense = new DriverLicense(
  new Date("1990-01-01"),
  "John",
  "Doe",
  "123 Main St",
  new Date("2022-01-01"),
  new Date("2032-01-01"),
  "DL-987654321"
);

driverLicense.print();
driverLicense.write();