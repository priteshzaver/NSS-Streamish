import React, { useState } from "react";
import { NavLink, NavLink as RRNavLink } from "react-router-dom";
import { Collapse, Nav, NavItem, Navbar, NavbarBrand, NavbarToggler } from "reactstrap";
import { logout } from "../modules/authManager";

const Header = ({ isLoggedIn, userProfile }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand tag={RRNavLink} to="/">
          StreamIsh
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {isLoggedIn && (
              <>
                <NavItem>
                  <NavLink tag={RRNavLink} to="/videos/add">
                    Add Video
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RRNavLink} to={`/users/${userProfile?.id}`}>
                    My Videos
                  </NavLink>
                </NavItem>
                <NavItem>
                  <a
                    aria-current="page"
                    className="nav-link"
                    style={{ cursor: "pointer" }}
                    onClick={logout}
                  >
                    Logout
                  </a>
                </NavItem>
              </>
            )}
            {!isLoggedIn && (
              <>
                <NavItem>
                  <NavLink tag={RRNavLink} to="/login">
                    Login
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RRNavLink} to="/register">
                    Register
                  </NavLink>
                </NavItem>
              </>
            )}
          </Nav>
          <Nav navbar>
            {userProfile && (
              <NavItem>
                <NavLink>Welcome, {userProfile.name}!</NavLink>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;

{/* <nav className="navbar navbar-expand navbar-dark bg-info">
      <Link to="/" className="navbar-brand">
        StreamISH
      </Link>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Feed
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/videos/add" className="nav-link">
            New Video
          </Link>
        </li>
      </ul>
    </nav> */}