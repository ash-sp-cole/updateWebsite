import React ,{Component} from 'react';
import './home.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Animated} from "react-animated-css";
import  { useState } from 'react';






class Home extends Component  {

 changeToHome () {
       document.body.style.backgroundImage =  "url(./table.jpg)"; 
}

 changeToEat () {
    document.body.backgroundImage =  "url(/src/cellar.jpg)"; 
 }
// changeToDrink() {
//     document.body.style.background = "green";

// }
// changeToVisit() {
//     document.body.style.background = "red";

// }
render() {
    return (

<div> 
    <container className="intro">
    <Row className="rowIntro">
    
    <Col></Col>   
    <Col id="Eat" onMouseEnter={this.changeToEat}><Animated animationIn="fadeInLeft" animationOut="zoomOutDown" animationInDuration={2500} animationOutDuration={1400} isVisible={true}>
  test
</Animated></Col>
 <Col id="Drink" ><Animated animationIn="fadeInLeft" animationOut="zoomOutDown" animationInDuration={2500} animationOutDuration={1400} isVisible={true}>
Đrink
</Animated></Col>
<Col id="Visit" ><Animated animationIn="fadeInLeft" animationOut="zoomOutDown" animationInDuration={2500} animationOutDuration={1400} isVisible={true}>
Vίsίt
</Animated></Col> 
    
  </Row>
    </container>
</div>

    )
}
}
export default Home;