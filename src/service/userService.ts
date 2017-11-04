import { IUser, User } from './../models';
import { Service } from './service';

/**
 * User service
 */
export class UserService {
  private readonly baseUrl: string = 'http://localhost:1338';
  private service: Service;

  constructor() {
    this.service = new Service();
  }

  public async getUsersAsync(): Promise<User[]> {
    try {
      const response = await this.service.getAsync<IUser[]>(`${this.baseUrl}/users`);

      return response.data.map(user => new User(user));

    } catch (error) {
      // log error
    }

    return [];
  }

  public async deleteUserAsync(id: number): Promise<boolean> {
    try {
      const response = await this.service.delAsync(`${this.baseUrl}/users/${id}`);

      return true;
    } catch (error) {
      // log error
    }

    return false;
  }
}
