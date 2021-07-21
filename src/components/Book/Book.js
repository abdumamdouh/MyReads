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
              backgroundImage:
                'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")',
            }}
          />
          <Selector />
        </div>

        <div className={classes.bookTitle}>To Kill a Mockingbird</div>
        <div className={classes.bookAuthors}>Harper Lee</div>
      </div>
    );
  }
}

Book.PropTypes = {
  title: PropTypes.string,
  authors: PropTypes.string,
  imgUrl: PropTypes.string,
};

export default Book;
