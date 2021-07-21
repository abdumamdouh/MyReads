import React, { Component } from "react";
import SearchBar from "../SearchBar";
import SearchResult from "../SearchResult";

class BookSearch extends Component {
  render() {
    return (
      <div className="search-books">
        <SearchBar
          updateQuery={(query) => {
            this.props.updateQuery(query);
          }}
        />
        <SearchResult
          books={this.props.queryBooks}
          updateShelf={(shelf, book) => {
            this.props.updateShelf(shelf, book);
          }}
        />
      </div>
    );
  }
}

export default BookSearch;
