import React, { Component } from 'react';
import Book from './Book';

class SearchBooksResults extends Component {
    render() {
        return (
            <div className="search-books-results">
                <ol className="books-grid">
                    {this.props.books.map((book,index) => { return <li key={index}><Book book={book} booksOnShelves={this.props.booksOnShelves} updateBookshelf={this.props.updateBookshelf}/></li>})}
                </ol>
            </div>
        )
    }
}

export default SearchBooksResults;