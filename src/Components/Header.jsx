import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
  MDBBtn,
} from "mdb-react-ui-kit";

const Header = () => {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <header>
      <MDBNavbar expand="lg" light bgColor="light">
        <MDBContainer fluid>
          <MDBNavbarBrand href="#">Recipe Finder</MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current="page" href="#">
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle tag="a" className="nav-link" role="button">
                    Categories
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link>Pasta</MDBDropdownItem>
                    <MDBDropdownItem link>Meat</MDBDropdownItem>
                    <MDBDropdownItem link>Seafood</MDBDropdownItem>
                    <MDBDropdownItem link>Vegan</MDBDropdownItem>
                    <MDBDropdownItem link>Vegetarian</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle tag="a" className="nav-link" role="button">
                    By origin
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link>American</MDBDropdownItem>
                    <MDBDropdownItem link>British</MDBDropdownItem>
                    <MDBDropdownItem link>Chinese</MDBDropdownItem>
                    <MDBDropdownItem link>Japanese</MDBDropdownItem>
                    <MDBDropdownItem link>Mexican</MDBDropdownItem>
                    <MDBDropdownItem link>French</MDBDropdownItem>
                    <MDBDropdownItem link>Greek</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      <div
        className="p-5 text-center bg-image image-cover"
        style={{ height: "400px" }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-dark text-opacity-75">
              <h1 className="mb-3">Recipe Finder</h1>
              <p className="mb-3">Get ideas for your next meal</p>
              <MDBBtn
                tag="a"
                className="me-1"
                size="lg"
                color="danger"
                href="#recipes"
              >
                Get Started
              </MDBBtn>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
