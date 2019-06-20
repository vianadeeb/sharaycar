import React, { Component } from "react";
import '../assets/css/carpart.css';
import { Row, Col } from "react-bootstrap";
class Carpart extends Component {

    render() {
        return (
            <div>
                <div id="specnum">
                    <Row style={{ marginRight: 0 }} >
                        <Col >
                        <div className="wow fadeInRight" data-wow-offset="50" data-wow-delay='0.5s'>
                            <p>Car Part</p>
                            </div>
                        </Col>
                    </Row>
                </div>

                  <div id="numdercar1">
                <Row style={{ marginRight: 0 }}>
                    <Col>
                        <div id="nucar">
                            <Row style={{ marginRight: 0 }}>
                                <Col xs={6}>
                                    <p id="p">num img</p>
                                   <p id="p">location</p>
                                   <p id="p">phone number</p>
                    </Col>
                                <Col xs={6}>
                                <img src={require('../assets/img/car.jpg')} id="numbcar" />
                    </Col>
                   
                            </Row>
                          
                                <Col xs={12} id="pri">
                                   <div>price : $ 2,000 </div>
                    </Col>
                   
                        </div>
                    </Col>
                </Row>
                </div>
            </div>

        );
    }
}
export default Carpart;

