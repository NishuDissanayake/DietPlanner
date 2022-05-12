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
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBCollapse
} from 'mdb-react-ui-kit';
import Logo from '../../Assets/Images/logo.png';
import { Link } from 'react-router-dom';


export default function Navbar() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' className='navigation'>
      <MDBContainer fluid>
        <MDBNavbarBrand className="Navbar-Logo" tag={Link} to='/'><img src={Logo} className="applogo" /></MDBNavbarBrand>

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
              <MDBNavbarLink tag={Link} to='/' active aria-current='page' className='navlinkcol'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem className='itemsset'>
              <MDBNavbarLink tag={Link} to='/planner'className='navlinkcol'>Planner</MDBNavbarLink>
            </MDBNavbarItem>


            <MDBNavbarItem className='itemsset'>
              <MDBNavbarLink href='http://healthyceylon.epizy.com/' className='navlinkcol'>Blog</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem className='itemsset'>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link navlinkcol' >
                  Account
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem>
                    <MDBDropdownLink tag={Link} to='/login' >Login</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink tag={Link} to='/profile' >Profile</MDBDropdownLink>
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