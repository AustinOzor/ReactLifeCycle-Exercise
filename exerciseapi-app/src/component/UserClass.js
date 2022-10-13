import React, { Component } from "react";
import { Container,Row, Col } from "react-bootstrap";
export default class UserClass extends Component {
    constructor(props) {
        super();
        this.state={users:[]}
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((data) => {
            data.json()
                .then((results) => {
                    this.setState({ users: results })
                    console.log(results);
                }).catch((error)=> {
                    console.log(error);})
        })
    }
    render() {
        return (
            <>
              <Container>
                  
                  <h1 className="users">Users</h1>
                    <Row className="section">
                        <Col md={4}>
                            <div>
                            
                             {this.state.users.map((item, index) => {
                              return (
                                  <div key={item.id} className="card--body">
                                  <h3>Name: {item.name}</h3>
                                  <h3>User Name: {item.username}</h3>
                                  <h3>Email: {item.email}</h3>
                                  </div>
                              )
                                })}
                                </div>
                        </Col>
                        <Col md={4}>
                            <div>
                            
                             {this.state.users.map((item, index) => {
                              return (
                                  <div key={item.id} className="card--body">
                                  <h3>Name: {item.name}</h3>
                                  <h3>User Name: {item.username}</h3>
                                  <h3>Email: {item.email}</h3>
                                  </div>
                              )
                                })}
                                </div>
                        </Col>
                        <Col md={4}>
                            <div>
                            
                             {this.state.users.map((item, index) => {
                              return (
                                  <div key={item.id} className="card--body">
                                  <h3>Name: {item.name}</h3>
                                  <h3>User Name: {item.username}</h3>
                                  <h3>Email: {item.email}</h3>
                                  </div>
                              )
                                })}
                                </div>
                        </Col>
                    </Row>
              </Container>
                </>
        )
    }
}
