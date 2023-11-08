class User {
  name: string;
  email: string;
  age: number;

  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;
  }
}

class AdminUser extends User {
  isAdmin: boolean = true;
  userReporting: number;
  constructor(name: string, email: string, age: number, userReporting: number) {
    super(name, email, age);
    this.userReporting = userReporting;
  }
}

const UserOne = new User("John Doe", "johndoe@email.com", 30);
console.log(UserOne);
const AdminOne = new AdminUser("John White", "johnwhite@email.com", 40, 1);
console.log(AdminOne);
