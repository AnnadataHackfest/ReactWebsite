import React from "react";
import {Container, ListGroup, ListGroupItem, Button} from "reactstrap";
import PropTypes from "prop-types";
import Alert from 'react-bootstrap/Alert'
import {
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

class CropSuggest extends React.Component {

  state = {
    modal: false,
    n: "",
    p: "",
    k: "",
    temp: "",
    hum: "",
    ph: "",
    rain: "",
    show: false
  }

    static propTypes = {
        getQuestions: PropTypes.func.isRequired,
        question: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    }

 

  toggle = () => {
    this.setState({
        modal: !this.state.modal
    });
  }

  onChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
      e.preventDefault();

      console.log(this.state.n);
      console.log(this.state.p);
      console.log(this.state.k);
      console.log(this.state.temp);
      console.log(this.state.hum);
      console.log(this.state.ph);
      console.log(this.state.rain);
      this.setState({
          show: true
      });
  }
  
  render() {
      return (
        <Container>
        <div style={{textAlign: "center", marginBottom: "2rem"}}><h2>Community needs you contribution, please help</h2></div>
                
                 <div className="d-flex justify-content-center">
                  <Button color="success" onClick={this.toggle}>Answer now</Button>{' '}
                 </div>

                 {this.state.show ? <p>
                     {this.state.n} {this.state.p} {this.state.k} {this.state.temp} {this.state.hum} {this.state.ph} {this.state.rain}
                 </p> : null}
                 

                <Modal 
                 isOpen={this.state.modal}
                 toggle={this.toggle}
                >
                <ModalHeader toggle={this.toggle}>Answer the question</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.onSubmit}>
                        <FormGroup>


                            <Label for="item">Nitrogen</Label>
                            <Input 
                             type="text"
                             name="n"
                             id="n"
                             placeholder="What you wanna talk about"
                             value={this.state.n}
                             style={{marginBottom: "1rem"}}
                             onChange={this.onChange}
                            />

                            <Label for="item">Phosphorus</Label>
                            <Input 
                             type="text"
                             name="p"
                             id="p"
                             placeholder="What you wanna talk about"
                             value={this.state.p}
                             style={{marginBottom: "1rem"}}
                             onChange={this.onChange}
                            />

                            <Label for="item">Potassium</Label>
                            <Input 
                             type="text"
                             name="k"
                             id="k"
                             placeholder="What you wanna talk about"
                             value={this.state.k}
                             style={{marginBottom: "1rem"}}
                             onChange={this.onChange}
                            />

                            <Label for="item">temp</Label>
                            <Input 
                             type="text"
                             name="temp"
                             id="temp"
                             placeholder="What you wanna talk about"
                             value={this.state.temp}
                             style={{marginBottom: "1rem"}}
                             onChange={this.onChange}
                            />

                            <Label for="item">Humidity</Label>
                            <Input 
                             type="text"
                             name="hum"
                             id="hum"
                             placeholder="What you wanna talk about"
                             value={this.state.hum}
                             style={{marginBottom: "1rem"}}
                             onChange={this.onChange}
                            />

                            <Label for="item">PH</Label>
                            <Input 
                             type="text"
                             name="ph"
                             id="ph"
                             placeholder="What you wanna talk about"
                             value={this.state.ph}
                             style={{marginBottom: "1rem"}}
                             onChange={this.onChange}
                            />

                            <Label for="item">Rain</Label>
                            <Input 
                             type="text"
                             name="rain"
                             id="rain"
                             placeholder="What you wanna talk about"
                             value={this.state.rain}
                             style={{marginBottom: "1rem"}}
                             onChange={this.onChange}
                            />

                            <Button
                             color="dark"
                             style={{marginTop: "2rem"}}
                             block
                            >Submit</Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </Container>
      );
  }
}



export default CropSuggest;