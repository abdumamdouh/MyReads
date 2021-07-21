import React, { Component } from "react";
import PropTypes from "prop-types";
import Bookshelf from "./Bookshelf/Bookshelf";

class BookCase extends Component {
  render() {
    return (
      <div>
        {this.props.shelves.map((shelve) => (
          <Bookshelf shelve={shelve} />
        ))}
      </div>
    );
  }
}

BookCase.prototypes = {
  shelves: PropTypes.object.isRequired,
};

export default BookCase;
