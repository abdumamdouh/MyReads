import React, { Component } from "react";
import PropTypes from "prop-types";
import classes from "./Bookshelf.module.css";
import Book from "../Book/Book";

class Bookshelf extends Component {
  render() {
    return (
      <div className={classes.bookshelf}>
        <h2 className={classes.bookshelfTitle}>{this.props.shelve}</h2>
        <div className={classes.bookshelfBooks}>
          <ol className="books-grid">
            <li>
              <Book />
            </li>
          </ol>
        </div>
      </div>
    );
  }
}

Bookshelf.PropTypes = {
  shelve: PropTypes.string.isRequired,
};

export default Bookshelf;
