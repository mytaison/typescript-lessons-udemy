const someObject = {
  name: "Mehedi",
  age: 30,
  read() {
    console.log(this);
  },
};

someObject.read();

const someFunction = () => {
  console.log(this);
};
someFunction();

const Books = {
  title: "A book",
  authors: ["Author A", "Author B"],
  printAuthors() {
    // will refer to global this object
    this.authors.forEach(function (author) {
      console.log(this.title + " - " + author); // undefined
    });
    // fix is arrow function
    this.authors.forEach((author) => {
      console.log(this.title + " - " + author);
    });
    // alternative fix, passing the reference
    this.authors.forEach(function (author) {
      console.log(this.title + " - " + author);
    }, this);
  },
};

Books.printAuthors();
