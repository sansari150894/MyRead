import React from 'react'
import * as BooksAPI from './BooksAPI'
import BookDetails from './BookDetails'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'

class SearchBook extends React.Component {

  state = {
    IsBookFetchedInSearch: false,
    searchedBooks: undefined,
    query: '',


  };


  updateQuery = (query) => {
    this.setState({ query: query.trim() })
    BooksAPI.search(this.state.query, 5).then((searchedBooks) => {
      this.state.IsBookFetchedInSearch = true;
      searchedBooks.map((book) => {
        this.shelfIdentification(book);
      });
      this.setState({ searchedBooks });
    })
  }

  shelfIdentification(book) {
    this.props.books.map((singleBook) => {
      if (singleBook.id === book.id) {
        book.shelf = singleBook.shelf;
      }
      else {
        book.shelf = 'none';
      }
    });

  }

  render() {
    return (
      
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/" className="close-search">Close</Link>
            <div className="search-books-input-wrapper">
              <input type="text" value={this.state.query} placeholder="Search by title or author"
                onChange={(event) => this.updateQuery(event.target.value)}
              />
            </div>
          </div>
          {this.state.IsBookFetchedInSearch?(<div>


            </div>):(<div>


            </div>)

          }


          <div className="search-books-results">
            <ol className="books-grid">
              {
                this.state.searchedBooks && (this.state.searchedBooks.map((book) => (
                  <BookDetails key={book.id} book={book} onMoveBook={this.props.onMoveBook}></BookDetails>)
                ))
              }

            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBook