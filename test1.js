class Book {
  constructor(Title,Author) {
      this.Title=Title;
      this.Author=Author; 
  }
  details(){

  console.log(`Title: ${this.Title} , Author : ${this.Author}`)
}
 read(){

      console.log(`${this.Title} is a great Book to read!`)
  }
}
const Book1 = new Book("Harry  ", "Sri");  // ctrl+a alt+shift +f
const Book2= new Book ("Harry ");
Book1.details();
Book2.read();

