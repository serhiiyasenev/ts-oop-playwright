import { Document } from "./Document";

export class Passport extends Document {
  constructor(
    firstName: string,
    lastName: string,
    public nationality: string,
    public passportNumber: string,
    public placeOfBirth: string,
    public dateOfBirth: Date,
    issueDate: Date,
    expiryDate: Date
  ) {
    super(Passport.generateId(), firstName, lastName, issueDate, expiryDate);
  }

  getDocumentType(): string {
    return "Passport";
  }

  private static generateId(): string {
    return `PS-${Math.floor(Math.random() * 100000).toString().padStart(6, "0")}`;
  }

  toString(): string {
    return `Passport:
  ID: ${this.id}
  Name: ${this.firstName} ${this.lastName}
  Nationality: ${this.nationality}
  Place of Birth: ${this.placeOfBirth}
  Date of Birth: ${this.formatDate(this.dateOfBirth)}
  Issue Date: ${this.formatDate(this.issueDate)}
  Expiry Date: ${this.formatDate(this.expiryDate)}
  Passport Number: ${this.passportNumber}
  Is Valid: ${this.isValid()}`;
  }
  
  protected validateDocument(): boolean {
    return (
      super.validateDocument() &&
      this.passportNumber.length >= 6 &&
      this.nationality.length >= 3 &&
      this.placeOfBirth.length >= 3 &&
      this.dateOfBirth < new Date()
    );
  }

  setPassportNumber(value: string): void {
    if (value.length < 6) throw new Error("Passport number must be at least 6 characters long.");
    this.passportNumber = value;
  }

    get getPassportNumber(): string {
        return this.passportNumber;
    }
}
