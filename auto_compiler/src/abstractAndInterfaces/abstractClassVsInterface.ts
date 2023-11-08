abstract class PersonAbstract {
  public abstract name: string;
  public abstract email: string;
  public abstract phone: number;

  public greeting() {
    console.log(`Hello ${this.name}`);
  }
  public static nameClass() {
    console.log("PersonAbstract Class it is.");
  }
}

interface UserInterfaceX {
  name: string;
  email: string;
  phone: number;
  greetings: () => void;
}

class RegisteredPerson extends PersonAbstract {
  constructor(
    public name: string,
    public email: string,
    public phone: number,
  ) {
    super();
  }
}

class RegisteredUser implements UserInterfaceX {
  constructor(
    public name: string,
    public email: string,
    public phone: number,
  ) {}
  public greetings() {
    console.log(`Hello ${this.name}`);
  }
}

const registerPerson = new RegisteredPerson(
  "Mehedi Hasan",
  "mytaison@aol.com",
  8801780162606,
);
console.log(registerPerson);
registerPerson.greeting();
PersonAbstract.nameClass();
// registerPerson.constructor.nameClass();
