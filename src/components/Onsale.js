import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Onsale = () => {
  return (
    <>
    <section className='Onsale d_flex'>
        <Container>
            <Row className='sale-box d-flex justify-content-space-between'>
                <Col lg={4} >
                    <div className='img-box'>
                      <div className='img-size'>
                        <img src="../assets/images/wrist.png" alt="img" />
                      </div>
                      
                      <div className='img-text'>
                        <h4>Men's Watches</h4>
                        <h1 className='percent'>at <span>50% Sale !</span></h1>
                        <p>Check <span>Our Products</span> Now</p>
                        </div>  
                    </div>
                    
                </Col>
                <Col lg={4} >
                    <div className='img-box'>
                      <div className='img-size'>
                        <img src="../assets/images/watch-design.png" alt="img" />
                      </div>
                      
                      <div className='img-text2'>
                        <h4>Get The Best</h4>
                        <h1 className='percent'>At the <span>best price</span></h1>
                        <p>Check <span>Before Stock Out</span> </p>
                        </div>  
                    </div>
                    
                </Col>
                <Col lg={4} >
                    <div className='img-box'>
                      <div className='img-size'>
                        <img src="../assets/images/watch-hand.png" alt="img" />
                      </div>
                      
                      <div className='img-text3'>
                        <h4>Watches Are</h4>
                        <h4>The Best Gift</h4>
                        <h1 className='percent'><span>For Men</span></h1>
                        <p>Check Collection </p>
                        </div>   
                    </div>
                    
                </Col>

            </Row>
        </Container>

    </section>
    
    </>
  )
}

export default Onsale