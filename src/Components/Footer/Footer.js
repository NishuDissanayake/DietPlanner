import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBFooter, MDBIcon } from 'mdb-react-ui-kit';
import './Footer.css';

function Footer() {
  return (
    <div>
      <MDBFooter className='text-white text-center text-md-start footercont'>
        <div className='container p-4'>
          <MDBRow>
          <div className='col-lg-6 col-md-12 mb-8 mb-md-0'>
              <h5 className='text-uppercase mb-0'>Why Healthy Ceylon</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias.
                Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam,
                est atque cumque eum delectus sint! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias.
                Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam,
                est atque cumque eum delectus sint!  vitae repudiandae aliquam voluptatem veniam,
                est atque cumque eum delectus sint!
              </p>
            </div>
            

           
            <div className='col-lg-6 col-md-12 mb-4 mb-md-0'>
              <MDBRow>
                <h5 className='text-uppercase'>Footer Content</h5>

                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias.
                  Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam,
                  est atque cumque eum delectus sint!
                </p>

              </MDBRow>
              <MDBRow>
                <a
                  className='btn btn-link btn-floating btn-lg text-light m-1'
                  href='#!'
                  role='button'
                  data-mdb-ripple-color='dark'
                >
                  <MDBIcon fab className='fab fa-facebook-f' />
                </a>

                <a
                  className='btn btn-link btn-floating btn-lg text-light m-1'
                  href='#!'
                  role='button'
                  data-mdb-ripple-color='dark'
                >
                  <MDBIcon fab className='fa-twitter' />
                </a>

                <a
                  className='btn btn-link btn-floating btn-lg text-light m-1'
                  href='#!'
                  role='button'
                  data-mdb-ripple-color='dark'
                >
                  <MDBIcon fab className='fa-google' />
                </a>

                <a
                  className='btn btn-link btn-floating btn-lg text-light m-1'
                  href='#!'
                  role='button'
                  data-mdb-ripple-color='dark'
                >
                  <MDBIcon fab className='fa-instagram' />
                </a>

                <a
                  className='btn btn-link btn-floating btn-lg text-light m-1'
                  href='#!'
                  role='button'
                  data-mdb-ripple-color='dark'
                >
                  <MDBIcon fab className='fa-linkedin' />
                </a>

                <a
                  className='btn btn-link btn-floating btn-lg text-light m-1'
                  href='#!'
                  role='button'
                  data-mdb-ripple-color='dark'
                >
                  <MDBIcon fab className='fa-github' />
                </a>
              </MDBRow>

            </div>
          </MDBRow>
        </div>

        <div className='text-center p-3 copyright' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2022 Copyright:
          <a className='text-white' href='#'>
            Healthy Ceylon
          </a>
        </div>
      </MDBFooter>
    </div>
  )
}

export default Footer