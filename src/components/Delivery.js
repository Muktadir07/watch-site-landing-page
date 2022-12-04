import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Delivery = () => {
  return (
    <>
    <section className='Delivery d_flex'>
        <Container>
            <Row>
                <Col lg={3} className='delivery-list d-flex'>
                  <div className='img-icon'>
                    <img src="../assets/images/fast.png" alt="fast logo" />
                  </div>
                  <div className="text">
                    <h6>Free Delivery</h6>
                    <p>For all orders over $99</p>
                  </div>
                  
                </Col>
                <Col lg={3} className='delivery-list d-flex'>
                  <div className="vl "></div>
                  <div className='img-icon'>
                    <img src="../assets/images/returning.png" alt="fast logo" />
                  </div>
                  <div className="text">
                    <h6>90 Days Return</h6>
                    <p>If goods have problems</p>
                  </div>
                </Col>
                <Col lg={3} className='delivery-list d-flex'>
                <div className="vl "></div>
                  <div className='img-icon'>
                    <img src="../assets/images/credit-card.png" alt="fast logo" />
                  </div>
                  <div className="text">
                    <h6>Secure Payment</h6>
                    <p>100% secure payment</p>
                  </div>
                  
                </Col>
                <Col lg={3} className='delivery-list d-flex'>
                  <div className="vl "></div>
                  <div className='img-icon'>
                    <img src="../assets/images/support.png" alt="fast logo" />
                  </div>
                  <div className="text">
                    <h6>24/7 Support</h6>
                    <p>Dedicated Support</p>
                  </div>
                </Col>
            </Row>
        </Container>

    </section>
    </>
  )
}

export default Delivery