/*Реалізуй клас User. Під час створення екземпляру на базі цього класу, 
обʼєкт повинен мати вигляд {name: ‘Petro’, role: ‘admin’} (role може бути або admin або user). 
У разі невірно переданих даних такого об’єкта — попереджати за допомогою alert-у відповідне поле, яке введено некоректно. 
У класі User повинні бути такі компоненти: getName, getRole, login, logout, сhangeName, changePassword, 

У класі Admin повинні бути такі компоненти: addUser, removeUser, changeUserRole, getAllUsers, removeAllUsers*/

class User {
  constructor(name, role) {
    if (!this.validateRole(role)) {
      console.warn('Invalid role! Role should be either "admin" or "user".');
      return;
    }

    this.name = name;
    this.role = role;
    this.loggedIn = false;
    this.password = '';
  }

  validateRole(role) {
    return role === 'admin' || role === 'user';
  }

  getName() {
    return this.name;
  }

  getRole() {
    return this.role;
  }

  login() {
    this.loggedIn = true;
    console.log(`${this.name} logged in.`);
  }

  logout() {
    this.loggedIn = false;
    console.log(`${this.name} logged out.`);
  }

  changeName(newName) {
    this.name = newName;
    console.log(`Name changed to ${this.name}.`);
  }

  changePassword(newPassword) {
    this.password = newPassword;
    console.log(`${this.name}'s password changed.`);
  }
}

// Create Admin
class Admin extends User {
  constructor(name) {
    super(name, 'admin');
    this.users = [];
  }

  addUser(user) {
    if (user instanceof User) {
      this.users.push(user);
      console.log(`${user.getName()} added.`);
    } else {
      alert('Invalid user! Please provide a valid User object.');
    }
  }

  removeUser(user) {
    const index = this.users.indexOf(user);
    if (index !== -1) {
      this.users.splice(index, 1);
      console.log(`${user.getName()} removed.`);
    } else {
      console.log('User not found.');
    }
  }

  changeUserRole(user, newRole) {
    if (this.validateRole(newRole)) {
      user.role = newRole;
      console.log(`${user.getName()}'s role changed to ${newRole}.`);
    } else {
      alert('Invalid role! Role should be either "admin" or "user".');
    }
  }

  getAllUsers() {
    console.log(
      'All users:',
      this.users.map((user) => user.getName())
    );
  }

  removeAllUsers() {
    this.users = [];
    console.log('All users removed.');
  }
}

export { User, Admin };
