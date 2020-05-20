import React, { useState } from "react";
import logo from "../logo.svg";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" light expand="md">
        <NavbarBrand href="/">
          {" "}
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
            loading="lazy"
          ></img>
        </NavbarBrand>
        <NavbarToggler className="bg-white" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto" navbar>
            <NavItem>
              <Link className="text-white text-uppercase ml-5" to="/">
                Home &nbsp; <i className="fas fa-home"></i>
              </Link>
            </NavItem>
            <NavItem>
              <Link className="text-white text-uppercase ml-5" to="/news">
                news
              </Link>
            </NavItem>
            <NavItem>
              <Link className="text-white text-uppercase ml-5" to="/contact">
                contact us
              </Link>
            </NavItem>
          </Nav>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-primary my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
