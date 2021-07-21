import React, { Component } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import classes from "./Bookshelf.module.css";
import Book from "../Book/Book";

class Bookshelf extends Component {
  render() {
    return (
      <div className={classes.bookshelf}>
        <h2 className={classes.bookshelfTitle}>
          {this.props.shelf === "currentlyReading"
            ? "Currently Reading"
            : this.props.shelf === "wantToRead"
            ? "Want To Read"
            : "Read"}
        </h2>
        <div className={classes.bookshelfBooks}>
          <ol className="books-grid">
            {this.props.books.map((book) => (
              <li key={uuidv4()}>
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
