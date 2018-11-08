import React, { Component } from 'react'

class ListBooks extends Component {
    render() {
        const { selectBooks } = this.props;

        return (
            <ol className="books-grid">
                {selectBooks ?
                    !selectBooks.hasOwnProperty('error') ? selectBooks.map((book) => (
                   <li key={ book.id }>
                        <div className="book">
                            <div className="book-top">
                                { book.imageLinks ?
                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("' + book.imageLinks.thumbnail + '")' }}></div> :
                                    <div className="book-cover" style={{ width: 128, height: 193 }}></div> }
                                <div className="book-shelf-changer">
                                    <select
                                        onChange={(event) => (this.props.updateShelf(book, event.target.value))}
                                        value={ book.shelf }
                                    >
                                        <option value="move" disabled>Move to...</option>
                                        <option value="currentlyReading">Currently Reading</option>
                                        <option value="wantToRead">Want to Read</option>
                                        <option value="read">Read</option>
                                        <option value="none">None</option>
                                    </select>
                                </div>
                            </div>
                            <div className="book-title">{ book.title }</div>
                            { book.authors ? <div className="book-authors">{ book.authors.join(', ') }</div> : null }
                        </div>
                    </li>
                )) : null : null
                }
            </ol>
        )
    }
}

export default ListBooks
