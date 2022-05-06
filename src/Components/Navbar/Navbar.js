import React, { useState } from 'react';
import './Navbar.css';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBCollapse
} from 'mdb-react-ui-kit';
import Logo from '../../Assets/Images/logo.png';


export default function Navbar() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' className='navigation'>
      <MDBContainer fluid>
        <MDBNavbarBrand className="Navbar-Logo" href='#'><img src={Logo} className="applogo" /></MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mb-2 mb-lg-0 ms-auto justify-content-end linkset'>
            
            <MDBNavbarItem className='itemsset'>
              <MDBNavbarLink active aria-current='page' href='#' className='navlinkcol'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            
            <MDBNavbarItem className='itemsset'>
              <MDBNavbarLink href='#' className='navlinkcol'>About</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem className='itemsset'>
              <MDBNavbarLink href='#' className='navlinkcol'>Services</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem className='itemsset'>
              <MDBNavbarLink href='#' className='navlinkcol'>Pages</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem className='itemsset'>
              <MDBNavbarLink href='#' className='navlinkcol'>Blog</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem className='itemsset'>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link navlinkcol' >
                  SignUp
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Login</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Profile</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>History</MDBDropdownLink>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}