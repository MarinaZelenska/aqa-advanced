import { Book } from "./Book.js";

class EBook extends Book{

    #format;

    constructor(title, author, year, format){
        super(title, author, year);
        this.#format = format;

    }

    get format(){
        return this.#format;
    }

    set format(value){
        if (typeof value !== 'string'){
            throw new Error('Invalid datatype for format of book. Should be string');
        }
        this.#format = value;
        
    }


    printInfo() {
        return `Book with title ${this.title} have written by ${this.author} in ${this.year} year with ${this.format} format`;      
    }


    static fromBook(book, format){
        if (!(book instanceof Book)){
            throw new Error('Argument should be Book instance');

        }
        return new EBook(book.title, book.author, book.year, format);

    }

}


const test3 = new EBook('Test3', 'Autor3', 1992, 'pdf');
test3.title = '1';
console.log(test3.printInfo());

const test4 = new Book('Book new', 'Autor new', 2026);
const result = EBook.fromBook(test4, 'txt');
console.log(result.printInfo());