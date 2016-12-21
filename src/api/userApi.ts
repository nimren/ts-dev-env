import "whatwg-fetch";

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
  baseUrl: string = "http://localhost:1338/";

  public async getUsersAsync(): Promise<User[]> {
    return new Promise<User[]>(async (resolve, reject) => {
      let users: User[] = [];
      try {
        const res: Response = await this.getAsync("users");
        const json: any[] = await res.json();
        users = json.map((user: IUser) => new User(user));
      } catch (error) {
        reject(error);
      }
      return resolve(users);
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
