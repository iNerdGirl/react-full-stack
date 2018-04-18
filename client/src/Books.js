import React, { Component, Fragment } from 'react';
import NavBar from './Components/NavBar';
import Card from './Components/Card';
import Footer from './Components/Footer';

export default class Books extends Component {
  constructor() {
    super();
    this.state = {
      books: []
    }
  }

  componentDidMount() {
    const BOOKS_URI = 'https://rocky-temple-33519.herokuapp.com/books';

    fetch(BOOKS_URI)
      .then(res => res.json())
      .then(data => {
        this.setState({
          books: [data]
        });
      });
  }
  
  render() {
    let booksView = <div className="container">Loading...</div>
    const { books } = this.state;
    if (books && books.length > 0) {
      booksView = books[0].books.map(book => {
        return( 
         <Card className="container"
               key={book.id} 
               title={book.title} 
               isbn={book.isbn}
               cost={book.cost}
               qty={book.qty} 
               image_url={book.image_url} 
               firstName={book.firstName} 
               lastName={book.lastName}  
               />
        )
      })
    }
    return(
      <Fragment>
        <NavBar />
        {booksView}
        <Footer />
      </Fragment>
    );
  }
}