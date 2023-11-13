// Mapped Types
// Partial Type Implementation
type PartialReimplementation<T> = {
  [P in keyof T]?: T[P];
};

// Conditional Types
// Exclude Type Implementation
type ExcludeReimplementation<T, U> = T extends U ? never : T;

// Awaited<Type>
const promise: Promise<string> = new Promise((res, rej) => {
  setTimeout(() => {
    res("Resolved");
  }, 1500);
});
type AwaitedType = Awaited<typeof promise>;

// Record<key, Type>
type Roles = "author" | "editor" | "researcher";
interface UserIntf {
  name: string;
  email: string;
  age: number;
}

interface Article {
  title: string;
  content: string;
  contributors: Record<Roles, UserIntf>;
}
const article: Article = {
  title: "AAA BBB CCC",
  content: "ABCD EFHCG PLSJF",
  // It can be generated using Roles and UserIntf
  contributors: {
    author: { name: "MMMM", email: "mmm@example.com", age: 20 },
    editor: { name: "NNNN", email: "nnn@example.com", age: 22 },
    researcher: { name: "PPPP", email: "ppp@example.com", age: 23 },
  },
};

// Pick<Type, Keys>
interface PersonIntf {
  name: string;
  age: number;
  email: string;
}
type NameAndAge = Pick<PersonIntf, "name" | "age">;
const personObj: NameAndAge = {
  name: "Mehedi Hasan",
  age: 30,
};

// Readonly
type NameAndAgeReadonly = Readonly<Pick<PersonIntf, "name" | "age">>;
const personObjRO: NameAndAgeReadonly = {
  name: "Mehedi Hasan",
  age: 30,
};
// personObjRO.age = 31 // It will throw error

// Omit<OldType, Keys> reverse of Pick
interface UserIntf2 {
  name: string;
  email: string;
  age: number;
  password: string;
}
type LimitedUser = Omit<UserIntf2, "password" | "age">;
const limitedUser: LimitedUser = {
  name: "Mehedi Hasan",
  email: "mytaison@aol.com",
};

// Partial<Type>
function updateUser(user: UserIntf2, updates: Partial<UserIntf2>): UserIntf2 {
  return { ...user, ...updates };
}

const userA: UserIntf2 = {
  name: "Mehedi Hasan",
  email: "mytaison@aol.com",
  age: 32,
  password: "abcd1234",
};
const updatedUserA: UserIntf2 = updateUser(userA, { password: "Abcd#4321" });

// Requied<Type>
interface UserIntf3 {
  name?: string;
  email?: string;
  age?: number;
  password?: string;
}
type RegisteredUser = Required<Pick<UserIntf3, "email" | "password">>;

// String Manipulation Types
// Uppercase<StringType>
// Lowercase<StringType>
// Capitalize<StringType>
// Uncapitalize<StringType>
type City = "new york" | "london" | "tokyo";
type UppercaseCity = Uppercase<City>;
type LowercaseCity = Lowercase<UppercaseCity>;
type CapitalizeCity = Capitalize<LowercaseCity>;
type UncapitalizeCity = Uncapitalize<CapitalizeCity>;
