import React, { Component } from 'react'
import ListBooks from './ListBooks'

class Bookshelves extends Component {
    render() {
        const { sections, books } = this.props;

        return(
            <div className="list-books">
                <div className="list-books-content">
                    {sections.map((section) => (
                    <div key={section.shelf} className="bookshelf">
                        <h2 className="bookshelf-title">{section.title}</h2>
                        <div className="bookshelf-books">
                            <ListBooks
                                selectBooks={books.filter((book) => book.shelf === section.shelf )}
                            />
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        )

    }
}

export default Bookshelves