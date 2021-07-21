import React, { Component } from "react";
import PropTypes from "prop-types";
import classes from "./Bookshelf.module.css";
import Book from "../Book/Book";

class Bookshelf extends Component {
  render() {
    const { books, shelf } = this.props;
    return (
      <div className={classes.bookshelf}>
        <h2 className={classes.bookshelfTitle}>
          {shelf === "currentlyReading"
            ? "Currently Reading"
            : this.props.shelf === "wantToRead"
            ? "Want To Read"
            : "Read"}
        </h2>
        <div className={classes.bookshelfBooks}>
          <ol className="books-grid">
            {books.map((book) => (
              <li key={book.id}>
                <Book
                  book={book}
                  updateShelf={(shelf, book) => {
                    this.props.updateShelf(shelf, book);
                  }}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

Bookshelf.propTypes = {
  shelf: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired,
};

export default Bookshelf;
