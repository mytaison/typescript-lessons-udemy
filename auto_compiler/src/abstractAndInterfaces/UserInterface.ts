enum Roles {
  admin = "admin",
  author = "author",
  editor = "editor",
}
enum FilePermissions {
  read = "read",
  write = "write",
  execute = "execute",
}
interface Role {
  role: Roles;
}
interface Permission {
  permission: FilePermissions[];
}
interface UserInterface {
  name: string;
  email: string;
  phone: number;
  gender: string;
}
interface UserWithAddressInterface extends UserInterface {
  address: string;
}
interface AdminUserInterface extends UserInterface, Role, Permission {
  numberOfUsersReporting: number;
}

const User1: UserInterface = {
  name: "User1",
  email: "user1@gmail.com",
  phone: 1291234455,
  gender: "Male",
};

const User2: UserWithAddressInterface = {
  address: "Mortdale, NSW 2223",
  name: "User1",
  email: "user1@gmail.com",
  phone: 1291234455,
  gender: "Male",
};

const AdminUserRob: AdminUserInterface = {
  name: "Rob Millar",
  email: "rob@msn.com",
  phone: 123456789,
  gender: "male",
  role: Roles.admin,
  permission: [
    FilePermissions.read,
    FilePermissions.write,
    FilePermissions.execute,
  ],
  numberOfUsersReporting: 10,
};

console.log(User1);
console.log(User2);
console.log(AdminUserRob);
