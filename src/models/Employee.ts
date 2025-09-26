import { Person } from "./Person";

export class Employee extends Person {
  constructor(
    name: string,
    age: number,
    private position: string
  ) {
    super(name, age);
  }

  public getInfo(): string {
    return `${this.getName()} (${this.getAge()} years) works as ${this.position}`;
  }
}
