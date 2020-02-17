import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import './menu.css';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { Animated } from "react-animated-css";
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Menu1 from './menu1.jpg';
import Menu2 from './menu2.jpg';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
const About = (props) => {


  const [xlshow, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <div>
      <Animated animationIn="fadeInLeft" animationOut="zoomOutDown" animationInDuration={1500} animationOutDuration={1400} isVisible={true}>

        <Jumbotron className="Style">
          <h1>&#9733;&#9733;&#9733;&#9733;</h1> <p className="small">  As rated on Google</p> <br />
          <h1>Enjoy our twist on a host of Classics</h1>

          <p>
            <Button className="butt" variant="outline-dark" onClick={handleShow}>Menu</Button>

          </p>

        </Jumbotron>

      </Animated>
      <>


        <Modal show={xlshow} onHide={handleClose} animation={true} autoFocus={true}  >



   
  <Row>
  
      <Image src={Menu1} fluid />
  

    
      <Image src={Menu2} fluid />
 
  </Row>




        </Modal>
      </>
     
</div>

  )

}

export default About;