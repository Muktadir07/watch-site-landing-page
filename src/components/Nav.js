import React from 'react'
import { Col, Container, ListGroup, Row } from 'react-bootstrap'

const Nav = () => {
  return (
    <section className='Nav d_flex'>
      <Container>
        <Row>
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
      </Container>

    </section>
  )
}

export default Nav