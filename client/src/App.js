import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <h1>Welcome to Autumn's Favorite Books</h1>
        <p>
          This is an API for the Galvanize Tower Drill where you can add books to an PostgreSQL database hosted on Heroku.
          To be able to add a book to the database you must first add the Author to the database, which is fairly straight forward, just visit the Authors page and add the author's first and last name.
          After that, you can go to the Books page, and add your own favorite book to the database and have it be rendered on the page.
          You must provide the Book's title, ISBN, and Image URL for the book.  
        </p>
      </div>
    );
  }
}

export default App;
