import React from "react";
import {Container, ListGroup, ListGroupItem, Button} from "reactstrap";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import { connect } from "react-redux";
import { getQuestions } from "../actions/questionActions";
import PropTypes from "prop-types";
import Alert from 'react-bootstrap/Alert'

class FarmersAskFarmers extends React.Component {

    static propTypes = {
        getQuestions: PropTypes.func.isRequired,
        question: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    }

  componentDidMount() {
    this.props.getQuestions();
  }

//   onDeleteClick = (id) => {
//      this.props.deleteItem(id);
//   };

//<CSSTransition key={_id} timeout={500} classNames="fade">
//                            <ListGroupItem>                          
//                               <p>{name.question}</p>
//                           </ListGroupItem>
//                       </CSSTransition>
  
  render() {
      const { questions } = this.props.question;
      console.log(questions);
      return (
        <Container>
        <div style={{textAlign: "center"}}><h2>Grow with the Community</h2></div>
                <div>
                {questions.map(({ _id, name, question, phone }) => (
                <Alert show={true} variant="success">
                 <Alert.Heading>{name}</Alert.Heading>
                 <p>
                  {question} 
                 </p>
                 <hr />
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

export default connect(mapStateToProps, { getQuestions })(FarmersAskFarmers);