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
        soil_moist: ""
      }

      this.onSubmit = this.onSubmit.bind(this);
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
          <Button color="primary" onClick={this.onSubmit} style={{marginTop: "3rem", marginBottom: "3rem"}}>Check Your Soil</Button>
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