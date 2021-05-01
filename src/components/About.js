import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../App.css';
import arc from '../images/arc.jpg';
import icon1 from '../images/icon1.png';
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';
import icon4 from '../images/icon4.png';
import icon5 from '../images/icon5.png';

const About = () => {
  return (
    <div className="about-us">
    {/* <h2>OUR COMPANY</h2>
    <div className="mission">
      <span>MISSION</span>
      <p>Our mission is to tranform the way agriculture happens in our country. </p>
    </div>
    <span>Annadata</span>
    <p>Company’s name comes from the soul of agriculture in India, meaning farmer in english. </p>
    <span>Our Motto</span>
    <p>Our motto is to revolutionize the process of farming right from the start of the season till the harvesting processes.</p>
    <img src="https://images.unsplash.com/photo-1464972377689-e7674c48d806?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGZhcm1pbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" width="700" alt="" />
    <span>OUR COMMITMENT</span>
    <p>
      Thank you for considering Annadata as your farming partner. We are commited to providing our best services to you. You can reach out to us anytime as you wish.
    </p> */}
    <div style={{textAlign: "center", marginBottom:"3rem"}}><h3><strong>Who We Are</strong></h3></div>
    <Container>
    <div><h6>We are a dynamic group of people dedicated to serve the backbone of our nation, our Annadarta.
    to ensure that they get benefitted from the very best technology available in modern times and take benefit of
    modern technologies which would enable them to grow more and more  </h6>
    </div>
    </Container>
    <Container>
    <div><h3 style={{textAlign: "center", marginBottom: "2rem", marginTop: "2rem"}}><strong> Range of features that we provide </strong></h3>
    <Row>
      <Col>
        <img src={icon1} /><br/>
        <span><strong>Crop Disease Detection</strong></span>
      </Col>
      <Col>
        <img src={icon2} /><br />
        <span><strong>Weather and All API support</strong></span>
      </Col>
      <Col>
      <img src={icon3} /><br />
      <span><strong>Irrigation and Modern Techniques</strong></span>
      </Col>
      <Col>
      <img src={icon4} /><br />
      <span><strong>Cross-Platform Application</strong></span>
      </Col>
    </Row>
    </div>
    </Container>
    <Container>
    <div><h3 style={{textAlign: "center", marginBottom: "2rem", marginTop: "2rem"}}><strong> How Annadata Works </strong></h3>
    <Row style={{marginTop: "3rem", marginBottom: "3rem"}}>
      <Col>
      <img src={arc} width="500px" height="500px" />
      </Col>
      <Col>
        <div>
          <h5><strong>Crop Disease Detection</strong></h5>
          <p>We use machine learning models and artificial intelligence to predict whether a crop is diseased or not.
          What you need to do? Just upload the picture of the crop you want to check the health of and leave everything else to us.
          We will tell what are the possible diseases your crops might be having</p>
        </div>
        <div>
          <h5><strong>Buy, Sell, Rent Farm Equipments</strong></h5>
          <p>We use machine learning models and artificial intelligence to predict whether a crop is diseased or not.
          What you need to do? Just upload the picture of the crop you want to check the health of and leave everything else to us.
          We will tell what are the possible diseases your crops might be having</p>
        </div>
        <div>
          <h5><strong>Compelte API support for Weather Forecasting and Soil Checks</strong></h5>
          <p>We use machine learning models and artificial intelligence to predict whether a crop is diseased or not.
          What you need to do? Just upload the picture of the crop you want to check the health of and leave everything else to us.
          We will tell what are the possible diseases your crops might be having</p>
        </div>
      </Col>
    </Row>
    <Row style={{marginTop: "3rem", marginBottom: "3rem"}}>
    <Col>
        <div>
          <h5><strong>Crop Disease Detection</strong></h5>
          <p>We use machine learning models and artificial intelligence to predict whether a crop is diseased or not.
          What you need to do? Just upload the picture of the crop you want to check the health of and leave everything else to us.
          We will tell what are the possible diseases your crops might be having</p>
        </div>
        <div>
          <h5><strong>Buy, Sell, Rent Farm Equipments</strong></h5>
          <p>We use machine learning models and artificial intelligence to predict whether a crop is diseased or not.
          What you need to do? Just upload the picture of the crop you want to check the health of and leave everything else to us.
          We will tell what are the possible diseases your crops might be having</p>
        </div>
        <div>
          <h5><strong>Compelte API support for Weather Forecasting and Soil Checks</strong></h5>
          <p>We use machine learning models and artificial intelligence to predict whether a crop is diseased or not.
          What you need to do? Just upload the picture of the crop you want to check the health of and leave everything else to us.
          We will tell what are the possible diseases your crops might be having</p>
        </div>
      </Col>
      <Col>
      <img src={icon5} width="600px" height="400px" />
      </Col>
      
    </Row>
    </div>
    </Container>
  </div>
  );
}

export default About;