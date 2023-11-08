enum LibraryTypes {
  national = "National",
  academic = "Academic",
  public = "public",
}

type Book = {
  title: string;
  pages: number;
  isbn: string;
};
// enum Genre {
//     fiction = "fiction",
//     history = "history",
//     computers = "computers",
//     poetry = "poetry"
// }
type Member = {
  name: string;
  phone: string;
  [id: string]: string;
};
type Library = {
  name: string;
  address: string;
  numberOfBooks: number;
  type: LibraryTypes;
  books: Book[];
  genres: string[];
  member: Member[];
};
