import React, {Fragment} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import RegisterModal from "./auth/RegisterModal";
import Logout from "./auth/Logout";
import LoginModal from "./auth/LoginModal";
import '../App.css';

class AppNavbar extends React.Component {
    state = {
        isOpen: false
    }

    static propTypes = {
        auth: PropTypes.object.isRequired
    }

    toggle = () => {
       this.setState({
           isOpen: !this.state.isOpen
       });
    }

    render(){

        const { isAuthenticated, user } = this.props.auth;

        const authLinks = (
            <div className="nav-fragment">
            <NavItem>
                <span className="navbar-text mr-3">
                    <strong>{user ? `Welcome ${user.name.split(' ').slice(0, -1).join(' ')}` : null}</strong>
                </span>
            </NavItem>
              <NavItem>
                <Logout />
            </NavItem>
            </div>
        )

        const guestLinks = (
            <div className="nav-fragment">
              <NavItem>
                <RegisterModal />
             </NavItem>
             <NavItem>
                <LoginModal />
            </NavItem>
            </div>
        )

        return (
          <div>
              <Navbar color="dark" dark expand="sm" className="mb-5 navbar-main">
                  <Container>
                      <NavbarBrand href="/">Annadata</NavbarBrand>
                      <NavbarToggler onClick={this.toggle} />
                      <Collapse isOpen={this.state.isOpen} navbar>
                          <NavLink href="/about" className="nav-link first-nav">
                            About                          
                          </NavLink>
                          <NavLink href="/crop" className="nav-link" navbar>
                            Crop                          
                          </NavLink>
                          <NavLink href="/soil" className="nav-link" navbar>
                            Soil                         
                          </NavLink>
                          <NavLink href="/schemes" className="nav-link" navbar>
                            Schemes                         
                          </NavLink>
                          <NavLink href="/location" className="nav-link" navbar>
                            Location                         
                          </NavLink>
                          <NavLink href="/modern" className="nav-link" navbar>
                            ModernFarming                         
                          </NavLink>
                          <NavLink href="/community" className="nav-link" navbar>
                            Community                        
                          </NavLink>
                          {/* <NavLink href="/login" className="nav-link" navbar>
                            Login                         
                          </NavLink>
                          <NavLink href="/signup" className="nav-link" navbar>
                            SignUp                        
                          </NavLink> */}
                          <Nav className="ml-auto" navabr>
                            {isAuthenticated ? authLinks : guestLinks}                           
                          </Nav>
                      </Collapse>
                  </Container>
              </Navbar>
          </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})
export default connect(mapStateToProps, null)(AppNavbar);