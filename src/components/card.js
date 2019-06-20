import React, { Component } from "react";
import '../assets/css/card.css';
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
class Card extends Component {

  render() {
    return (
      <div>
          
      <div id="cd">
          <Row style={{ marginRight: 0 }}>
            <Col >
            <Link to='transaction' >
              <div id="card1">
                <Row style={{ marginRight: 0 }}>
                  <Col>
                    <div id="carsale">Car For Sale</div>
                  </Col>
                </Row>
                <Row style={{ marginRight: 0 }}>
                  <Col>
                    <p id="carname">Toyota Avalon</p>
                  </Col>
                </Row>
                <Row style={{ marginRight: 0 }}>
                  <Col>
                    <img src={require('../assets/img/car10.jpg')} id="imgcar" />
                  </Col>
                </Row>
                <Row style={{ marginRight: 0 }}>
                  <Col xs={7} id="col1">
                    <div>Toyota</div>
                    <div>Auto tiptronic</div>
                    <div>Leather-Electric</div>
                    <div>Erbil</div>
                    <div>Year</div>
                  </Col>

                  <Col xs={4} id="col2">
                    <div>Avalon</div>
                    <div>Cylinders</div>
                    <div>Slide</div>
                    <div>P-1391</div>
                    <div>2012</div>
                  </Col>
                </Row>
                <div id="spec">

                  <div>Price  :  1,000 $  </div>


                </div>
              </div>

              </Link>
            </Col>
          </Row>
      
      </div>
      </div>
    );
  }
}
export default Card;

