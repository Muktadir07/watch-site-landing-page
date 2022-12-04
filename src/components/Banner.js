import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper";
import { Container, Row,Col } from "react-bootstrap";
export default function App() {
    return (
      <>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
          <img className='' src='../assets/images/banner1.png' />
            <Container className="image-text">
                <Row>
                    <Col lg={12}>
                        <div className="text-box"> 
                            <h4>Get The Best For You & Your Loved Ones</h4>
                            <h1>Best <span>Branded Watches</span></h1>
                            <h1>For Any Occassion</h1>
                            <h4>Price Starting From <span> BDT 2999</span> Only</h4>
                        </div>
                    </Col>
                </Row>
            </Container>
  
          </SwiperSlide>
          <SwiperSlide>
          <img className='' src='../assets/images/banner1.png' />
            <Container className="image-text">
                <Row>
                    <Col lg={12}>
                        <div className="text-box"> 
                            <h4>Get The Best For You & Your Loved Ones</h4>
                            <h1>Best <span>Branded Watches</span></h1>
                            <h1>For Any Occassion</h1>
                            <h4>Price Starting From <span> BDT 2999</span> Only</h4>
                        </div>
                    </Col>
                </Row>
            </Container>
          </SwiperSlide>
          <SwiperSlide>
          <img className='' src='../assets/images/banner1.png' />
            <Container className="image-text">
                <Row>
                    <Col lg={12}>
                        <div className="text-box"> 
                            <h4>Get The Best For You & Your Loved Ones</h4>
                            <h1>Best <span>Branded Watches</span></h1>
                            <h1>For Any Occassion</h1>
                            <h4>Price Starting From <span> BDT 2999</span> Only</h4>
                        </div>
                    </Col>
                </Row>
            </Container>
          </SwiperSlide>
          
        </Swiper>
      </>
    );
  }