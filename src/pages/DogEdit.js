import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button} from 'reactstrap';

class DogEdit extends Component {
    constructor(props){
        super(props)
        this.state = {
          newDog: {
            name: "",
            age: "",
            enjoys: "",
            image: ""
          },
          submitted: false
        }
    }
    handleChange = (e) => {
        const { newDog } = this.state
        newDog[e.target.name] = e.target.value
        this.setState({newDog: newDog})
    }

    handleSubmit = () => {
        this.props.updateDog(this.state.newDog, this.props.dog.id)
        this.setState({submitted: true})
    }
    render() {
        return (
            <div>
                <h1>Edit an Existing Dog</h1>
              <Form>
              <FormGroup>
                  <Label for="name">Name</Label>
                  <Input
                  type="text"
                  name="name"
                  onChange={this.handleChange}
                  />
              </FormGroup>
              <FormGroup>
                  <Label for="age">Age</Label>
                  <Input
                  type="text"
                  name="age"
                  onChange={this.handleChange}
                  />
              </FormGroup>
              <FormGroup>
                  <Label for="enjoys">Enjoys</Label>
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
              <Button name="submit" onClick={this.handleSubmit}>Edit Dog Profile</Button>
              { this.state.submitted && <Redirect to={`/dogshow/${this.props.dog.id}`}/> }
            </div>
        );
    }
}

export default DogEdit;