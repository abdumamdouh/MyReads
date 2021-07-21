import React from "react";
import { Route, Switch } from "react-router-dom";
import * as BooksAPI from "./api/BooksAPI";
import "./App.css";

import BookList from "./components/pages/BookList/BookList";
import BookSearch from "./components/pages/BookSearch";

class BooksApp extends React.Component {
  state = {
    BookShelves: ["currentlyReading", "wantToRead", "Read"],
    query: [],
    books: [],
  };

  updateShelf = (shelf, book) => {
    BooksAPI.update(book, shelf).then(() => {
      this.setState((prev) => ({
        books: prev.books.map((b) => {
          if (b.id === book.id) {
            b.shelf = shelf;
            return b;
          } else {
            return b;
          }
        }),
      }));
    });
  };

  updateQuery = (query) => {
    if (query === "") {
      return;
    }
    BooksAPI.search(query).then((books) => {
      // console.log(books);
      this.setState(() => ({
        query: books,
      }));
    });
    // .catch((error) => console.log(error));
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
          <BookList
            Shelves={this.state.BookShelves}
            books={this.state.books}
            updateShelf={(shelf, book) => this.updateShelf(shelf, book)}
          />
        </Route>

        <Route path="/search">
          <BookSearch
            updateQuery={(query) => {
              this.updateQuery(query);
            }}
            queryBooks={this.state.query}
          />
        </Route>
      </Switch>
    );
  }
}

export default BooksApp;
