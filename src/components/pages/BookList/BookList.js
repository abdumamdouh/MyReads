import React, { Component } from "react";
import PropTypes from "prop-types";
import classes from "./BookList.module.css";
import AddBookButton from "../../AddBookButton";
import BookCase from "../../BookCase";

class BookList extends Component {
  render() {
    return (
      <div className="list-books">
        <div className={classes.listBooksTitle}>
          <h1>MyReads</h1>
        </div>
        <div className={classes.listBooksContent}>
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
