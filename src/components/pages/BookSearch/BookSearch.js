import React, { Component } from "react";
import SearchBar from "../../SearchBar/SearchBar";
import SearchResult from "../../SearchResult/SearchResult";

const BookSearch = (props) => {
  return (
    <div className="search-books">
      <SearchBar
        updateQuery={(query) => {
          props.updateQuery(query);
        }}
      />
      <SearchResult
        books={props.queryBooks}
        updateShelf={(shelf, book) => {
          props.updateShelf(shelf, book);
        }}
      />
    </div>
  );
};

export default BookSearch;
