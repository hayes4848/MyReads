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

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <Bookcase books={this.state.books} />
        )} />
        <Route exact path='/search' render={() => (
          <Search />
        )} />

      </div>
    )
  }
}

export default BooksApp
