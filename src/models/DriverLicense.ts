import { Document } from "./Document";

export class DriverLicense extends Document {
  constructor(
    public readonly dateOfBirth: Date,
    firstName: string,
    lastName: string,
    private _address: string,
    issueDate: Date,
    expiryDate: Date,
    public readonly licenseNumber: string
  ) {
    super(DriverLicense.generateId(), firstName, lastName, issueDate, expiryDate);
  }

  getDocumentType(): string {
    return "Driver License";
  }

  private static generateId(): string {
    return `ID-${Math.floor(Math.random() * 100000).toString().padStart(5, "0")}`;
  }

  toString(): string {
    return `Driver License:
  ID: ${this.id}
  Name: ${this.firstName} ${this.lastName}
  Address: ${this._address}
  Date of Birth: ${this.formatDate(this.dateOfBirth)}
  Issue Date: ${this.formatDate(this.issueDate)}
  Expiry Date: ${this.formatDate(this.expiryDate)}
  License Number: ${this.licenseNumber}
  Is Valid: ${this.isValid()}`;
  }

  get address(): string {
    return this._address;
  }
  set address(value: string) {
    if (value.length < 5) throw new Error("Address must be at least 5 characters long.");
    this._address = value;
  }

  protected validateDocument(): boolean {
    return super.validateDocument() && this._address.length >= 5 && this.dateOfBirth < new Date();
  }
}
