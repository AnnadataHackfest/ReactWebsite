import React from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from "reactstrap";

import {connect} from "react-redux";
import {getSoil} from "../actions/soilActions";
import PropTypes from "prop-types";
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'

const axios = require("axios");

class Location extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        lat: "",
        lng: "",
        soil_temp: "",
        soil_moist: "",
        confidence: "",
        frp: "",
        detect_time: ""
      }

      this.onSubmit = this.onSubmit.bind(this);
      this.onSubmitFire = this.onSubmitFire.bind(this);
  }
  

  componentDidMount = () => {
    if ("geolocation" in navigator) {
        console.log("Your location is Available");
        navigator.geolocation.getCurrentPosition((position) =>  {
            let self = this;
            self.setState({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            });
        });
          
      } else {
        console.log("Your location is not available, please change your settings to allow");
      }
    
  }

  onSubmit = (e) => {
      const url = `https://api.ambeedata.com/soil/latest/by-lat-lng?lat=${this.state.lat}&lng=${this.state.lng}`;
      axios({
        method: 'GET',
        url: url,
        headers: {
          "x-api-key": "vbOFm1KGNhaoAIQM0KrSPaknrXIgMaoQdXSMKsd5"
        }
      })
        .then(response => {
          this.setState({
              soil_temp: response.data.data[0].soil_temperature,
              soil_moist: response.data.data[0].soil_moisture
          });
        })
        .catch(error => {
          console.log('Data could not be fetched ', error);
        });
  }

  onSubmitFire = (e) => {
    const url = `https://api.ambeedata.com/latest/fire?lat=${this.state.lat}&lng=${this.state.lng}`;
    axios({
      method: 'GET',
      url: url,
      headers: {
        "x-api-key": "vbOFm1KGNhaoAIQM0KrSPaknrXIgMaoQdXSMKsd5"
      }
    })
      .then(response => {
        console.log(response.data);
        this.setState({
            confidence: response.data.data[0].confidence,
            frp: response.data.data[0].frp,
            detect_time: response.data.data[0].detection_time
        });
      })
      .catch(error => {
        console.log('Data could not be fetched ', error);
      });
}
  
  static propTypes = {
      getSoil: PropTypes.func.isRequired,
      isAuthenticated: PropTypes.bool
  }


  render(){
      return (
        <div>
        <Container>
<Alert variant="success">
  <Alert.Heading>Hey, nice to see you</Alert.Heading>
  <p>
    Your location has successfully been recorded to us. Your location in coordinates is 
    Latitude {this.state.lat} and Longitude {this.state.lng}. You can get a lot of
    information here including your soil types, moisture content, weather forecasting and much more
  </p>
  <hr />
  <p className="mb-0">
    Just surf around the corners and get a lot of useful information
  </p>
</Alert>
          <div style={{display: "flex", textAlign: "center"}}>
          <Button color="primary" onClick={this.onSubmit} style={{marginTop: "3rem", marginBottom: "3rem", marginLeft:"1rem", marginRight:"1rem"}}>Check Your Soil</Button>
          <Button color="primary" onClick={this.onSubmitFire} style={{marginTop: "3rem", marginBottom: "3rem", marginLeft:"1rem", marginRight:"1rem"}}>Check for Fire</Button>
          <Button color="primary" onClick={this.onSubmit} style={{marginTop: "3rem", marginBottom: "3rem", marginLeft:"1rem", marginRight:"1rem"}}>Check Your Soil</Button>
          <Button color="primary" onClick={this.onSubmit} style={{marginTop: "3rem", marginBottom: "3rem", marginLeft:"1rem", marginRight:"1rem"}}>Check Your Soil</Button>
          </div>
          
          {this.state.soil_temp!=="" ? 
<Card style={{ width: '18rem', marginTop: "1rem", marginBottom: "2rem" }}>
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1510844355160-2fb07bf9af75?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c29pbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
  <Card.Body>
    <Card.Title>Your Soil</Card.Title>
    <hr />
    <Card.Text>
      Your soil's current temperature is <strong>{this.state.soil_temp}°C</strong> and its
      moisture content is <strong>{this.state.soil_moist}%</strong>. 
      Keep good care of your soil and water it regularly
    </Card.Text>
    <Button variant="primary">Explore Best Practices</Button>
  </Card.Body>
</Card>
          : null}

          {this.state.confidence!=="" ? 
<Card style={{ width: '18rem', marginTop: "1rem", marginBottom: "2rem" }}>
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1476455553758-5a8b16727e23?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fGZpcmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
  <Card.Body>
    <Card.Title>Fire Chances in your Area</Card.Title>
    <hr />
    <Card.Text>
      The fire chances currently in your area is <strong>{this.state.confidence}. </strong>
      The corresponding FRP(Fire Radiative Power) is estimated to be around <strong>{this.state.frp} MW </strong>.  
      This data was recorded at the time <strong>{this.state.detect_time}. </strong>
      You do not need to worry in case of fire as well. Just follow these best practices as given
    </Card.Text>
    <Button variant="primary">Explore Best Practices</Button>
  </Card.Body>
</Card>
          : null}

          </Container>
        </div>
      );
  }
}

const mapStateToProps = state => ({
    soil: state.soil,
    isAuthenticated: state.auth.isAuthenticated
})


export default connect(mapStateToProps, { getSoil })(Location);