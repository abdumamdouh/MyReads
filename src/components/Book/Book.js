import React, { Component } from "react";
import PropTypes from "prop-types";
import classes from "./Book.module.css";
import BookShelfChanger from "../BookShelfChanger/BookShelfChanger";

class Book extends Component {
  render() {
    const { book } = this.props;
    return (
      <div className={classes.book}>
        <div className={classes.bookTop}>
          <div
            className={classes.bookCover}
            style={{
              width: 128,
              height: 193,
              backgroundImage:
                book.imageLinks !== undefined
                  ? `url(${book.imageLinks.thumbnail})`
                  : "url()",
            }}
          />
          <BookShelfChanger
            value={book.shelf !== undefined ? book.shelf : "none"}
            updateShelf={(shelf) => {
              // console.log(shelf, book);
              this.props.updateShelf(shelf, book);
            }}
          />
        </div>

        <div className={classes.bookTitle}>{book.title}</div>
        <div className={classes.bookAuthors}>
          {book.authors !== undefined
            ? book.authors.map(
                (author, index) =>
                  `${author}${index + 1 === book.authors.length ? "" : ", "}`
              )
            : ""}
        </div>
      </div>
    );
  }
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  updateShelf: PropTypes.func,
};

export default Book;
