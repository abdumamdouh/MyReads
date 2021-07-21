import React, { Component } from "react";
import Book from "../Book/Book";

class SearchResult extends Component {
  render() {
    return (
      <div className="search-books-results">
        <ol className="books-grid">
          {this.props.books.length > 0
            ? this.props.books.map((book) => (
                <li key={book.id}>
                  <Book
                    book={book}
                    updateShelf={(shelf, book) => {
                      this.props.updateShelf(shelf, book);
                    }}
                  />
                </li>
              ))
            : ""}
        </ol>
      </div>
    );
  }
}

export default SearchResult;
