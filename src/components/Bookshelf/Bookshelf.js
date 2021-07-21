import React, { Component } from "react";
import PropTypes from "prop-types";
import classes from "./Bookshelf.module.css";
import Book from "../Book/Book";
import BookSearch from "../pages/BookSearch";

class Bookshelf extends Component {
  render() {
    return (
      <div className={classes.bookshelf}>
        <h2 className={classes.bookshelfTitle}>{this.props.shelf}</h2>
        <div className={classes.bookshelfBooks}>
          <ol className="books-grid">
            {this.props.books.map((book) => (
              <li>
                <Book book={book} />
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
};

export default Bookshelf;
