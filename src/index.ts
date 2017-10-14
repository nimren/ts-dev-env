import {UserApi, IUserApi, IUser} from "./api/userApi";
import "./index.css";


window.onload = async () => {
  const userApi: IUserApi = new UserApi();
  const users = await userApi.getUsersAsync();

  let usersBody: string[] = [];

  users.forEach(user => usersBody.push(`
      <tr>
        <td>
            <a href="#" data-id="${user.id}" class="deleteUser">Delete</a>
        </td>
        <td>${user.id}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
      </tr>
    `)
  );

  const el = document.getElementById("users");

  if(el) {
    el.innerHTML = usersBody.join("");
  }
};


