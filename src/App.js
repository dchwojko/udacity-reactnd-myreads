import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import ListBooksPage from './ListBooksPage';
import SearchPage from './SearchPage';

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={ () => <ListBooksPage /> }/>
        <Route path="/search" render={ () => <SearchPage /> }/>
      </div>
    )
  }
}

export default BooksApp;
