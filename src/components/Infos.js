import React from "react";
import {Container, ListGroup, ListGroupItem, Button} from "reactstrap";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import { connect } from "react-redux";
import { getQuestions } from "../actions/questionActions";
import PropTypes from "prop-types";
import Alert from 'react-bootstrap/Alert'

class Infos extends React.Component {

    static propTypes = {
        getQuestions: PropTypes.func.isRequired,
        question: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    }

  componentDidMount() {
    this.props.getQuestions();
  }
  
  render() {
      const { questions } = this.props.question;
      console.log(questions);
      return (
        <Container>
        <div style={{textAlign: "center", marginBottom: "2rem"}}><h2>Community needs you contribution, please help</h2></div>
                <div>
                {questions.map(({ _id, name, question, phone }) => (
                <Alert show={true} variant="success">
                 <Alert.Heading>{name}</Alert.Heading>
                 <p>
                  {question} 
                 </p>
                 <hr />
                 <div className="d-flex justify-content-start">
                  <a href="/"><Button color="primary">Answer now</Button>{' '}</a>
                 </div>
                 <div className="d-flex justify-content-end">
                  <a href={"tel:"+`${phone}`}><Button variant="outline-success">
                    Call {name}
                  </Button></a>
                 </div>
                </Alert>
                ))}
                    
                </div>
        </Container>
      );
  }
}



const mapStateToProps = (state) => ({
    question: state.question,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { getQuestions })(Infos);