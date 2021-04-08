import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-scroll";
import "./MobileNavBar.scss";

export default function (props) {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className="navbar_mobile">
      <Navbar color="faded" light>
        <NavbarBrand>
          <a href="/" className="mobile_logo">
            E
          </a>
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav className="navbar_bootstrap" navbar>
            <NavItem>
              <NavLink>
                <Link
                  activeClass="active"
                  to="project"
                  spy={true}
                  smooth={true}
                >
                  Project
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link activeClass="active" to="resume" spy={true} smooth={true}>
                  Résumé
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link activeClass="active" to="about" spy={true} smooth={true}>
                  About
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                >
                  Contact
                </Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
