import React from 'react';
import Book from './Book';

function Bookshelf(props) {
    const {title, books, updateBookshelf} = props;
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

export default Bookshelf;
