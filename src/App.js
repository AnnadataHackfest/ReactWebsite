import React from 'react';
import AppNavbar from './components/AppNavbar';
import CarouselPage from './components/Carousel';
import Features from './components/Features';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import About from './components/About';
import ShoppingList from "./components/ShoppingList";
import { Provider } from "react-redux";
import store from "./store";
import {loadUser} from "./actions/authActions";
import ItemModal from "./components/ItemModal";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Community from './components/Community';
import Soil from './components/Soil';
import Crop from './components/Crop';
import Location from './components/Location';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Schemes from './components/Schemes';
import ModernFarming from './components/ModernFarming';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
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
            <CarouselPage />
            <Features />
            <Testimonial />
            <Footer />
          </Route>
          <Route path="/about">
            <AppNavbar />
            <About />
            <Footer />
          </Route>
          <Route path="/community">
            <AppNavbar />
            <Community />
            <Footer />
          </Route>
          <Route path="/soil">
            <AppNavbar />
            <Soil />
            <Footer />
          </Route>
          <Route path="/schemes">
            <AppNavbar />
            <Schemes />
            <Footer />
          </Route>
          <Route path="/location">
            <AppNavbar />
            <Location />
            <Footer />
          </Route>
          <Route path="/modern">
            <AppNavbar />
            <ModernFarming/>
            <Footer />
          </Route>
          <Route path="/crop">
            <AppNavbar />
            <Crop/>
            <Footer />
          </Route>
          <Route path="/signup">
            <AppNavbar />
            <SignUp/>
            <Footer />
          </Route>
          <Route path="/login">
            <AppNavbar />
            <Login/>
            <Footer />
          </Route>
        </Switch>
      </Router>
      </Provider>
      
    );
  } 
}

export default App;
