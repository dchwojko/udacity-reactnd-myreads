import React, { Component } from 'react';
import Book from './Book';

class Bookshelf extends Component {
    render() {
        const {title, books, updateBookshelf} = this.props;
        return (
            <div className="bookshelf">
                  <h2 className="bookshelf-title">{title} ({books.length})</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map( (book) => { return <li key={book.id}><Book book={book} updateBookshelf={updateBookshelf}/></li> })}
                    </ol>
                  </div>
                </div>
        )
    }
}

export default Bookshelf;
