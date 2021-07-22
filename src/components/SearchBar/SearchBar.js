import React, { Component } from "react";
import { Link } from "react-router-dom";

class SearchBar extends Component {
  state = {
    query: "",
  };

  onChangeHandler = (query) => {
    this.setState(() => ({
      query,
    }));
    this.props.updateQuery(query);
  };

  render() {
    return (
      <div className="search-books-bar">
        <Link to="/">
          <button className="close-search">Close</button>
        </Link>

        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            value={this.state.query}
            onChange={(e) => {
              this.onChangeHandler(e.target.value);
            }}
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
