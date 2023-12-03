
// PART II JavaScript HomeWork Solutions
//Q_1
//a Add a new book to the libraryBooks array?
let libraryBooks = [
    {title: "The Road Ahead", author: "Bill Gates", libraryID: 1235},
    {title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4268},
    {title: "The Road Ahead", author: "Bill Gates", libraryID: 4268},
    {title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3257}
 ];
function addBook(title,author,libraryID){
    const newBook = {title: title,author: author,libraryID: libraryID};
    libraryBooks.push(newBook);
    return newBook;
}
const myAddedBook = addBook("Ups and downs road of life","Ahom Birhane", 2124);
console.log("Array of books: ",libraryBooks);

//b Get title and order the books in alphabetically order?
function getTitles(){
    return libraryBooks.map(book => book.title).sort();
}
const booksTitle = getTitles();
console.log("Here are the titles alphabetically ordered: ",booksTitle);

//c Find Book by its given keyword and alphabetically ordered by the author?
function findBooks(keyword){
    const booksWithRoadInTitle = libraryBooks.filter(book => book.title.toLowerCase().includes(keyword.toLowerCase())); // filter the books
    return booksWithRoadInTitle.sort((a,b) => a.author.localeCompare(b.author));// order the books by comparing the author names
}
const selectedListByKeyWord = findBooks("road");
console.log('Here are the books that contains "ROAD" keyword ordered by author: ',selectedListByKeyWord);

// Q_2 This code does map every element of the array and by applying the function, it will return squared numbers in a new array 
function myMap(arr, fun){
    return arr.reduce((acc, current, i, array) => {
        acc.push(fun(current, i, array));
        return acc;
    }, []);
}
let myArr = [10,20,30,40,50];
let squaredNums = myMap(myArr, x => x ** 2);
console.log("Here are the the square of the numbers from the array: ",squaredNums);