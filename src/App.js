import React from "react";
import { Route, Switch } from "react-router-dom";
// import * as BooksAPI from './BooksAPI'
import "./App.css";

import BookList from "./components/pages/BookList";
import BookSearch from "./components/pages/BookSearch";
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
