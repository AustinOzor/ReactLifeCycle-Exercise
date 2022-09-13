
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Users from './components/Users';
import { Component } from 'react';
import AddUserForms from './components/AddUserForms';

class App extends Component{
  constructor(props) {
    super();
    this.state = {
      users: [
        {
          name: 'Francis Brown',
          email: 'franb@gmail.com',
          gen: 22
        },
        {
          name: 'David Brown',
          email: 'franb@gmail.com',
          gen: 22
        },
        {
          name: 'Vicky Brown',
          email: 'vicbanb@gmail.com',
          gen: 22
        },
        {
          name: 'Charles Dickson',
          email: 'chdanb@gmail.com',
          gen: 22
        },
        {
          name: 'Kenneth Copper',
          email: 'copanb@gmail.com',
          gen: 22
        },
        {
          name: 'Rhoda Paul',
          email: 'rhobapb@gmail.com',
          gen: 22
        },
      ]
    }
   
  }
  addNewUser = (user) => {
    this.setState({
      users:[...this.state.users, user]
    })
  }
  
  render() {
    return (
      <div>
        <Container fluid style={{marginTop:'1rem'}}>
          <Row>
            <Col md="4"><AddUserForms addUser={this.addNewUser} /> </Col>
            <Col>
              <Users userData={this.state.users} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
