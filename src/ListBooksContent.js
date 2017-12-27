import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'
import * as BooksAPI from './BooksAPI'

class ListBooksContent extends Component {
    state = {
        books: []
    }

    componentDidMount() {
        this.getAllBooks()
    }

    getBooksByBookshelf(bookshelf) {
        let returnedBooks = this.state.books.filter( (book) => book.shelf === bookshelf)
        return returnedBooks
    }

    updateBookshelf = (event, book) => {
        BooksAPI.update(book, event.target.value).then( () => { this.getAllBooks() } )
    }

    getAllBooks() {
        BooksAPI.getAll().then( (books) => this.setState({books: books}) )
    }

    render() {
        return (
            <div>
                <div className="list-books-content">
                    <div>
                        <Bookshelf title="Currently Reading" bookshelfValue="currentlyReading" books={this.getBooksByBookshelf("currentlyReading")} updateBookshelf={this.updateBookshelf} />
                        <Bookshelf title="Want to Read" bookshelfValue="wantToRead" books={this.getBooksByBookshelf("wantToRead")} updateBookshelf={this.updateBookshelf} />
                        <Bookshelf title="Read" bookshelfValue="read" books={this.getBooksByBookshelf("read")} updateBookshelf={this.updateBookshelf} />
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        )
    }
}

export default ListBooksContent

