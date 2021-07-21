import React from "react";
import { Route, Switch } from "react-router-dom";
import * as BooksAPI from "./api/BooksAPI";
import "./App.css";

import BookList from "./components/pages/BookList/BookList";
import BookSearch from "./components/pages/BookSearch";

class BooksApp extends React.Component {
  state = {
    BookShelves: ["currentlyReading", "wantToRead", "Read"],
    query: "",
    books: [],
  };

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books,
        }));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <Switch>
        <Route exact path="/">
          <BookList Shelves={this.state.BookShelves} books={this.state.books} />
        </Route>

        <Route path="/search">
          <BookSearch />
        </Route>
      </Switch>
    );
  }
}

export default BooksApp;
