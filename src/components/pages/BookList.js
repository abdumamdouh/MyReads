import React, { Component } from "react";
import PropTypes from "prop-types";
import AddBookButton from "../AddBookButton";
import BookCase from "../BookCase";

class BookList extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <BookCase shelves={this.props.Shelves} />
        </div>
        <AddBookButton />
      </div>
    );
  }
}

BookList.prototypes = {
  shelves: PropTypes.object.isRequired,
};

export default BookList;
