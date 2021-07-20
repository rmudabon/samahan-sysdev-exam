// Develop a website using any language or frameworks. The requirement is a basic age calculator. The website should ask for the following information:
// name
// birth year 
// birth month (1-12)
// birthday (1-31)
// After getting this data, compute for the user's age and show it to the user accordingly.

// Example:
// "Hello [name]! Today you are [age] years old."

import Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import React, {Component} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      message: ''
    }
  }
  
  handleMessage = (event) => {
    event.preventDefault();
    const currentDate = new Date();
    const birthDate = new Date(parseInt(event.target.birthYear.value), parseInt(event.target.birthMonth.value) - 1, parseInt(event.target.birthDay.value));
    
    const diff = currentDate.getYear() - birthDate.getYear();

    const ageMsg = 'Hello ' + event.target.name.value + '! Today you are ' + diff + ' years old.'
    this.setState({
      message: ageMsg
    })
  }

  render() {
    const msg = this.state.message;
    let alertMsg;
    if(msg){
      alertMsg = <Alert variant="success">{msg}</Alert>;
    }
    return(
      <Container className="mt-3">
          <Form onSubmit={this.handleMessage}>
            <Form.Group className="mb-3" controlId="name" >
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name.." required={true}/>
            </Form.Group>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="birthMonth">
                <Form.Label>Birth Month</Form.Label>
                <Form.Control type="number" min="1" max="12" placeholder="Enter birth month (1-12).." required={true}/>
              </Form.Group>
              <Form.Group as={Col} controlId="birthDay">
                <Form.Label>Birth Day</Form.Label>
                <Form.Control type="number" min="1" max="31" placeholder="Enter birth day (1-12).." required={true}/>
              </Form.Group>
              <Form.Group as={Col} controlId="birthYear">
                <Form.Label>Birth Year</Form.Label>
                <Form.Control type="number" min="1900" max="2021" placeholder="Enter birth year.." required={true}/>
              </Form.Group>
            </Row>
            <Button variant="primary" type="submit">
            Submit
            </Button>
          </Form>
          <br/>
          <Row>
            {alertMsg}
          </Row>
      </Container>
    )
    }
}

export default App;
