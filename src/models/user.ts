export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export class User implements IUser {
  public id: number;
  public firstName: string;
  public lastName: string;
  public email: string;

  constructor({ id, firstName, lastName, email }: IUser) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
}
