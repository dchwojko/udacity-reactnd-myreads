import React, { Component } from 'react';
import SearchBooksBar from './SearchBooksBar';
import SearchBooksResults from './SearchBooksResults';
import * as BooksAPI from './BooksAPI';

class SearchPage extends Component {
    state = {
        books: []   
    };

    searchBooks = (query) => {
        let trimmedQuery = query.trim()
        if (trimmedQuery !== '') {
            BooksAPI.search(trimmedQuery).then( (foundBooks) => {
                if (foundBooks.length !== 0) {
                    this.setState({books: foundBooks});
                } else {
                    this.setState({books: []});
                }
            });
        } else {
            this.setState({books: []});
        }
    }

    updateBookshelf = (event, book) => {
        BooksAPI.update(book, event.target.value).then( () => { /* TODO: Notify user that the associated bookshelf has been updated */ } )
    }

    render() {
        return (
            <div className="search-books">
            <SearchBooksBar searchBooks={this.searchBooks}/>
            {this.state.books.length > 0 && <SearchBooksResults books={this.state.books} updateBookshelf={this.updateBookshelf}/>}
          </div>
        )
    }
}

export default SearchPage;