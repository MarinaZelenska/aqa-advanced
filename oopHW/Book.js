
export class Book{

    #title;
    #author;
    #year;

    constructor(title, author, year){
        this.#title = title;
        this.#author = author;
        this.#year = year;
    }


    get title(){
        return this.#title;
    }


    set title(value){
        if (typeof value !== 'string'){
            throw new Error('Invalid datatype for title of book. Should be string');
        }
        this.#title = value;
    }


    get author(){
        return this.#author;
    }


    set author(value){
        if (typeof value !== 'string'){
            throw new Error('Invalid datatype for author of book. Should be string');
        }
        this.#author = value;
    }


    get year(){
        return this.#year;
    }


    set year(value){
        if (typeof value !== 'number'){
            throw new Error('Invalid datatype for year of book. Should be a number');
        }
        this.#year = value;
    }



    printInfo() {
        return `Book with title ${this.#title} have written by ${this.#author} in ${this.#year} year`;      
    }

}


const test1 = new Book('Test1', 'Author1', 1997);
const test2 = new Book('Test2', 'Author2', 1998);
test1.author = 'new author';
console.log(test1.printInfo());
console.log(test2.printInfo());