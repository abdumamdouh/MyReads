import React, { Component } from "react";
import { Link } from "react-router-dom";

class AddBookButton extends Component {
  render() {
    return (
      <div>
        <Link to="/search">
          <div className="open-search">
            <button>Add a book</button>
          </div>
        </Link>
      </div>
    );
  }
}

export default AddBookButton;
