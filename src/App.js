import React from 'react';
import AppNavbar from './components/AppNavbar';
import CarouselPage from './components/Carousel';
import Features from './components/Features';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import About from './components/About';
import FarmersAskFarmers from './components/FarmersAskFarmers';
import Infos from './components/Infos';
import QuestionModal from './components/QuestionModal';
import Navbar from './components/Navbar';
import Details from './components/Details';
import Default from './components/Default';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/Cart';
import ProductList from './components/ProductList';
import ShoppingList from "./components/ShoppingList";
import { Provider } from "react-redux";
import store from "./store";
import {loadUser} from "./actions/authActions";
import ItemModal from "./components/ItemModal";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Community from './components/Community';
import Modal from './components/Modal';
import Soil from './components/Soil';
import Crop from './components/Crop';
import Location from './components/Location';
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
          <Route path="/community" exact>
            <AppNavbar />
            <QuestionModal />
            <FarmersAskFarmers />
            <Footer />
          </Route>
          <Route path="/community/answer" exact>
            <AppNavbar />
            <Infos />
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
          <Route path="/buy">
            <AppNavbar />
            <Navbar />
            <switch>
              <Route path= "/buy" exact>
                <ProductList />
              </Route>
              <Route path= "/buy/details">
                <Details />
              </Route>
              <Route path= "/buy/cart">
                <Cart />
              </Route>
              <Route path= "/buy/default">
                <Default />
              </Route>
              <Modal />
            </switch>
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
        </Switch>
      </Router>
      </Provider>
    );
  } 
}

export default App;
