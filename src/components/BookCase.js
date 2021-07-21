import React, { Component } from "react";
import Bookshelf from "./Bookshelf";

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

export default BookCase;
