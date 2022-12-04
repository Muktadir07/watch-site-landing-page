import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";
import { Col, Container, Row } from "react-bootstrap";

export default function App() {
  return (
    <>
    <section className='Categorybanner d_flex'>
        <Container>
            <Row>
                <Col lg={12}>
                    <div className="title">
                        <h4>Our <span>Categories</span></h4>
                    </div>
                    
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={20}
                        slidesPerGroup={4}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide className="image-box d-flex">
                            <img className='' src='../assets/images/cat-smart.png' />
                            <div className="text-cat">
                               <h4 >Smart Watches</h4> 
                            </div>
                            
                        </SwiperSlide>
                        <SwiperSlide className="image-box">
                            <img className='' src='../assets/images/cat-accessories.png' />
                            <div className="text-cat">
                               <h4 >Accessories</h4> 
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="image-box">
                            <img className='' src='../assets/images/cat-jewellery.png' />
                            <div className="text-cat">
                               <h4 >Jewellery</h4> 
                            </div>
                            
                        </SwiperSlide>
                        <SwiperSlide className="image-box">
                            <img className='' src='../assets/images/cat-watch.png' />
                            <div className="text-cat">
                               <h4 >Classic Watches</h4> 
                            </div>
                            

                        </SwiperSlide>

                        <SwiperSlide className="image-box d-flex">
                            <img className='' src='../assets/images/cat-smart.png' />
                            <div className="text-cat">
                               <h4 >Smart Watches</h4> 
                            </div>
                            
                        </SwiperSlide>
                        <SwiperSlide className="image-box">
                            <img className='' src='../assets/images/cat-accessories.png' />
                            <div className="text-cat">
                               <h4 >Accessories</h4> 
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="image-box">
                            <img className='' src='../assets/images/cat-jewellery.png' />
                            <div className="text-cat">
                               <h4 >Jewellery</h4> 
                            </div>
                            
                        </SwiperSlide>
                        <SwiperSlide className="image-box">
                            <img className='' src='../assets/images/cat-watch.png' />
                            <div className="text-cat">
                               <h4 >Classic Watches</h4> 
                            </div>
                            

                        </SwiperSlide>

                        <SwiperSlide className="image-box d-flex">
                            <img className='' src='../assets/images/cat-smart.png' />
                            <div className="text-cat">
                               <h4 >Smart Watches</h4> 
                            </div>
                            
                        </SwiperSlide>
                        <SwiperSlide className="image-box">
                            <img className='' src='../assets/images/cat-accessories.png' />
                            <div className="text-cat">
                               <h4 >Accessories</h4> 
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="image-box">
                            <img className='' src='../assets/images/cat-jewellery.png' />
                            <div className="text-cat">
                               <h4 >Jewellery</h4> 
                            </div>
                            
                        </SwiperSlide>
                        <SwiperSlide className="image-box">
                            <img className='' src='../assets/images/cat-watch.png' />
                            <div className="text-cat">
                               <h4 >Classic Watches</h4> 
                            </div>
                            

                        </SwiperSlide>
                        
                        
                    </Swiper>

                </Col>
            </Row>

        </Container>
    

    </section>
      
    </>
  );
}