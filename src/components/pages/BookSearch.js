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
        <SearchResult books={this.props.queryBooks} />
      </div>
    );
  }
}

export default BookSearch;
