import React ,{Component} from 'react';
import './home.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Animated} from "react-animated-css";
import  { useState } from 'react';






class Home extends Component  {

changeToHome () {
   document.body.style = 'background: url(../Assests/snowDeck.jpg) no-repeat center center fixed);'; 
}

changeToEat () {style={backgroundImage: 'url(../Assests/snowDeck.jpg)' }

changeToDrink() {
document.body.style= 'background: url(../Assests/cellar.jpg) no-repeat center center fixed);'; 

}
render() {
    return (

<div> 
    <container className="intro">
    <Row className="rowIntro">
    
    <Col></Col>   
    <Col id="Eat"onMouseLeave={this.changeToHome} ><Animated animationIn="fadeInLeft" animationOut="zoomOutDown" animationInDuration={2500} animationOutDuration={1400} isVisible={true}>
    Eat 

</Animated></Col>
{/* <Col id="Drink"onMouseEnter={this.changeToDrink} onMouseLeave={this.changeToHome} onMouseLeave={this.changeToHome}><Animated animationIn="fadeInLeft" animationOut="zoomOutDown" animationInDuration={2500} animationOutDuration={1400} isVisible={true}>
Đrink
</Animated></Col>
<Col id="Visit" onMouseEnter={this.changeToDrink} onMouseLeave={this.changeToHome}><Animated animationIn="fadeInLeft" animationOut="zoomOutDown" animationInDuration={2500} animationOutDuration={1400} isVisible={true}>
Vίsίt
</Animated></Col> */}
    
  </Row>
    </container>
</div>

    )
}
}
export default Home;