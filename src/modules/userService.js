import { getData, setData } from './helpers';

getData
export class UserService {
  getUsers() {
    return getData('http://localhost:4545/users');
  }

  getUser(id) {
    return getData(`http://localhost:4545/users/${id}`);
  }

  filterUsers(filterOption) {
    return getData(`http://localhost:4545/users?${filterOption}=1`);
  }

  getSortUsers(sortOption) {
    return getData(`http://localhost:4545/users?_sort=${sortOption.name}&_order=${sortOption.value}`);
  }

  getSearchUsers(str) {
    return getData(`http://localhost:4545/users?name_like=${str}`);
  }

  addUser(user) {
    const param = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    };

    return setData('http://localhost:4545/users', param);
  }

  removeUser(id) {
    const param = {
      method: 'DELETE',
    };

    return setData(`http://localhost:4545/users/${id}`, param);
  }

  changeUser(id, data) {
    const param = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    return setData(`http://localhost:4545/users/${id}`, param);
  }

  editUser(id, user) {
    const param = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    };
    
    return fetch(`http://localhost:4545/users/${id}`, param);
  }
}