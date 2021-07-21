import React from "react";
import { Route, Switch } from "react-router-dom";
// import * as BooksAPI from './BooksAPI'
import "./App.css";

import BookList from "./components/pages/BookList/BookList";
import BookSearch from "./components/pages/BookSearch";

class BooksApp extends React.Component {
  state = {
    BookShelves: ["Currently Reading", "Want to Read", "Read"],
  };

  render() {
    return (
      <Switch>
        <Route exact path="/">
          <BookList Shelves={this.state.BookShelves} />
        </Route>

        <Route path="/search">
          <BookSearch />
        </Route>
      </Switch>
    );
  }
}

export default BooksApp;
