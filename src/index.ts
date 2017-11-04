import { UserService } from './service';
import './index.css';

window.onload = async () => {
  const service = new UserService();
  const users = await service.getUsersAsync();
  const usersBody = users.map((user) => {
    return `
    <tr>
      <td>
          <a href="#" data-id="${user.id}" class="deleteUser">Delete</a>
      </td>
      <td>${user.id}</td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.email}</td>
    </tr>
    `;
  }).join('');

  const el = document.getElementById('users');

  el!.innerHTML = usersBody;

};


