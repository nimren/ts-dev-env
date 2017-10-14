import Service from './service';
export interface IUserApi {
  getUsersAsync(): Promise<User[]>;
  deleteUserAsync(id:number): Promise<boolean>;
}

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export class User implements IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;

  constructor(user: IUser) {
    this.id = user.id;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.email = user.email;
  }
}

export class UserApi implements IUserApi {
  baseUrl: string = "http://localhost:1338";

  public async getUsersAsync(): Promise<User[]> {
    return new Promise<User[]>(async (resolve, reject) => {
      try {
        const res = await Service.getAsync(`${this.baseUrl}/user`);
        const json = await res.json() as Array<User>;
        const users = json.map(user => new User(user));
        resolve(users);
      } catch (error) {
        reject(error);
      }
    });
  }

  public async deleteUserAsync(id:number): Promise<boolean> {
    return new Promise<boolean>(async (resolve, reject) => {
      try {
        const res: Response = await this.delAsync(`users/${id}`);
        if(res.ok) {
          resolve(true);
        }else {
          reject(false);
        }
      } catch (error) {
        reject(error);
      }
    });
  }

  private getAsync(route: string): Promise<Response> {
    return fetch(`${this.baseUrl}${route}`);
  }

  private delAsync(route: string): Promise<Response>{
    const req: Request = new Request(`${this.baseUrl}${route}`, {
      method: "DELETE"
    });

    return fetch(req);
  }
}
