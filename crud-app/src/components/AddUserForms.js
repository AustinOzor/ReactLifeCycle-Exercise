import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap'

class AddUserForms extends Component {
    constructor(props){
        super(props);
        this.state ={
             name: "",
            email: "",
            gen: ""
        }
     }
    handleChange = (e) => {
         e.preventDefault()
         this.setState({
             [e.target.name]:e.target.value
         })
        console.log(this.state)
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addUser(this.state)
        console.log(this.state)
    }
    render() {
      
        return (
    <Form onSubmit={this.handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" name="name" onChange={this.handleChange}/>
              
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" onChange={this.handleChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Gen</Form.Label>
                <Form.Control type="text" placeholder="Enter Gen" name="gen" onChange={this.handleChange}/>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
         </Form>   
        );
    }
}

export default AddUserForms;
