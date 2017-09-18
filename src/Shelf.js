import React from 'react'
import Book from './Book'


class Shelf extends React.Component {

  getBooksHTML(books) {
    let booksArray = books.map((book, index) => {
      return <Book key={index} updateBooksShelf={this.props.updateBooksShelf} shelf={this.props.shelf} bookData={book} />
    })
    return booksArray
  }

  render(){
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.getBooksHTML(this.props.books)}
          </ol>
        </div>
      </div>  
    )
  }
}

export default Shelf