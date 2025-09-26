import * as fs from "fs";

export abstract class Document {
  public readonly id: string;

  constructor(
    id: string,
    protected _firstName: string,
    protected _lastName: string,
    public issueDate: Date,
    public expiryDate: Date
  ) {
    this.id = id;
  }

  abstract getDocumentType(): string;

  isExpired(): boolean {
    return new Date() > this.expiryDate;
  }

  isValid(): boolean {
    return !this.isExpired() && this.validateDocument();
  }

  protected validateDocument(): boolean {
    return this._firstName.length >= 2 && this._lastName.length >= 2;
  }

  getRemainingValidityDays(): number {
    const today = new Date();
    const diff = this.expiryDate.getTime() - today.getTime();
    return Math.ceil(diff / (1000 * 3600 * 24));
  }

  protected formatDate(d: Date): string {
    return d
      .toLocaleDateString("uk-UA", { day: "2-digit", month: "2-digit", year: "numeric" })
      .replace(/\./g, "-");
  }

  print(): void {
    console.log(this.toString());
  }

  write(filePath: string = `./${this.id}.txt`): void {
    try {
      fs.writeFileSync(filePath, this.toString());
    } catch (err) {
      console.error("Error writing document:", err);
    }
  }

  getHolderInformation(): string {
    return `Holder: ${this._firstName} ${this._lastName}, ID: ${this.id}`;
  }

  get firstName(): string {
    return this._firstName;
  }
  set firstName(value: string) {
    if (value.length < 2) throw new Error("First name must be at least 2 characters long.");
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }
  set lastName(value: string) {
    if (value.length < 2) throw new Error("Last name must be at least 2 characters long.");
    this._lastName = value;
  }
}
