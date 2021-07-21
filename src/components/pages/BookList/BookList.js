import React, { Component } from "react";
import PropTypes from "prop-types";
import classes from "./BookList.module.css";
import AddBookButton from "../../AddBookButton";
import BookCase from "../../BookCase";

class BookList extends Component {
  render() {
    const { books, Shelves } = this.props;
    return (
      <div className="list-books">
        <div className={classes.listBooksTitle}>
          <h1>MyReads</h1>
        </div>
        <div className={classes.listBooksContent}>
          <BookCase
            shelves={Shelves}
            books={books}
            updateShelf={(shelf, book) => {
              this.props.updateShelf(shelf, book);
            }}
          />
        </div>
        <AddBookButton />
      </div>
    );
  }
}

BookList.prototypes = {
  shelves: PropTypes.array.isRequired,
  books: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired,
};

export default BookList;
