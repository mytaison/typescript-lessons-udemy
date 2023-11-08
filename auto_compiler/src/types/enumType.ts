// Old way
import * as roles from "../roles";
let newUser = {
  role: "",
  joinedOn: "",
};
newUser.role = roles.ADMIN;
console.log(newUser);

// New Way
enum Roles {
  admin = 0,
  moderator = 1,
  member = 2,
}

type NewUser = {
  name: string;
  email: string;
  role: Roles;
};

const testUser: NewUser = {
  name: "Rashjid Mazid",
  email: "rashjid299@gmail.com",
  role: Roles.moderator,
};
console.log(Roles.admin);
console.log(testUser);
