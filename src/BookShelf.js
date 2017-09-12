import React from 'react'
import BookDetails from './BookDetails'

class BookShelf extends React.Component {
  render() {
    return (
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
               this.props.book && this.props.book.map((book) => (
               <BookDetails key={book.id} onMoveBook={this.props.onMoveBook} book={book}>{console.log(book.id)}</BookDetails>
              ))
            }

          </ol>
        </div>
    
    )
  }
}

export default BookShelf