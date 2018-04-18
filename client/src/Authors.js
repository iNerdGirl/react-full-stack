import React, { Component, Fragment } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

export default class Authors extends Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSave(e) {
    e.preventDefault();
    const AUTHORS_URI = 'https://rocky-temple-33519.herokuapp.com/authors';
    fetch(AUTHORS_URI, {
      method: 'POST',
      headers: new Headers({
        'Content-type': 'application/json'
      }),
      body: JSON.stringify({
        firstName: e.target[0].value,
        lastName: e.target[1].value
      })
    });
  }

  render() {
    return(
      <Fragment>
        <NavBar />
          <div className="container">
          <form onSubmit={this.handleSave}>
            <FormGroup
              id="formInlineAuthorFirstName"
              type="text"
            >
              <ControlLabel>Author's First Name: </ControlLabel>
              <FormControl type="text" placeholder="First Name" onChange={this.handleChange} />
            </FormGroup>
            <FormGroup 
              id="formInlineAuthorLastName"
              type="text"
            >
              <ControlLabel>Author's Last Name: </ControlLabel>
              <FormControl type="text" placeholder="Last Name" onChange={this.handleChange} />
            </FormGroup>
            <Button type="submit">Submit</Button>
          </form>
          </div>
        <Footer />
      </Fragment>
    );
  }
}