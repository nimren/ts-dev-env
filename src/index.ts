import {  IUserApi, UserApi } from "./api/userApi";
import "./index.css";
import { IUser } from "./models";

window.onload = async () => {
  const service = new UserApi();
  const users = await service.getUsersAsync();

  const usersBody: string[] = [];

  users.forEach((user) => usersBody.push(`
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


