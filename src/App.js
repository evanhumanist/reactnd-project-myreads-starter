import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks'
import PageHeader from './PageHeader'
import Bookshelves from "./Bookshelves";

class BooksApp extends React.Component {
  state = {
    books: [
        {title: 'To Kill a Mockingbird', author: 'Harper Lee', shelf: 1},
        {title: 'Ender\'s Game', author: 'Orson Scott Card', shelf: 1},
        {title: '1776', author: 'David McCullough', shelf: 2},
        {title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling', shelf: 2},
        {title: 'The Hobbit', author: 'J.R.R. Tolkien', shelf: 3},
        {title: 'Oh, the Places You\'ll Go!', author: 'Seuss', shelf: 3},
        {title: 'The Adventures of Tom Sawyer', author: 'Mark Twain', shelf: 3}
        ],
    sections: [
        {title: 'Currently Reading', shelf: 1},
        {title: 'Want to Read', shelf: 2},
        {title: 'Read', shelf: 3}
        ],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  };

  render() {
    return (
      <div className="app">
        <PageHeader/>
        {this.state.showSearchPage ? (
            <SearchBooks></SearchBooks>
        ) : (
            <Bookshelves></Bookshelves>
        )}
      </div>
    )
  }
}

export default BooksApp
