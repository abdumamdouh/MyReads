import React from "react";
import { Link, Route, Switch } from "react-router-dom";
// import * as BooksAPI from './BooksAPI'
import "./App.css";

import BookList from "./components/BookList";
import BookSearch from "./components/BookSearch";
class BooksApp extends React.Component {
  state = {};

  render() {
    return (
      <Switch>
        <Route exact path="/">
          <BookList />
        </Route>

        <Route path="/search">
          <BookSearch />
        </Route>
      </Switch>
    );
  }
}

export default BooksApp;
