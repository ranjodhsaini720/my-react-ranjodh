import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import sign from "../assets/image/sign.png"
import vh7 from "../assets/image/h7.png"
import h7 from "../assets/image/h7.jpg"
import h8 from "../assets/image/h8.jpg"
import h9 from "../assets/image/h9.jpg"
export default function home() {
    return (
        <>
            <section className='swiper'>

                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="images d-flex align-items-center justify-content-center">
                            <div>
                                <div className='text-center'>
                                    <h1 className='display-2'>Are You Ready For Fine Dining ?</h1>
                                    <p className='pera py-3'>We are Famous for our meticulously crafted <br />
                                        and frindly Staff Book your table now</p>
                                </div>
                                <Row className='g-2 justify-content-center'>
                                    <Col lg={3} md={6}>
                                        <div className='opt'>
                                            <select name="" id="" className='border rounded-0 p-3 w-100'>
                                                <option value="">1 Person</option>
                                                <option value="">2 Person</option>
                                                <option value="">3 Person</option>
                                                <option value="">4 Person</option>
                                                <option value="">5 Person</option>
                                                <option value="">6 Person</option>
                                                <option value="">7 Person</option>
                                                <option value="">8 Person</option>
                                            </select>
                                        </div>
                                    </Col>
                                    <Col lg={3} md={6}>
                                        <div className='opt'>
                                            <input type="date" placeholder='' className='border rounded-0 w-100' style={{ padding: '14px' }} />
                                        </div>
                                    </Col>
                                    <Col lg={3} md={6}>
                                        <div className='opt'>
                                            <select name="" id="" className='border rounded-0 p-3 w-100'>
                                                <option value="">7.00 pm</option>
                                                <option value="">8.00 pm</option>
                                                <option value="">9.00 pm</option>
                                                <option value="">10.00 pm</option>
                                                <option value="">11.00 pm</option>
                                                <option value="">12.00 pm</option>
                                                <option value="">1.00 am</option>
                                                <option value="">2.00 am</option>
                                            </select>
                                        </div>
                                    </Col>
                                    <Col lg={3} md={6}>
                                        <div className='opt'>
                                            <button className='butn w-100'>BOOK A TABLE</button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="images d-flex align-items-center justify-content-center">
                            <div>
                                <div className='text-center'>
                                    <h1 className='display-2'>Are You Ready For Fine Dining ?</h1>
                                    <p className='pera py-3'>We are Famous for our meticulously crafted <br />
                                        and frindly Staff Book your table now</p>
                                </div>
                                <Row className='g-2 justify-content-center'>
                                    <Col lg={3} md={6}>
                                        <div className='opt'>
                                            <select name="" id="" className='border rounded-0 p-3 w-100'>
                                                <option value="">1 Person</option>
                                                <option value="">2 Person</option>
                                                <option value="">3 Person</option>
                                                <option value="">4 Person</option>
                                                <option value="">5 Person</option>
                                                <option value="">6 Person</option>
                                                <option value="">7 Person</option>
                                                <option value="">8 Person</option>
                                            </select>
                                        </div>
                                    </Col>
                                    <Col lg={3} md={6}>
                                        <div className='opt'>
                                            <input type="date" placeholder='' className='border rounded-0 w-100' style={{ padding: '14px' }} />
                                        </div>
                                    </Col>
                                    <Col lg={3} md={6}>
                                        <div className='opt'>
                                            <select name="" id="" className='border rounded-0 p-3 w-100'>
                                                <option value="">7.00 pm</option>
                                                <option value="">8.00 pm</option>
                                                <option value="">9.00 pm</option>
                                                <option value="">10.00 pm</option>
                                                <option value="">11.00 pm</option>
                                                <option value="">12.00 pm</option>
                                                <option value="">1.00 am</option>
                                                <option value="">2.00 am</option>
                                            </select>
                                        </div>
                                    </Col>
                                    <Col lg={3} md={6}>
                                        <div className='opt'>
                                            <button className='butn w-100'>BOOK A TABLE</button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="images d-flex align-items-center justify-content-center">
                            <div>
                                <div className='text-center'>
                                    <h1 className='display-2'>Are You Ready For Fine Dining ?</h1>
                                    <p className='pera py-3'>We are Famous for our meticulously crafted <br />
                                        and frindly Staff Book your table now</p>
                                </div>
                                <Row className='g-2 justify-content-center'>
                                    <Col lg={3} md={6}>
                                        <div className='opt'>
                                            <select name="" id="" className='border rounded-0 p-3 w-100'>
                                                <option value="">1 Person</option>
                                                <option value="">2 Person</option>
                                                <option value="">3 Person</option>
                                                <option value="">4 Person</option>
                                                <option value="">5 Person</option>
                                                <option value="">6 Person</option>
                                                <option value="">7 Person</option>
                                                <option value="">8 Person</option>
                                            </select>
                                        </div>
                                    </Col>
                                    <Col lg={3} md={6}>
                                        <div className='opt'>
                                            <input type="date" placeholder='' className='border rounded-0 w-100' style={{ padding: '14px' }} />
                                        </div>
                                    </Col>
                                    <Col lg={3} md={6}>
                                        <div className='opt'>
                                            <select name="" id="" className='border rounded-0 p-3 w-100'>
                                                <option value="">7.00 pm</option>
                                                <option value="">8.00 pm</option>
                                                <option value="">9.00 pm</option>
                                                <option value="">10.00 pm</option>
                                                <option value="">11.00 pm</option>
                                                <option value="">12.00 pm</option>
                                                <option value="">1.00 am</option>
                                                <option value="">2.00 am</option>
                                            </select>
                                        </div>
                                    </Col>
                                    <Col lg={3} md={6}>
                                        <div className='opt'>
                                            <button className='butn w-100'>BOOK A TABLE</button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </section>

            {/* section end  */}

            <section className='p-100'>
                <Container style={{ maxWidth: '1650px' }}>
                    <Row className='g-4 justify-content-center'>
                        <Col lg={3} md={6}>
                            <div className='main_icon text-center'>
                                <div className='icon mx-auto my-3'>
                                    <i class="bi bi-cup-hot fs-1"></i>
                                </div>
                                <h2 className='fs-4 py-2 fw-bold'>Easy Customizable</h2>
                                <p className='pera'>Map where your photos were taken and discover local points of interest map where your photos</p>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div className='main_icon text-center'>
                                <div className='icon mx-auto my-3'>
                                    <i class="bi bi-trophy fs-1"></i>
                                </div>
                                <h2 className='fs-4 py-2 fw-bold'>Amazing sliders</h2>
                                <p className='pera'>Map where your photos were taken and discover local points of interest map where your photos</p>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div className='main_icon text-center'>
                                <div className='icon mx-auto my-3'>
                                    <i class="bi bi-clock-history fs-1"></i>
                                </div>
                                <h2 className='fs-4 py-2 fw-bold'>Fully Responsive</h2>
                                <p className='pera'>Map where your photos were taken and discover local points of interest map where your photos</p>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div className='main_icon text-center'>
                                <div className='icon mx-auto my-3'>
                                    <i class="bi bi-star fs-1"></i>
                                </div>
                                <h2 className='fs-4 py-2 fw-bold'>Fully Responsive</h2>
                                <p className='pera'>Map where your photos were taken and discover local points of interest map where your photos</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* sectino end */}

            <section className='chef d-flex justify-content-center p-100' id="chef">
                <Container style={{ maxWidth: '900px' }}>
                    <h2 className='fw-bold display-5 py-2 text-center'>Chef’s special</h2>
                    <div className='Menu p-3 p-md-5 mx-auto my-5'>
                        <h2 className='fs-2 fw-bold'>Today's Menu</h2>
                        <p className='pera'>11:30 am - 5:00 pm</p>
                        <div className='py-3'>
                            <h3 className='fs-4 fw-bold'>Toban grilled chese</h3>
                            <p className='pera'>grilled marble rye, tuna salad, melted american, sliced tomato</p>
                        </div>
                        <div className='py-3'>
                            <h3 className='fs-4 fw-bold'>Consommé Célestine</h3>
                            <p className='pera'>grilled marble rye, 1/2lb pastrami, melted swiss, sauerkraut</p>
                        </div>
                        <div className='py-3'>
                            <h3 className='fs-4 fw-bold'>Cerf goulash</h3>
                            <p className='pera'>mushroom barley, carrot ginger, basil, dressing</p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* section end  */}

            <section className='lorem p-100' id='about'>
                <Container>
                    <h5 className='text-white text-center'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy design</h5>

                </Container>
            </section>

            {/* section end  */}

            <section className='p-100'>
                <Container>
                    <Row className='g-3 justify-content-center align-items-center'>
                        <Col lg={6} md={6}>
                            <div>
                                <h2 className='display-6 fw-bold'>Our chef d’oeuvre … yummie!</h2>
                                <p className='pera py-3'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy tincidunt ut laoreet dolore magna aliquam erat.</p>
                                <p className='pera'>Map where your photos were taken and discover local points of interest map where Map where your photos were. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                <img src={sign} alt="sign" className='object-fit-cover' />
                            </div>
                        </Col>
                        <Col lg={6} md={6}>
                            <div>
                                <img src={vh7} alt="" className='w-75 rounded-circle' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* section end  */}

            <section className='amazing d-flex align-items-center justify-content-center p-100'>
                <Container>
                    <Row className='g-5 justify-content-center'>
                        <Col lg={6} md={6}>
                            <div className='py-4'>
                                <div className='d-flex align-items-center'>
                                    <h5 className='text-white'>Design</h5>
                                    <h5 className='ms-auto text-white'>20%</h5>
                                </div>
                                <div class="progress rounded-0" style={{ height: '10px' }}>
                                    <div class="progress-bar rounded-end" style={{ height: '10px', width: '20%' }}></div>
                                </div>
                            </div>
                            {/*  */}
                            <div className='py-4'>
                                <div className='d-flex align-items-center'>
                                    <h5 className='text-white'>Marketing</h5>
                                    <h5 className='ms-auto text-white'>50%</h5>
                                </div>
                                <div class="progress rounded-0" style={{ height: '10px' }}>
                                    <div class="progress-bar rounded-end" style={{ height: '10px', width: '50%' }}></div>
                                </div>
                            </div>
                            {/*  */}
                            <div className='py-4'>
                                <div className='d-flex align-items-center'>
                                    <h5 className='text-white'>Photography</h5>
                                    <h5 className='ms-auto text-white'>70%</h5>
                                </div>
                                <div class="progress rounded-0" style={{ height: '10px' }}>
                                    <div class="progress-bar rounded-end" style={{ height: '10px', width: '70%' }}></div>
                                </div>
                            </div>
                            {/*  */}
                            <div className='py-4'>
                                <div className='d-flex align-items-center'>
                                    <h5 className='text-white'>Development</h5>
                                    <h5 className='ms-auto text-white'>80%</h5>
                                </div>
                                <div class="progress rounded-0" style={{ height: '10px' }}>
                                    <div class="progress-bar rounded-end" style={{ height: '10px', width: ' 80%' }}></div>
                                </div>
                            </div>
                        </Col>

                        <Col lg={6} md={6}>
                            <div>
                                <h2 className='display-5 fw-bold py-2 text-white'>Great design <br />
                                    Amazing features</h2>
                                <p className='pera py-3'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, and sed tincidunt ut laoreet dolore magna aliquam erat volutpat lorem. Lorem ipsum dolor amet, consectetuer adipiscing elit</p>

                                <button className='butn bg-white text-dark'>PURCHASE</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* section end  */}

            <section className='p-100 text-center'>
                <Container>
                    <h2 className='display-5 fw-bold py-2'>Made with love</h2>
                    <p className='pera py-3'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy tincidunt <br />
                        ut laoreet dolore magna aliquam erat volutpat.</p>
                    <Row className='g-3 justify-content-center pt-100'>
                        <Col lg={4} md={6}>
                            <div>
                                <img src={h7} alt="" className='w-100' />
                                <div className='text-start pt-4'>
                                    <h4>Easy Customizable</h4>
                                    <p className='pera py-3'>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6}>
                            <div>
                                <img src={h8} alt="" className='w-100' />
                                <div className='text-start pt-4'>
                                    <h4>Easy Customizable</h4>
                                    <p className='pera py-3'>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6}>
                            <div>
                                <img src={h9} alt="" className='w-100' />
                                <div className='text-start pt-4'>
                                    <h4>Easy Customizable</h4>
                                    <p className='pera py-3'>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* section end  */}
            <section className='Dinner p-100 ' id='menu'>
                <Container>
                    <Row className='g-4 align-items-center'>
                        <Col lg={6}>
                            <Row className='g-4'>
                                <Col lg={12}>
                                    <div className='bg-white p-2 p-md-5'>
                                        <h2 className='display-6 py-3'>Easy Dinner</h2>
                                        <div className='d-flex align-items-center py-4'>
                                            <div className='text-start'>
                                                <h4 className='fw-bold'>Charcuterie Platter</h4>
                                                <p className='pera'>Proscuitto / Cheese / Liver / pate / Olives</p>
                                            </div>
                                            <h2 className='ms-auto'><sup>$</sup>59</h2>
                                        </div>
                                        <div className='d-flex align-items-center py-4'>
                                            <div className='text-start'>
                                                <h4 className='fw-bold'>Sea & Brie Dip</h4>
                                                <p className='pera'>Hand / chopped / beef / Tenderloin / Spices </p>
                                            </div>
                                            <h2 className='ms-auto'><sup>$</sup>22</h2>
                                        </div>
                                        <div className='d-flex align-items-center py-4'>
                                            <div className='text-start'>
                                                <h4 className='fw-bold'>Steak Tartare</h4>
                                                <p className='pera'>Hand / chopped / beef / Tenderloin / Spices</p>
                                            </div>
                                            <h2 className='ms-auto'><sup>$</sup>14</h2>
                                        </div>
                                        <div className='d-flex align-items-center py-4'>
                                            <div className='text-start'>
                                                <h4 className='fw-bold'>Fried Calamari</h4>
                                                <p className='pera'>Fried / Semolina / flour / Caper / remoulade</p>
                                            </div>
                                            <h2 className='ms-auto'><sup>$</sup>9</h2>
                                        </div>
                                        <div className='d-flex align-items-center py-4'>
                                            <div className='text-start'>
                                                <h4 className='fw-bold'>French Onion Soup</h4>
                                                <p className='pera'>Caramelized / onions / Beef / broth / Melted / Swiss</p>
                                            </div>
                                            <h2 className='ms-auto'><sup>$</sup>9</h2>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={12}>
                                    <div className='bg-white p-2 p-md-5'>
                                        <h2 className='display-6 py-3'>Chef’s special</h2>
                                        <div className='d-flex align-items-center py-4'>
                                            <div className='text-start'>
                                                <h4 className='fw-bold'>Charcuterie Platter</h4>
                                                <p className='pera'>Proscuitto / Cheese / Liver / pate / Olives</p>
                                            </div>
                                            <h2 className='ms-auto'><sup>$</sup>15</h2>
                                        </div>
                                        <div className='d-flex align-items-center py-4'>
                                            <div className='text-start'>
                                                <h4 className='fw-bold'>Bigoli con l’arna
                                                </h4>
                                                <p className='pera'>Hand / chopped / beef / Tenderloin / Spices </p>
                                            </div>
                                            <h2 className='ms-auto'><sup>$</sup>9</h2>
                                        </div>
                                        <div className='d-flex align-items-center py-4'>
                                            <div className='text-start'>
                                                <h4 className='fw-bold'>Mexican Chayote Soup
                                                </h4>
                                                <p className='pera'>Hand / chopped / beef / Tenderloin / Spices</p>
                                            </div>
                                            <h2 className='ms-auto'><sup>$</sup>14</h2>
                                        </div>
                                        <div className='d-flex align-items-center py-4'>
                                            <div className='text-start'>
                                                <h4 className='fw-bold'>Jota or Iota or Jote
                                                </h4>
                                                <p className='pera'>Fried / Semolina / flour / Caper / remoulade</p>
                                            </div>
                                            <h2 className='ms-auto'><sup>$</sup>39</h2>
                                        </div>
                                        <div className='d-flex align-items-center py-4'>
                                            <div className='text-start'>
                                                <h4 className='fw-bold'>Gulasch or Goulasch
                                                </h4>
                                                <p className='pera'>Caramelized / onions / Beef / broth / Melted / Swiss</p>
                                            </div>
                                            <h2 className='ms-auto'><sup>$</sup>22</h2>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6}>
                            <div className='text-center' style={{ marginBottom: '25%' }}>
                                <h3 className='fw-bold'>Toban grilled chese</h3>
                                <h2 className='display-5 py-4'>Consommé Célestine</h2>
                                <h3 className='fw-bold'>Cerf goulash</h3>
                            </div>
                            <Row className='g-'>
                                <Col lg={12}>
                                    <div className='bg-white p-2 p-md-5'>
                                        <h2 className='display-6 py-3'>Chef’s special</h2>
                                        <div className='d-flex align-items-center py-4'>
                                            <div className='text-start'>
                                                <h4 className='fw-bold'>Charcuterie Platter</h4>
                                                <p className='pera'>Proscuitto / Cheese / Liver / pate / Olives</p>
                                            </div>
                                            <h2 className='ms-auto'><sup>$</sup>15</h2>
                                        </div>
                                        <div className='d-flex align-items-center py-4'>
                                            <div className='text-start'>
                                                <h4 className='fw-bold'>Bigoli con l’arna
                                                </h4>
                                                <p className='pera'>Hand / chopped / beef / Tenderloin / Spices </p>
                                            </div>
                                            <h2 className='ms-auto'><sup>$</sup>9</h2>
                                        </div>
                                        <div className='d-flex align-items-center py-4'>
                                            <div className='text-start'>
                                                <h4 className='fw-bold'>Mexican Chayote Soup
                                                </h4>
                                                <p className='pera'>Hand / chopped / beef / Tenderloin / Spices</p>
                                            </div>
                                            <h2 className='ms-auto'><sup>$</sup>14</h2>
                                        </div>
                                        <div className='d-flex align-items-center py-4'>
                                            <div className='text-start'>
                                                <h4 className='fw-bold'>Jota or Iota or Jote
                                                </h4>
                                                <p className='pera'>Fried / Semolina / flour / Caper / remoulade</p>
                                            </div>
                                            <h2 className='ms-auto'><sup>$</sup>39</h2>
                                        </div>
                                        <div className='d-flex align-items-center py-4'>
                                            <div className='text-start'>
                                                <h4 className='fw-bold'>Gulasch or Goulasch
                                                </h4>
                                                <p className='pera'>Caramelized / onions / Beef / broth / Melted / Swiss</p>
                                            </div>
                                            <h2 className='ms-auto'><sup>$</sup>22</h2>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <div className='text-center' style={{ marginTop: '25%' }}>
                                <h3 className='fw-bold'>Toban grilled chese</h3>
                                <h2 className='display-5 py-4'>Consommé Célestine</h2>
                                <h3 className='fw-bold'>Cerf goulash</h3>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* section end  */}
            <section className='clients p-100'>
                <Container>
                    <Row className='g-3 justify-content-center'>
                        <Col lg={3} md={6}>
                            <div className='text-center'>
                                <h2 className='fw-bold'>137</h2>
                                <h5 className='fw-bold'>Satisfied Clients</h5>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div className='text-center'>
                                <h2 className='fw-bold'>452</h2>
                                <h5 className='fw-bold'>Projects Finished</h5>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div className='text-center'>
                                <h2 className='fw-bold'>1320</h2>
                                <h5 className='fw-bold'>Cups of Coffe</h5>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div className='text-center'>
                                <h2 className='fw-bold'>1830</h2>
                                <h5 className='fw-bold'>Projects Finished</h5>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* section end  */}
            <section className='restaurant p-100 text-center'>
                <Container>
                    <h2 className='display-5 fw-bold text-white'>What is new in our restaurant?</h2>
                    <p className='text-white pera py-3'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy <br />
                        tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                    <button className='butn m-0 m-md-2'>LEARN MORE</button>
                    <button className='butn bg-white text-dark'>BUY THEME</button>
                </Container>
            </section>

            {/* section end  */}

            <section className='p-100 swpier_two'>
                <Container>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <i class="bi bi-chat fs-1"></i>
                            <p className='pera fs-5 text-white'>Diam nonummy sit amet, consectetuer adipiscing elit, sed tincidunt ut laoreet dolore <br />
                                magna aliquam erat volutpat.</p>
                            <h6>Janette Telfer, Profesional</h6>
                        </SwiperSlide>
                        <SwiperSlide>
                            <i class="bi bi-chat fs-1"></i>
                            <p className='pera fs-5 text-white'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy design <br />
                                Aenean commodo ligula eget dolor massa</p>
                            <h6>Thomas Taylor, Profesional</h6>
                        </SwiperSlide>
                        <SwiperSlide>
                            <i class="bi bi-chat fs-1"></i>
                            <p className='pera fs-5 text-white'>Diam nonummy sit amet, consectetuer adipiscing elit, sed tincidunt ut laoreet dolore <br />
                                magna aliquam erat volutpat.</p>
                            <h6>Leanne Wwlf, Team Lea&r</h6>
                        </SwiperSlide>
                    </Swiper>
                </Container>
            </section>

            {/* section end  */}

            <section className='contact p-100' id='contact'>
                <Container>
                    <Row className='g-0'>
                        <Col lg={4} md={6}>
                            <div className='bg-white p-2 p-md-5 text-start'>
                                <h5 className='display-6 fw-bold py-3'>Contact</h5>
                                <div className='py-3'>
                                    <h6 className='fw-bold'>Address :</h6>
                                    <p className='pera text-dark' style={{ lineHeight: '2' }}>26 Saint George’s Road, <br />
                                        London SW19 4DP</p>
                                </div>
                                <div className='py-3'>
                                    <h6 className='fw-bold'>Email :</h6>
                                    <p className='pera text-dark' style={{ lineHeight: '2' }}>test@gmail.com <br />
                                        test@gmail.com</p>
                                </div>
                                <div className='py-3'>
                                    <h6 className='fw-bold'>Phone :</h6>
                                    <p className='pera text-dark' style={{ lineHeight: '2' }}>0987654321 <br />
                                        9934567890</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={8} md={6}>
                            <div className='h-100'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13612.877149723601!2d76.25949765!3d31.463153399999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1695625483277!5m2!1sen!2sin"
                                    style={{ width: '100%', height: '100%', border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* section end  */}

        </>
    );
}