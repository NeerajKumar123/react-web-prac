import React, { useState , useEffect} from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import "./App.css";
import Routes from "./Routes";
import { LinkContainer } from "react-router-bootstrap";
import { AppContext } from "./libs/contextLib";


export default function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  function handleLogout() {
    userHasAuthenticated(false);
  }
  useEffect(() =>{
    setTimeout(() => {
      let user = JSON.parse(localStorage.getItem('user'))
      console.log('user',user)
      if(user && user.email && user.password){
        userHasAuthenticated(true)
      }else{
        userHasAuthenticated(false)
      }
      setIsAuthenticating(false)
    }, 2000);
  },[])


  return (
    !isAuthenticating &&
    <div className="App container">
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/home">Brand</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            {isAuthenticated
              ? <NavItem onClick={handleLogout}>Logout</NavItem>
              : <>
              <LinkContainer to="/home">
                  <NavItem>Home</NavItem>
                </LinkContainer>
                <LinkContainer to="/services">
                  <NavItem>Our Services</NavItem>
                </LinkContainer>
                <LinkContainer to="/contact">
                  <NavItem>Contact</NavItem>
                </LinkContainer>
                <LinkContainer to="/aboutus">
                  <NavItem>About Us</NavItem>
                </LinkContainer>
               
              </>
            }
            </Nav>
        </Navbar.Collapse>
      </Navbar>
      <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
        <Routes />
      </AppContext.Provider>
    </div>
  );
}