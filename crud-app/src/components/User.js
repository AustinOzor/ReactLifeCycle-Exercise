import React from 'react';
import {Card, Col} from 'react-bootstrap';

  const User = (props) =>{
        return (
             <Col md={4}>
        <Card style={{margin: '0.5rem'}}>
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Title>{props.userInfo.name}</Card.Title>
             <Card.Text>
                  <p>Email: {props.userInfo.email}</p>
                  <p>Telephone:{props.userInfo.telephone}</p>
            </Card.Text>
            <Card.Link href="#">Edit </Card.Link>
            <Card.Link href="#">Delete </Card.Link>
          </Card.Body>
            </Card>
       </Col>
        );
    }


export default User;
