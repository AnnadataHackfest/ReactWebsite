import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Complete from '../images/complete.PNG';
import plantDiseaseDetected from '../images/plantDiseaseDetected.PNG';
import noInternet from '../images/noInternet.png';

const Features = () => {
  return (
      <div style={{marginBottom: "2rem"}}>
      <div style={{textAlign: "center", marginTop: "2rem", marginBottom: "2rem"}}><h2>Our Salient Features</h2></div>
    <Container>
        <Row>
            <Col>
<Card style={{ width: '18rem' }}>
  {/* <Card.Img variant="top" src="https://images.unsplash.com/photo-1533062618053-d51e617307ec?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFybWluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" /> */}
  <Card.Img variant="top" src={Complete} width="300" height="300" />
  <Card.Body>
    {/* <Card.Title>Card Title</Card.Title> */}
    <Card.Text>
    Detailed information from sowing till harvesting
    </Card.Text>
    <Button variant="primary">Explore More</Button>
  </Card.Body>
</Card>
            </Col>
            <Col>
            <Card style={{ width: '18rem' }}>
  {/* <Card.Img variant="top" src="https://images.unsplash.com/photo-1523349312806-f5dde0a01c32?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c29pbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" /> */}
  <Card.Img variant="top" src={plantDiseaseDetected} width="300" height="300" />
  <Card.Body>
    {/* <Card.Title>Card Title</Card.Title> */}
    <Card.Text>
    Plant disease detection using computer vision
    </Card.Text>
    <Button variant="primary">Upload Image</Button>
  </Card.Body>
</Card>
            </Col>
<Col>
<Card style={{ width: '18rem' }}>
  {/* <Card.Img variant="top" src="https://images.unsplash.com/photo-1530797584131-115643783014?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGNyb3BzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" /> */}
  <Card.Img variant="top" src={noInternet} width="300" height="300" />
  <Card.Body>
    {/* <Card.Title>Card Title</Card.Title> */}
    <Card.Text>
      Unique SMS based model for farmers without internet
    </Card.Text>
    <Button variant="primary">SMS Now</Button>
  </Card.Body>
</Card>
</Col>
        </Row>
    </Container>
    </div>
  )
}

export default Features;