import React from 'react'

class Book extends React.Component {

  render() {
    return(
      <li>
        <div className="book">
          <div className="book-top">
            {this.props.bookData.imageLinks !== undefined && 
            (<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: "url(" +this.props.bookData.imageLinks.thumbnail + ")" }}></div>
            )}
            <div className="book-shelf-changer">
              <select onChange={(event) => this.props.updateBooksShelf(this.props.bookData, event)} value={this.props.shelf} >
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.bookData.title}</div>
          {this.props.bookData.authors !== undefined && (
            <div className="book-authors">{this.props.bookData.authors.join(', ')}</div>
          )}
        </div>
      </li>
    )
  }
}

export default Book