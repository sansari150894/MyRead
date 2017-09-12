import React, { Component } from 'react'
import SpinnerExample from './SpinnerExample'
class BookDetails extends Component {
    render() {
        return (
            <div>
                <li key={this.props.book.id}>
                    <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.thumbnail})` }}>
                                <div>
                                    {/* <SpinnerExample userAgent={this.props.userAgent}/> */}
                                </div>
                            </div>
                            <div className="book-shelf-changer">
                                <select onChange={(event) => { this.props.onMoveBook(this.props.book, event.target.value) }} value={this.props.book.shelf}>
                                    <option value="" disabled>Move to...</option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                </select>
                                <div>

                                </div>
                            </div>
                        </div>
                        <div className="book-title">{this.props.book.title}</div>
                        {
                            this.props.book.authors.map((author, index) => (
                                <div key={index} className="book-authors">{author}</div>
                            ))
                        }
                    </div>
                </li>
            </div>
        );
    }
}
export default BookDetails