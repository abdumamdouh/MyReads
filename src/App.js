import React from "react";
import { Route, Switch } from "react-router-dom";
import * as BooksAPI from "./api/BooksAPI";
import "./App.css";
import BookList from "./components/pages/BookList/BookList";
import BookSearch from "./components/pages/BookSearch/BookSearch";
import PageNotFound from "./components/pages/PageNotFound/PageNotFound";

class BooksApp extends React.Component {
  state = {
    BookShelves: ["currentlyReading", "wantToRead", "Read"],
    query: [],
    books: [],
  };

  updateShelf = (shelf, book) => {
    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll()
        .then((books) => {
          this.setState(() => ({
            books,
          }));
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  updateQuery = (query) => {
    if (query === "") {
      this.setState(() => ({
        query: [],
      }));
      return;
    }
    BooksAPI.search(query).then((books) => {
      if (books.length > 0) {
        const booksWithShelves = books.map((book) => {
          this.state.books.forEach((b) => {
            if (b.id === book.id) {
              book.shelf = b.shelf;
            }
          });

          return book;
        });

        this.setState(() => ({
          query: booksWithShelves,
        }));
      } else {
        this.setState(() => ({
          query: [],
        }));
      }
    });
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
            updateShelf={(shelf, book) => {
              this.updateShelf(shelf, book);
            }}
          />
        </Route>
        <Route component={PageNotFound} />
      </Switch>
    );
  }
}

export default BooksApp;
