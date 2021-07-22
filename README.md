[![Netlify Status](https://api.netlify.com/api/v1/badges/ed7154ae-3298-48ca-9a2d-568f3091fc35/deploy-status)]()
[![Edit reactnd-project-myreads](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/abdumamdouh/MyReads)

# MyReads

MyReads is a simple cataloging app that allows you to place books in one of three shelves or categories.

- Currently Reading
- Want to Read
- Read

It also allow you to search for books based on title and author.

This app is the first of three projects required for [Udacity's React Nanodegree program](https://www.udacity.com/course/react-nanodegree--nd019).

## Installation

Clone the repository, change directories, and use NPM to install the dependencies.

```bash
$ git clone https://github.com/abdumamdouh/MyReads
$ cd reactnd-project-myreads
$ npm install
```

## Usage

The project can be run with

- `npm start`

The project can be viewed in the browser at

- [http://localhost:3000](http://localhost:3000)

## Screenshots

![screenshot1](https://i.ibb.co/tZgq6KP/react-2.png)

![screenshot2](https://cdn3.bbcode0.com/uploads/2021/7/22/6635676c2e97b2f5748fc14de81ca22d-full.png)

## Backend Server

The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods :

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
