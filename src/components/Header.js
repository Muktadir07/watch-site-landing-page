import React from 'react'
import { Container,Row,Col,ListGroup,Button, Form } from 'react-bootstrap'
import { FaSearch,FaRegHeart,FaRegUser,FaMobileAlt } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { BsCart3,BsTwitter,BsYoutube,BsInstagram } from "react-icons/bs";

import { FaBeer } from 'react-icons/fa';

const Header = () => {
  return (

    <section className='Header d_flex'>

      <Container className=''>
          <Row className=''>
              <Col lg={4} className='bg-black'>
                <div className='bg-transparent'>
                  <Form className="search-bar">
                  <Form.Control
                      type="search"
                      placeholder="Search here..."
                      className="bordered-search"
                      aria-label="Search"

                      />
                      <Button className='search-button' variant="success">
                          <FaSearch/>
                      </Button>
                  </Form>
                </div>
                <div className='bg-transparent d-flex justify-content-start'>
                <ListGroup horizontal className='mobilenum me-auto align-items-start '>
                      <ListGroup.Item className='listgroupitem'><FaMobileAlt className='phone-number me-2'/> +1 (7635) 547-12-97</ListGroup.Item>
                      
                  </ListGroup>

                </div>
              
                  

              </Col>
              <Col lg={4} className='bg-black d_flex justify-content-center'>
                  <img className='bg-black logo-image  text-center' src='assets/images/watch-logo.png' />
              </Col>
              <Col lg={4} className='bg-black '>
                <div className='bg-black topdiv d-flex justify-content-end'>
                  <ListGroup horizontal className='adminbar ms-auto align-items-end '>
                      <ListGroup.Item className='listgroupitem'><FaRegHeart className='heart me-2'/> <span className='top-number'>7</span> Wishlist</ListGroup.Item>
                      <ListGroup.Item className='listgroupitem'><BsCart3 className='cart me-2'/> <span className='top-number'>2</span>Cart</ListGroup.Item>
                      <ListGroup.Item className='listgroupitem'><FaRegUser className='account me-2'/>Account</ListGroup.Item>
                  </ListGroup>

                </div>
                <div className='bg-black socialdiv d-flex justify-content-end'>
                  
                  <ListGroup horizontal className='adminbar ms-auto '>
                      <ListGroup.Item className='listgroupitem'><RiFacebookFill className='facebook me-1'/></ListGroup.Item>
                      <ListGroup.Item className='listgroupitem'><BsYoutube className='youtube '/></ListGroup.Item>
                      <ListGroup.Item className='listgroupitem'><BsInstagram className='instragram'/></ListGroup.Item>
                      <ListGroup.Item className='listgroupitem'><BsTwitter className='twitter'/></ListGroup.Item>
                  </ListGroup>

                </div>
                  
              </Col>

              
          </Row>
      </Container>

    </section>
    
  )
}

export default Header