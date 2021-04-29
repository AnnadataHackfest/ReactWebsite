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
import {addQuestion} from "../actions/questionActions";
import PropTypes from "prop-types";

class QuestionModal extends React.Component {
  state = {
      modal: false,
      question: "",
      name: "",
      phone: ""
  }
  
  static propTypes = {
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

      const newQuestion = {
         question: this.state.question,
         name: this.state.name,
         phone: this.state.phone
      }

      // Add item via addItem action

      this.props.addQuestion(newQuestion);

      this.toggle();
  }

  render(){
      return (
        <div>

            {this.props.isAuthenticated ? <Button 
            color="dark" 
            style={{marginBottom: "2rem"}}
            onClick={this.toggle}
            >Ask Questions</Button> : <h4 className="mb-3 ml-4">Please log in first to participate in the discussion</h4>}
            

            <Modal 
            isOpen={this.state.modal}
            toggle={this.toggle}
            >
                <ModalHeader toggle={this.toggle}>Ask Questions (Be Specific)</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.onSubmit}>
                        <FormGroup>

                            <Label for="item">Question</Label>
                            <Input 
                             type="text"
                             name="question"
                             id="question"
                             placeholder="Ask your query"
                             onChange={this.onChange}
                            />

                            <Label for="item">Your Name</Label>
                            <Input 
                             type="text"
                             name="name"
                             id="name"
                             placeholder="Your name"
                             onChange={this.onChange}
                            />

                            <Label for="item">Phone</Label>
                            <Input 
                             type="text"
                             name="phone"
                             id="phone"
                             placeholder="Your phone number for further commuication"
                             onChange={this.onChange}
                            />

                            <Button
                             color="dark"
                             style={{marginTop: "2rem"}}
                             block
                            >Ask</Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
      );
  }
}

const mapStateToProps = state => ({
    question: state.question,
    isAuthenticated: state.auth.isAuthenticated
})


export default connect(mapStateToProps, { addQuestion })(QuestionModal);