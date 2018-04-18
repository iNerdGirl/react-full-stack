import React, { Component, Fragment } from 'react';
import {
  ButtonToolbar,
  DropdownButton,
  MenuItem,
  FormGroup,
  ControlLabel,
  FormControl,
  Button
} from 'react-bootstrap';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

class NewBook extends Component {
  constructor() {
    super();
    this.state = {
      authors: []
    }

    this.handleSave = this.handleSave.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    const AUTHOR_URI = 'https://rocky-temple-33519.herokuapp.com/authors';
    fetch(AUTHOR_URI)
        .then(res => res.json())
        .then(data => {
          this.setState({ 
            authors: [data] 
          });
        });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  
  handleSave(e) {
    e.preventDefault();
    console.log(e.target[0].value)

  } 

  render() {
    const { authors } = this.state;
    let authorView = <div className="container">Loading...</div>
    if(authors && authors.length > 0) {
       authorView = <ButtonToolbar bsClass="container">
           <DropdownButton bsSize="large" title="Author" id="Author">
             {authors[0].author.map(author => {
               return <MenuItem key={author.id} eventKey={author.id} onClick={this.handleChange} >
                   {author.firstName} {author.lastName}
                 </MenuItem>;
             })}
           </DropdownButton>
         </ButtonToolbar>;
    }
    return(
      <Fragment>
        <NavBar />
          <div className="container">
            <form onSubmit={this.handleSave}>
              {authorView}
              <FormGroup 
                id="formInlineBookTitle"
                type="text"
              >
                <ControlLabel>Book Title: </ControlLabel>
                <FormControl type="text" placeholder="Book Title" onChange={this.handleChange} />
              </FormGroup>
              <FormGroup
                id="formInlineBookIsbn"
                type="text"
              >
                <ControlLabel>Book ISBN: </ControlLabel>
                <FormControl type="text" placeholder="Book ISBN" onChange={this.handleChange} />
              </FormGroup>
              <FormGroup 
                id="formInlineBookCost"
                type="number"
              >
                <ControlLabel>Book Cost: </ControlLabel>
                <FormControl type="number" placeholder="Book Cost" onChange={this.handleChange} />
              </FormGroup>
              <FormGroup 
                id="formInlineBookQty"
                type="number"
              >
                <ControlLabel>Book Quantity: </ControlLabel>
                <FormControl type="number" placeholder="Book Quantity" onChange={this.handleChange} />
              </FormGroup>
              <Button type="submit">Submit</Button>
            </form>
          </div>
        <Footer />
      </Fragment>
    );
  }
}

export default NewBook;