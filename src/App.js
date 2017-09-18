import React from 'react'
import * as BooksAPI from './BooksAPI'
import Bookcase from './Bookcase'
import Search from './Search'
import { Route } from 'react-router-dom'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
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

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <Bookcase books={this.state.books} updateBooksShelf={this.updateBooksShelf} />
        )} />
        <Route exact path='/search' render={() => (
          <Search />
        )} />

      </div>
    )
  }
}

export default BooksApp
