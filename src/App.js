import React, { Component } from 'react'
import './App.css'
import SearchBooks from './SearchBooks'
import PageHeader from './PageHeader'
import Bookshelves from './Bookshelves'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class BooksApp extends Component {
    state = {
        books: [],
        sections: [
            {title: 'Currently Reading', shelf: 'currentlyReading'},
            {title: 'Want to Read', shelf: 'wantToRead'},
            {title: 'Read', shelf: 'read'}
        ],
        searchBooks: [],
        query: ''
    };

    componentDidMount() {
        BooksAPI.getAll().then((books) =>  {
            this.setState({ books })
        })
    }

    updateQuery = (query, books) => {
        this.setState({ query: query });

        BooksAPI.search(query).then((searchBooks) =>  {
            let searchBooksProcessed = searchBooks.map((searchBook) => {
                let bookShelf = 'none';
                books.forEach((storedBook) => {
                    if (storedBook.id === searchBook.id) {
                        bookShelf = storedBook.shelf
                    }
                });
                searchBook.shelf = bookShelf;
                return searchBook
            });
            this.setState({ searchBooks: searchBooksProcessed });
        }).catch(() => {
            this.setState({ searchBooks: [] })
        })
    };

    updateShelf = (incomingBook, shelf) => {
        let foundBook = false;

        incomingBook.shelf = shelf;

        this.state.books.forEach((book, index) => {
            if (incomingBook.id === book.id) {
                foundBook = true;
                let bookArray = this.state.books.slice();
                bookArray[index] = incomingBook;
                this.setState({books: bookArray});
            }
        });

        if (foundBook === false) {
            let addedBookArray = this.state.books.slice();
            addedBookArray.push(incomingBook);
            this.setState({books: addedBookArray});
        }

        BooksAPI.update(incomingBook, shelf);
    };

    render() {
        return (
            <div className="app">
                <PageHeader/>
                <Route exact path="/" render={() => (
                    <Bookshelves
                        sections={this.state.sections}
                        books={this.state.books}
                        updateShelf={this.updateShelf}
                    />
                )}/>
                <Route path="/search" render={() => (
                    <SearchBooks
                        searchBooks={this.state.searchBooks}
                        books={this.state.books}
                        updateShelf={this.updateShelf}
                        updateQuery={this.updateQuery}
                        query={this.state.query}
                    />
                )}/>
            </div>
        )
    }
}

export default BooksApp
