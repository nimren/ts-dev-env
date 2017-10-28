import { IUser, User } from "./../models";
import Service from "./service";

export interface IUserApi {
  getUsersAsync(): Promise<User[]>;
  deleteUserAsync(id: number): Promise<boolean>;
}

export class UserApi implements IUserApi {
  private baseUrl: string = "http://localhost:1338";

  public async getUsersAsync(): Promise<User[]> {
      try {
        const res = await Service.getAsync<IUser[]>(`${this.baseUrl}/users`);
        return res.data.map((user) => new User(user));

      } catch (error) {
        // log error
      }

      return new Array<User>();
  }

  public async deleteUserAsync(id: number): Promise<boolean> {
    try {
      const res = await Service.delAsync(`${this.baseUrl}/users/${id}`);
      return true;

    } catch (error) {
      // log error
    }

    return false;
  }
}
