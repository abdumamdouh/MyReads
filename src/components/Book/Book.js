import React, { Component } from "react";
import PropTypes from "prop-types";
import classes from "./Book.module.css";
import Selector from "../BookShelfChanger/BookShelfChanger";

class Book extends Component {
  render() {
    return (
      <div className={classes.book}>
        <div className={classes.bookTop}>
          <div
            className={classes.bookCover}
            style={{
              width: 128,
              height: 193,
              backgroundImage: this.props.book.imageLinks.thumbnail
                ? `url(${this.props.book.imageLinks.thumbnail})`
                : "url()",
            }}
          />
          <Selector />
        </div>

        <div className={classes.bookTitle}>{this.props.book.title}</div>
        <div className={classes.bookAuthors}>
          {this.props.book.authors.map(
            (author, index) =>
              `${author}${
                index + 1 === this.props.book.authors.length ? "" : ", "
              } `
          )}
        </div>
      </div>
    );
  }
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
};

export default Book;
