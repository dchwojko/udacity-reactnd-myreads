import React, { Component } from 'react';


class Book extends Component {
    state = {
        currentBookshelf: this.props.book.shelf ? this.props.book.shelf : 'none'
    };

    updateBookshelf(event) {
        this.setState({currentBookshelf: event.target.value});
        this.props.updateBookshelf(event, this.props.book);
    }

    render() {
        const {book} = this.props;
        const cover = book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : '';
        
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: "url(" + cover + ")"}}></div>
                    <div className="book-shelf-changer">
                        <select value={this.state.currentBookshelf} onChange={(event) => this.updateBookshelf(event)}>
                            <option value="not applicable" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors ? book.authors.join(', ') : 'No authors'}</div>
            </div>
        )
    }
}

export default Book;