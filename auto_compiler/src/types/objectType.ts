let person = {
  name: "Mehedi",
  age: 30,
};

// Type and property type declared, so showing error due to lack to properties
// let car: {
//   color: string;
//   brand: string;
// } = {};

let car: {
  color: string; // Remember properties and their types are declared with semi-colon instead of comma
  brand: string;
} = {
  color: "red",
  brand: "toyota",
};

let article: {
  author: string;
  content: string;
  title: string;
  image?: string; // optional property
};

article = {
  author: "Mehedi Hasan",
  content: "New Typescript User",
  title: "Typescript",
};
