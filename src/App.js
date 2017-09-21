import React from 'react'
import * as BooksAPI from './BooksAPI'
import Bookcase from './Bookcase'
import Search from './Search'
import { Route } from 'react-router-dom'
import './App.css'

class BooksApp extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      books: [],
      searchedBooks: []
    }
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({ books })
      })
  }

  updateBooksShelf = (book, event) => {
    let shelf = event.target.value
    BooksAPI.update(book, shelf)
      .then(() => {
        book.shelf = shelf
        this.setState({
          books: this.state.books.filter((b) => b.id !== book.id).concat([book])
        })
      })
  }

  searchBooks = (event) => {
    let query = event.target.value
    if(query.length > 0){
      BooksAPI.search(query, 20)
        .then((searchedBooks) => {
          this.setState({ searchedBooks })
        })
    }else{
      this.setState({ searchedBooks: [] })
    }
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <Bookcase books={this.state.books} updateBooksShelf={this.updateBooksShelf} />
        )} />
        <Route exact path='/search' render={() => (
          <Search searchBooks={this.searchBooks} storedBooks={this.state.books} shelf='none' bookResults={this.state.searchedBooks} updateBooksShelf={this.updateBooksShelf} />
        )} />

      </div>
    )
  }
}

export default BooksApp
