import React, { Component } from "react";
import Book from "./Book/Book";

class SearchResult extends Component {
  render() {
    return (
      <div className="search-books-results">
        <ol className="books-grid">
          {console.log(this.props.books)}
          {/* {console.log(typeof this.props.books)} */}
          {this.props.books.length > 0
            ? this.props.books.map((book) => (
                <li key={book.id}>
                  <Book book={book} />
                </li>
              ))
            : ""}
        </ol>
      </div>
    );
  }
}

export default SearchResult;
