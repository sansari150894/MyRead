import React from 'react'
import BookShelf from './BookShelf'
import $ from 'jquery'
import SpinnerExample from './SpinnerExample'


class BookShelfHeading extends React.Component{
    
    render() {
        return (
            <div>
     
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.heading}</h2>
                {
                    this.props.isBookFetched?(<SpinnerExample/>):(
                         <BookShelf onMoveBook={this.props.onMoveBook} book={this.props.currentlyReadingBooks}></BookShelf>
                    )
                }
               
            </div>
            </div>
        )
    }
}

export default BookShelfHeading