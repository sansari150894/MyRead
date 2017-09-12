import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'
import BookShelfHeading from './BookShelfHeading'
import SearchBook from './SearchBook'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import SpinnerExample from './SpinnerExample'





class BooksApp extends React.Component {
  state = {
    books: undefined,
    isBookFeched: true

  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.state.isBookFeched = false;
      this.setState({ books });
    })
  }



  constructor(props) {
    super(props);
  }

  filterBooks = () => {
    this.currentlyReadingBooks = this.state.books && this.state.books.filter((book) => book.shelf === 'currentlyReading');
    this.wantToReadBooks = this.state.books && this.state.books.filter((book) => book.shelf === 'wantToRead');
    this.readBooks = this.state.books && this.state.books.filter((book) => book.shelf === 'read');
  }

  moveBook = (book, targetBookType) => {
    console.log("Salahuddin" + targetBookType);
    BooksAPI.update(book, targetBookType).then((data) => {
      this.changeLocalShelf(book, targetBookType);
    });


  }

  changeLocalShelf(book, targetBookType) {


    this.setState((state) => {
      let bookFound = false;
      let newState = state.books.map((thisBook) => {
        if (thisBook.id === book.id) {
          thisBook.shelf = targetBookType;
          bookFound = true;
        }
        return thisBook;
      });
      if (!bookFound) {
        book.shelf = targetBookType;
        newState.push(book);
      }
      return { books: newState }
    });
  }



  render() {
    this.filterBooks();
    return (
      <div>
        <div className="app">
        
              <Route exact path="/" render={() => (<div>
                <div className="list-books">
                  <div className="list-books-title">
                    <h1>MyReads</h1>
                  </div>
                  <div className="list-books-content">
                    <div>
                      <div>
                       
                        <BookShelfHeading onMoveBook={this.moveBook} heading={"Currently Reading"} currentlyReadingBooks={this.currentlyReadingBooks} isBookFetched={this.state.isBookFeched}></BookShelfHeading>
                        <BookShelfHeading onMoveBook={this.moveBook} heading={"Want To Read"} currentlyReadingBooks={this.wantToReadBooks} isBookFetched={this.state.isBookFeched}></BookShelfHeading>
                        <BookShelfHeading onMoveBook={this.moveBook} heading={"Read"} currentlyReadingBooks={this.readBooks} isBookFetched={this.state.isBookFeched}></BookShelfHeading>
                      </div>
                    </div>
                  </div>
                </div>
              </div>)} />
              <Route path="/SearchBook" render={() => (
                <SearchBook onMoveBook={this.moveBook} books={this.state.books} />
              )} />
              <div className="open-search">
                <Link
                  to="/SearchBook"
                >Add a book
              </Link>
              </div>
            </div>


        
        </div>
     






    )
  }
}
export default BooksApp
