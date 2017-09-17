import React from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'

class Bookshelf extends React.Component{
  state = {
    currentlyReading: [], 
    wantToRead: [], 
    read: []
  }


  filterBooksByShelf = (books, shelf) => {
    return books.filter((book) => {
      return book.shelf === shelf
    })
  }

  render() {

    return (
        <div className="book-shelf-wrapper">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Shelf title="Currently Reading" books={this.filterBooksByShelf(this.props.books, 'currentlyReading')} />
                <Shelf title="Want to Read" books={this.filterBooksByShelf(this.props.books, 'wantToRead')}/>
                <Shelf title="Read" books={this.filterBooksByShelf(this.props.books, 'read')}/>
              </div>
            </div>
            <div className="open-search">
              <Link to='/search' className="add-book-link">Add a book</Link>
            </div>
          </div>
      </div>
    )
  }
}

export default Bookshelf