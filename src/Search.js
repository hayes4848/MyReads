import React from 'react'
import { Link } from 'react-router-dom'
import Results from './Results'
import NoResults from './NoResults'

class Search extends React.Component {


  determineResults = () => {
    if(this.props.bookResults.length > 0) {
      return <Results bookData={this.props.bookResults} updateBooksShelf={this.props.updateBooksShelf} shelf="none" storedBooks={this.props.storedBooks} />
    } else {
      return <NoResults /> 
    }
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" onChange={this.props.searchBooks} placeholder="Search by title or author"/>

          </div>
        </div>
        <div className="search-books-results">
          {this.determineResults()}
        </div>
      </div>
    )
  }
}

export default Search