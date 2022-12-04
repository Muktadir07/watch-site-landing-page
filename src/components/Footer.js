import React from 'react'
import { Container,Row,Col,ListGroup,Button, Form } from 'react-bootstrap'
import { FaSearch,FaRegHeart,FaRegUser,FaMobileAlt } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { BsCart3,BsTwitter,BsYoutube,BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
    <section className='Footer d-flex'>
        <Container>
            <Row className='footer-logo d-flex justify-content-center align-items-start'>
                <Col lg={12}>
                    <div className='img d-flex justify-content-center align-items-start'>
                        <img src="assets/images/watch-logo.png" alt="footer-logo" />
                    </div>
                </Col>
            </Row>
            <Row className='d_flex justify-content-center'>
                <Col lg={12} className='bg-transparent '>
                        <div className="menubar">
                        <ul>
                        <li><a className='active' id="style-2" href="#">Home</a></li>
                        <li><a id="style-2" href="#">Shop</a></li>
                        <li><a id="style-2" href="#">About us</a></li>
                        <li><a id="style-2" href="#">Contact Us</a></li>
                        
                        </ul>
                    </div>  

                </Col>
            </Row>

            <Row className="footer-widget d_flex justify-content-center">
                <Col lg={4}>
                    <div className='d-flex justify-content-start'>
                            <div className=''>
                                <h4>Store Address</h4>
                                <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
                            </div>

                    </div>
                </Col>
                <Col lg={4}>
                    <div className='d-flex justify-content-end'>
                        <div className=''>
                            <h4>Contact No.</h4>
                            <p>+880 02 223 344 , +880 123 456 789</p>
                        </div>

                    </div>
                </Col>
                <Col lg={4}>
                <div className='bg-black socialdiv d-flex justify-content-end'>
                    <div className=''>
                        <h4 className='ps-3'>Social Media</h4>
                        <ListGroup horizontal className='adminbar ms-auto '>
                            <ListGroup.Item className='listgroupitem'><RiFacebookFill className='facebook me-1'/></ListGroup.Item>
                            <ListGroup.Item className='listgroupitem'><BsYoutube className='youtube '/></ListGroup.Item>
                            <ListGroup.Item className='listgroupitem'><BsInstagram className='instragram'/></ListGroup.Item>
                            <ListGroup.Item className='listgroupitem'><BsTwitter className='twitter'/></ListGroup.Item>
                        </ListGroup>
                    </div>
                    
                  

                </div>
                </Col>

            </Row>
            <Row className='footer-cpy d_flex justify-content-center text-center'>
                <div className=''>
                    <h5>A product of Soft IT Care</h5>
                    <p>© 2022 Soft IT Care . All Rights Reserved.</p>
                </div>
                
            </Row>
        </Container>

    </section>
    
    </>
  )
}

export default Footer