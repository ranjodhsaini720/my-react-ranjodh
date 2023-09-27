import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import avtarimg from "../../assets/image/avatar-1.png"
import avtarimg1 from "../../assets/image/avatar-2.png"
import avtarimg2 from "../../assets/image/avatar-3.png"
import avtarimg3 from "../../assets/image/avatar-4.png"
import avtarimg4 from "../../assets/image/avatar-5.png"
import avtarimg5 from "../../assets/image/avatar-6.png"
export default function footer() {
  return (
    <>
      <footer className='p-100 text-center text-md-start'>
        <Container fluid style={{ maxWidth: '1700px' }}>
          <Row className='g-3'>
            <Col lg={3}>
              <div>
                <h5 className='pb-3'>Customer Service</h5>
                <ul className='list-unstyled'>
                  <li className='py-2'><a href="#home">Home</a></li>
                  <li className='py-2'><a href="#chef">Daily Specials</a></li>
                  <li className='py-2'><a href="#about">About Us</a></li>
                  <li className='py-2'><a href="#menu">Our Menu</a></li>
                  <li className='py-2'><a href="#contact">Contact Us</a></li>
                </ul>
              </div>
            </Col>
            <Col lg={3}>
              <div>
                <h5 className='pb-3'>Latest News</h5>
                <ul className='list-unstyled'>
                  <li className='py-2'>Visions Helps You</li>
                  <li className='py-2'>Continue Working</li>
                  <li className='py-2'>Make it Simple</li>
                  <li className='py-2'>School in London</li>
                  <li className='py-2'>Eastside Massage</li>
                </ul>
              </div>
            </Col>
            <Col lg={3}>
              <div>
                <h5 className='pb-3'>Our Instagram</h5>
                <ul className='list-unstyled d-flex '>
                  <li className='mx-2'><img src={avtarimg1} alt="" className='w-100' /></li>
                  <li className='mx-2'><img src={avtarimg2} alt="" className='w-100' /></li>
                  <li className='mx-2'><img src={avtarimg3} alt="" className='w-100' /></li>
                </ul>
                <ul className='list-unstyled d-flex '>
                  <li className='mx-2'><img src={avtarimg4} alt="" className='w-100' /></li>
                  <li className='mx-2'><img src={avtarimg5} alt="" className='w-100' /></li>
                  <li className='mx-2'><img src={avtarimg2} alt="" className='w-100' /></li>
                </ul>
              </div>
            </Col>
            <Col lg={3}>
              <div>
                <h5 className='pb-3'>Join the club</h5>
                <div className='d-flex align-items-center'>
                  <input type="text" placeholder='Enter Email' id='email' className='w-100 border p-3 bg-white' />
                  <button className='butn py-3' style={{ border: '1px solid #e95256' }}>JOIN</button>
                </div>
                <p className='pera py-3' style={{ lineHeight: '2' }}>Sign me up to receive emails on new product arrivals,
                  special offers and exclusive events.</p>
                <hr />
                <div className='d-flex align-items-center justify-content-center justify-content-md-start'>
                  <p className='m-0 pe-2'>Follow us : </p>
                  <a href="https://www.facebook.com" className='text-white' target='_black'>
                    <i className='bi bi-facebook fs-5 m-1'></i>
                  </a>

                  <a href="https://www.twitter.com" className='text-white' target='_black'>
                    <i className='bi bi-twitter fs-5 m-1'></i>
                  </a>

                  <a href="https://www.vimeo.com" className='text-white' target='_black'>
                    <i class="bi bi-vimeo fs-5 m-1"></i>
                  </a>

                  <a href="https://www.pinterest.com" className='text-white' target='_black'>
                    <i class="bi bi-pinterest fs-5 m-1"></i>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>

    </>
  )
}
