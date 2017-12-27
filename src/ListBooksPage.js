import React, { Component } from 'react'
import ListBooksTitle from './ListBooksTitle'
import ListBooksContent from './ListBooksContent'

class ListBooksPage extends Component {
    render() {
        return (
            <div className="list-books">
                <ListBooksTitle />
                <ListBooksContent />
            </div>
        )
    }
}

export default ListBooksPage 