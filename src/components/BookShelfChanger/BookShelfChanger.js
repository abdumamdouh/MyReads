import React, { Component } from "react";
import PropTypes from "prop-types";

class BookShelfChanger extends Component {
  state = {
    shelf: this.props.value,
  };

  onChangeHandler = (shelf) => {
    this.setState(() => ({ shelf }));
    this.props.updateShelf(shelf);
  };

  render() {
    const { value } = this.props;
    return (
      <div className="book-shelf-changer">
        <select
          value={value}
          onChange={(event) => this.onChangeHandler(event.target.value)}
        >
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}
BookShelfChanger.propTypes = {
  value: PropTypes.string,
  updateShelf: PropTypes.func,
};

export default BookShelfChanger;
