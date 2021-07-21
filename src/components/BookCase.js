import React, { Component } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import Bookshelf from "./Bookshelf/Bookshelf";

class BookCase extends Component {
  render() {
    const { books, shelves } = this.props;
    return (
      <div>
        {shelves.map((shelf) => (
          <Bookshelf
            key={uuidv4()}
            shelf={shelf}
            books={books.filter(
              (book) => book.shelf.toLowerCase() === shelf.toLowerCase()
            )}
            updateShelf={(shelf, book) => {
              this.props.updateShelf(shelf, book);
            }}
          />
        ))}
      </div>
    );
  }
}

BookCase.prototypes = {
  shelves: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired,
};

export default BookCase;
