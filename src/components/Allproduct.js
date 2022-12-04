import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Allproduct = () => {
  return (
    <>
    <section className='Allproduct d_flex mt-3'>
        <Container >
            <Row>
                <Col>
                    <div className="title">
                        <h4>Our <span>All Products</span></h4>
                    </div>
                </Col>
            </Row>
            <Row className='product-set'>
                <Col lg={12}>
                    <div className='product-display'>
                        <div className="product-card">
                            <img className='' src="../assets/images/watch-6.png" alt="img" />
                            <h5 className='text-center mt-3'>jacques du manoir</h5>
                            <hr/>
                            <h4>BDT 5000</h4>
                            <p>BDT 6700</p>
                        </div>
                        <div className="product-card">
                            <img className='' src="../assets/images/watch-2.png" alt="img" />
                            <h5 className='text-center'>Fossil Mens Wear</h5>
                            <hr/>
                            <h4>BDT 21200</h4>
                            <p>BDT 26700</p>
                        </div>
                        <div className="product-card">
                            <img className='' src="../assets/images/watch-5.png" alt="img" />
                            <h5 className='text-center'>CASIO Woman (Sheen)</h5>
                            <hr/>
                            <h4>BDT 55000</h4>
                            <p>BDT 60700</p>
                        </div>
                        <div className="product-card">
                            <img className='' src="../assets/images/watch-9.png" alt="img" />
                            <h5 className='text-center'>Calvin Klein Men</h5>
                            <hr/>
                            <h4>BDT 15000</h4>
                            <p>BDT 16700</p>
                        </div>
                        <div className="product-card">
                            <img className='' src="../assets/images/watch-3.png" alt="img" />
                            <h5 className='text-center'>jacques du man</h5>
                            <hr/>
                            <h4>BDT 25000</h4>
                            <p>BDT 29700</p>
                        </div>

                    </div>

                </Col>

            </Row> 

            <Row className='product-set'>
                <Col lg={12}>
                    <div className='product-display'>
                        <div className="product-card">
                            <img className='' src="../assets/images/watch-7.png" alt="img" />
                            <h5 className='text-center'>jacques du manoir</h5>
                            <hr/>
                            <h4>BDT 5000</h4>
                            <p>BDT 6700</p>
                        </div>
                        <div className="product-card">
                            <img className='' src="../assets/images/watch-8.png" alt="img" />
                            <h5 className='text-center'>Fossil Mens Wear</h5>
                            <hr/>
                            <h4>BDT 21200</h4>
                            <p>BDT 26700</p>
                        </div>
                        <div className="product-card">
                            <img className='' src="../assets/images/watch.png" alt="img" />
                            <h5 className='text-center'>CASIO Woman (Sheen)</h5>
                            <hr/>
                            <h4>BDT 55000</h4>
                            <p>BDT 60700</p>
                        </div>
                        <div className="product-card">
                            <img className='' src="../assets/images/watch-4.png" alt="img" />
                            <h5 className='text-center'>Calvin Klein Men</h5>
                            <hr/>
                            <h4>BDT 15000</h4>
                            <p>BDT 16700</p>
                        </div>
                        <div className="product-card">
                            <img className='' src="../assets/images/watch-10.png" alt="img" />
                            <h5 className='text-center'>jacques du man</h5>
                            <hr/>
                            <h4>BDT 25000</h4>
                            <p>BDT 29700</p>
                        </div>

                    </div>

                </Col>

            </Row> 
            <Row>
                <div className='view-btn d-flex justify-content-center'>
                    <button type="button" className='btn btn-outline-primary'> View All Products</button>
                </div>
                
            </Row>
        </Container>
    </section>
    
    </>
  )
}

export default Allproduct