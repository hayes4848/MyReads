import React from 'react'
import Book from './Book'

class Results extends React.Component {

  determineShelf(book){
    let result = this.props.storedBooks.filter( (stored) => stored.id === book.id )
    if(result.length > 0){
      return result[0]['shelf']
    }else{
      return "none"
    }
  }

  getBooksHTML(books) {
    let booksArray = books.map((book, index) => {
      return <Book key={index} updateBooksShelf={this.props.updateBooksShelf} shelf={this.determineShelf(book)} bookData={book} />
    })
    return <ol className="books-grid">{booksArray}</ol>
  }

  render() {
    return this.getBooksHTML(this.props.bookData)
  }
}

export default Results