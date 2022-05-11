import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { Redirect } from 'react-router-dom'

class DogNew extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newdog: {
        name: "",
        age: "",
        enjoys: "",
        image: ""
      },
      submitted: false
    }
  }

  handleChange = (e) => {
    const { newdog } = this.state
    newdog[e.target.name] = e.target.value
    this.setState({newdog: newdog})
  }

  handleSubmit = () => {
    this.props.createdog(this.state.newdog)
    this.setState({submitted: true})
  }

  render() {
    return(
      <>
        <h2>Create a New Dog</h2>
        <Form>
          <FormGroup>
            <Label for="name">Dog Name</Label>
            <Input
              type="text"
              name="name"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="age">Dog Age</Label>
            <Input
              type="text"
              name="age"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="enjoys">Dog Enjoys</Label>
            <Input
              type="text"
              name="enjoys"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="image">Image URL</Label>
            <Input
              type="text"
              name="image"
              onChange={this.handleChange}
            />
          </FormGroup>
        </Form>
        <Button onClick={this.handleSubmit} name="submit">
            
          Submit Dog
        </Button>
        { this.state.submitted && <Redirect to="/dogindex"/> }
      </>
    )
  }
}
export default DogNew