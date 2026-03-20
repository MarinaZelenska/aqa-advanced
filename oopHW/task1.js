import { Book } from "./Book.js";
import { EBook } from "./EBook.js";

const test1 = new Book("Test1", "Author1", 1997);
const test2 = new Book("Test2", "Author2", 1998);
test1.author = "new author";
console.log(test1.printInfo());
console.log(test2.printInfo());

const test3 = new EBook("Test3", "Autor3", 1992, "pdf");
test3.title = "1";
console.log(test3.printInfo());

const test4 = new Book("Book new", "Autor new", 2026);
const result = EBook.fromBook(test4, "txt");
console.log(result.printInfo());
