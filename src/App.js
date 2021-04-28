import React from 'react';
import AppNavbar from './components/AppNavbar';
import ShoppingList from "./components/ShoppingList";
import { Provider } from "react-redux";
import store from "./store";
import {loadUser} from "./actions/authActions";
import ItemModal from "./components/ItemModal";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'reactstrap';

class App extends React.Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render(){
    return (
      <Provider store={store}>
      {/* <div className="App">
       <AppNavbar />
       
       <Container>
       <ItemModal />
       <ShoppingList />
       </Container>
       
      </div> */}
      <Router>
        <Switch>
          <Route path="/" exact>
            <AppNavbar />
          </Route>
        </Switch>
      </Router>
      </Provider>
      
    );
  } 
}

export default App;
