// Intreface and type have very similarity,
// we can use either of them but some use cases only allow interface to use
interface Student {
  name: string;
  email: string;
  age: number;
  phone?: number;
  greet?: () => void;
}

const Afshee: Student = {
  name: "Ayesha Afsheen Karim",
  email: "ayeshaAfsheen@gmail.com",
  age: 14,
};

// Multiple interfaces with same name are merged together
interface inf {
  name: string;
}
interface inf {
  lastName: string;
}

const exampleInf: inf = {
  name: "firstname",
  lastName: "lastname",
};
