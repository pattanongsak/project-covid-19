import React, { Component } from "react";
import { Link } from "react-scroll";
import { List } from "@material-ui/core";
import { CSSTransition } from "react-transition-group";
import Login from "../sections/Login";
import * as ReactBootStrap from "react-bootstrap";
import Imgnav from "../images/animation_nav.gif";
// import { MDBNotification, MDBContainer } from "mdbreact";

class Navbars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: localStorage.getItem("isSignedIn"),
      fullname: localStorage.getItem("fullname"),
    };
  }
  render(props) {
    return (
      <div>
        {/* <MDBContainer
          style={{
            width: "auto",
            position: "fixed",
            top: "10px",
            right: "10px",
            zIndex: 9999,
          }}
        >
          <MDBNotification
            show
            fade
            iconClassName="text-danger"
            title="
            Warning"
            message="โปรด Refresh ทุกครั้งหลังจาก Login หรือ Logout"
            text="just now"
          />
          <MDBNotification
            show
            fade
            iconClassName="text-primary"
            title="
            Practice"
            message="ถ้าท่านต้องการ แสดงความคิดเห็น โปรด Login ก่อน"
            text="2 seconds ago"
          />
        </MDBContainer> */}
        <ReactBootStrap.Navbar
          collapseOnSelect
          expand="lg"
          bg="light"
          variant="light"
          className="navbar fixed-top"
        >
          <ReactBootStrap.Navbar.Brand href="#home">
            <Link
              activeClass="active"
              to="homepage"
              spy={true}
              smooth={true}
              offset={-30}
              duration={900}
            >
              <img src={Imgnav} width="40px" />
              virus covid-19
            </Link>
          </ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactBootStrap.Nav className="mr-auto">
              <ReactBootStrap.Nav.Link href="#features">
                {/* Features */}
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link href="#pricing">
                {/* Pricing */}
              </ReactBootStrap.Nav.Link>
            </ReactBootStrap.Nav>
            <ReactBootStrap.Nav>
              <ReactBootStrap.Nav.Link>
                <Link
                  activeClass="active"
                  to="statistics"
                  spy={true}
                  smooth={true}
                  offset={-30}
                  duration={900}
                >
                  Statistics
                </Link>
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link>
                <Link
                  activeClass="active"
                  to="map"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={900}
                >
                  Covid-19 Map
                </Link>
              </ReactBootStrap.Nav.Link>
              {/* {this.state.isSignedIn == 1 ? ( */}
              <ReactBootStrap.Nav.Link>
                <Link
                  activeClass="active"
                  to="post"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={900}
                >
                  Post Request
                </Link>
              </ReactBootStrap.Nav.Link>
              {/* ) : null} */}
              <ReactBootStrap.Nav.Link>
                <Link
                  activeClass="active"
                  to="manifestation"
                  spy={true}
                  smooth={true}
                  offset={10}
                  duration={900}
                >
                  Manifestation
                </Link>
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link>
                <Link
                  activeClass="active"
                  to="effect"
                  spy={true}
                  smooth={true}
                  offset={10}
                  duration={900}
                >
                  Related foundations
                </Link>
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link>
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={10}
                  duration={900}
                >
                  Contact
                </Link>
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.NavDropdown
                id="collasible-nav-dropdown"
                title={
                  this.state.isSignedIn == 1 ? this.state.fullname : "Login"
                }
                alignRight
              >
                <ReactBootStrap.NavDropdown.Item>
                  <Login />
                </ReactBootStrap.NavDropdown.Item>
              </ReactBootStrap.NavDropdown>
            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
      </div>
    );
  }
}

export default Navbars;
