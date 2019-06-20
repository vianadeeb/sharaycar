import React, { Component } from "react";
import '../assets/css/motorcycles.css';
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
class Motorcycles extends Component {

  render() {
    return (
      <div>
          <div id="specnum">
                    <Row style={{ marginRight: 0 }} >
                        <Col >
                        <div className="wow fadeInRight" data-wow-offset="50" data-wow-delay='0.5s'>
                            <p>Motorcycles</p>
                            </div>
                        </Col>
                    </Row>
                </div>
      <div id="cd1">
          <Row style={{ marginRight: 0 }}>
            <Col >
            <Link to='transactionm' >
              <div id="card11">
                <Row style={{ marginRight: 0 }}>
                  <Col>
                    <div id="carsale1">Car For Sale</div>
                  </Col>
                </Row>
                <Row style={{ marginRight: 0 }}>
                  <Col>
                    <p id="carname1">Toyota Avalon</p>
                  </Col>
                </Row>
                <Row style={{ marginRight: 0 }}>
                  <Col>
                    <img src={require('../assets/img/motorcycles.jpg')} id="imgcar13" />
                  </Col>
                </Row>
                <Row style={{ marginRight: 0 }}>
                  <Col xs={7} id="col11">
                    <div>Toyota</div>
                    <div>Auto tiptronic</div>
                    <div>Leather-Electric</div>
                    <div>Erbil</div>
                    <div>Year</div>
                  </Col>

                  <Col xs={4} id="col22">
                    <div>Avalon</div>
                    <div>Cylinders</div>
                    <div>Slide</div>
                    <div>P-1391</div>
                    <div>2012</div>
                  </Col>
                </Row>
                <div id="spec1">

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
export default Motorcycles;

