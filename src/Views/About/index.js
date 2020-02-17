import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import './about.css';
import Carousel from 'react-bootstrap/Carousel';
import porch from './porch.jpg';
import bulb from './bulb.jpg';
import milk from './milkDrop.jpg';
import { Animated } from "react-animated-css";
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import logo from './logo.png';
import Card from 'react-bootstrap/Card';

const About = (props) => {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <div>
      <Animated animationIn="fadeInLeft" animationOut="zoomOutDown" animationInDuration={1500} animationOutDuration={1400} isVisible={true}>

        <Jumbotron className="Style">
          <h1>It's not just a Sports Bar, it's a
DESTINATION!!</h1>
          <p>
            We keep things Simple here at " The Last Stand Tavern ". Good food with Good people!
  </p>
          <p>
            <Button className="butt" variant="outline-dark" onClick={handleShow}>Learn more about our history</Button>

          </p>

        </Jumbotron>

      </Animated>
      <>


        <Modal show={show} onHide={handleClose} animation={true} className="styleModal" >
          <Modal.Header closeButton>
            <Modal.Title>Our history</Modal.Title>
          </Modal.Header>
          <Modal.Body >


            <Card style={{ width: '18rem', margin:'auto' }}>
              <Card.Img variant="top" src={logo} />
             
            </Card>

<br/>
            <p>
              Since 1965, this beautiful mountain property has been the home of 2 successful European restaurants.  Because of the continued growth and drive by traffic on Hwy 72.,
               Coal Creek Canyon Road, new owners, Annette and Tom Lambeth, will break tradition and convert this beautiful 5980 sq. ft.
               space into a Sports bar, serving traditional American food,
               a large and diverse selection of beer and multiple TV’s for sports viewing pleasure.
            </p>
            <p>
              The Lambeth Family – Annette, Tom, Troy and Micaela – hail from the suburbs of Philadelphia, PA,
              although Tom is originally from Pittsburgh.  Professional career moves brought them to Colorado in 2013; while college brought the children starting in 2010.
               As regular visitors to Colorado, Annette and Tom,
               knew it was just a matter of time before they called the Centennial State their home!

            </p>
            <p>
              Last Stand Tavern, was originally born in the basement of the Lambeth home in Pennsylvania.
               As an avid home brewer, Tom always had multiple beer selections on tap for family,
               friends and neighbors to sample and enjoy.  Hosting over 100 people at their annual Holiday party,
               Stand Tavern (conveniently located in the basement of their home) quickly became “the place to be”
               reat beer, good food, drinks and plenty of holiday cheer.
                Many guests tried to stake claim to being the last one standing at the Last Stand Tavern!
                As co-founding members of Plymouth Pride Beer Club, established in 2012,
                Annette and Tom represented the club, and Last Stand Tavern in a beer competition,
               where Tom placed 2nd with his Ruby Red Root Beer Ale.
            </p>
            <p>
              Rebranding and renaming the Westfalen Hof, to meet the needs of the community and travelers, was needed.
               Last Stand Tavern was born again, only this time, not in their basement but rather in a spacious, sports themed bar and restaurant with an outdoor deck boasting unobstructed views of the mountains.
            </p>
            <p>
              <hr />
              Fair warning….The Lambeth Family are die hard Steelers fans; although Annette’s favorite NFC team would be the Eagles!  No worries,
               as all sports fans are more than welcomed and always treated with the utmost respect!
          </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
          </Button>

          </Modal.Footer>
        </Modal>
      </>
      );
</div>

  )

}

export default About;