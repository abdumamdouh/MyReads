import React, { Component } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import Bookshelf from "./Bookshelf/Bookshelf";

class BookCase extends Component {
  render() {
    return (
      <div>
        {this.props.shelves.map((shelf) => (
          <Bookshelf
            key={uuidv4()}
            shelf={shelf}
            books={this.props.books.filter(
              (book) => book.shelf.toLowerCase() === shelf.toLowerCase()
            )}
          />
        ))}
      </div>
    );
  }
}

BookCase.prototypes = {
  shelves: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
};

export default BookCase;
