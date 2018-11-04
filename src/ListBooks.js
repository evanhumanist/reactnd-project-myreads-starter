import React, { Component } from 'react'

class ListBooks extends Component {
    render() {
        const { selectBooks } = this.props;

        return (
            <ol className="books-grid">
                {selectBooks.map((book) => (
                   <li key={ book.title }>
                        <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("' + book.cover + '")' }}></div>
                                <div className="book-shelf-changer">
                                    <select
                                        onChange={(event) => (this.props.updateShelf(book.title, event.target.value))}
                                        value={book.shelf}
                                    >
                                        <option value="move" disabled>Move to...</option>
                                        <option value="1">Currently Reading</option>
                                        <option value="2">Want to Read</option>
                                        <option value="3">Read</option>
                                        <option value="none">None</option>
                                    </select>
                                </div>
                            </div>
                            <div className="book-title">{ book.title }</div>
                            <div className="book-authors">{ book.author }</div>
                        </div>
                    </li>
                ))}
            </ol>
        )
    }
}

export default ListBooks