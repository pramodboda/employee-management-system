export class Employee {
  id: number;
  firstName: string;
  lastName: string;
  emailId: string;
  gender: string;

  constructor(id: number, firstName: string, lastName: string, emailId: string, gender: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.emailId = emailId;
    this.gender = gender;
  }
}
