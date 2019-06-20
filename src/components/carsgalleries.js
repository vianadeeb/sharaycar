import React, { Component } from "react";
import '../assets/css/carsgalleries.css';
import { Row, Col } from "react-bootstrap";
class Cargalleries extends Component {

    render() {
        return (
            <div id="cg">
                <div id="carg">
                    <Row style={{ marginRight: 0 }} >
                        <Col >
                        <div className="wow fadeInRight" data-wow-offset="50" data-wow-delay='0.5s'>
                            <p>Car Galleries</p>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div id="flex09">
               <Row style={{ marginRight: 0 }}>
                   <Col>
                   <div id="cardgall">
                 <Row style={{ marginRight: 0 }} id="cardgall1">
                     <Col>
                     <img src={require('../assets/img/car.jpg')} id="imgcar1" />
                     </Col>
                 </Row>
                 <Row style={{ marginRight: 0 }}>
                     <Col>
                     <p id="namec">name of company</p>
                     </Col>
                 </Row>
                    
                 <div id="colorb">
                 <Row style={{ marginRight: 0 }}>
                     <Col >
                     <div id="numb">number</div>
                     </Col>
                 </Row>
                 </div>
                   </div>
                   </Col>
               </Row>
</div>
            </div>
        );
    }
}
export default Cargalleries;

