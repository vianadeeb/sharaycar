import React, { Component } from "react";
import '../assets/css/transaction.css';
import { Row, Col } from "react-bootstrap";
// import "node_modules/react-image-gallery/styles/scss/image-gallery.scss";
// import "node_modules/react-image-gallery/styles/css/image-gallery.css";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

class Transaction extends Component {

    render() {
        const images = [
            {
                // <img src={require('../assets/img/car.jpg')} id="imgjj" /> 
                // <img src={require('../assets/img/car.jpg')} id="imgjjj" /> 
                original: require('../assets/img/car3.jpeg'),
                thumbnail:require('../assets/img/car3.jpeg') ,
            },
            {
                original: require('../assets/img/car4.jpeg'),
                thumbnail: require('../assets/img/car4.jpeg') 
            },
            {
                original: require('../assets/img/car5.jpeg'),
                thumbnail: require('../assets/img/car5.jpeg') 
            },
            {
                original: require('../assets/img/car6.jpeg'),
                thumbnail: require('../assets/img/car6.jpeg') 
            },
            {
                original: require('../assets/img/car7.jpeg'),
                thumbnail: require('../assets/img/car7.jpeg') 
            },
            {
                original: require('../assets/img/car5.jpeg'),
                thumbnail: require('../assets/img/car5.jpeg') 
            },
            {
                original: require('../assets/img/car5.jpeg'),
                thumbnail: require('../assets/img/car5.jpeg') 
            },
            {
                original: require('../assets/img/car5.jpeg'),
                thumbnail: require('../assets/img/car5.jpeg') 
            }
            
        ]
        return (
            <div>

                <div id="specnum1">
                    <Row style={{ marginRight: 0 }} >
                        <Col >
                            <div className="wow fadeInRight" data-wow-offset="50" data-wow-delay='0.5s'>
                                <p>Private cars - BMW 3 SERIES 330i</p>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div id="imgg">
                    <Row id="imgc" style={{ marginRight: 0 }}>
                        <Col>
                            <ImageGallery items={images} />
                        </Col>
                    </Row>
                </div>
                <div id="trans">
                    <Row id="trans1" style={{ marginRight: 0 }} >
                        <Col xs={12} md={6}>
                            <p id="pcolor">History & Condition</p>
                            <div id="colort">Brand : <span id="colorv"> Volkswagen </span> </div>
                            <div id="colort">Class :<span id="colorv"> Passat </span> </div>
                            <div id="colort"> Model : <span id="colorv">1.8L Turbo </span>  </div>
                            <div id="colort">Type : <span id="colorv"> R-Line</span></div>
                            <div id="colort">Status :<span id="colorv"> Ussed 2 Parts Paint</span> </div>

                            {/* 
                                <span id="colort">Warranty : </span><span id="colorv"> Warranty</span>
                            */}
                            {/* 
                                <span id="colort">Importing : </span><span id="colorv">USA</span>
                             */}
                        </Col>
                        <Col xs={12} md={6}>
                          <p id="pcolor">INTERIOR</p>
                         <div id="colort"> 	Roof:<span id="colorv"> Panoramic roof </span>  </div> 
                         <div id="colort">	Seats Type: <span id="colorv"> Leather - Electric - Heated </span> </div> 
                         <div id="colort"> Model : <span id="colorv">power Window </span> </div>
                         <div id="colort">Type :<span id="colorv"> R-Line</span> </div>
                         <div id="colort">Status :<span id="colorv"> Ussed 2 Parts Paint</span> </div>
                            </Col>
                            {/*
                                <span id="colort">Warranty : </span><span id="colorv"> Warranty</span>
                            */}
                            {/* 
                            <span id="colort">Importing : </span><span id="colorv">USA</span>
                         */}
                   
                    <span id="breakline"></span>
                    <Col xs={12} md={6}>
                       <p id="pcolor">PERFORMANCE</p>
                        <div id="colort"> Gear :<span id="colorv"> Automatic Sport </span>  </div> 
                        <div id="colort">Cylinders :<span id="colorv"> 4 Cylinders </span> </div> 
                       <div id="colort"> Engine : <span id="colorv">2.0L </span> </div>  
                      <div id="colort">Horse Power :<span id="colorv">  241 hp</span> </div>
                      <div id="colort">Turbo :<span id="colorv">Yes</span> </div> 
                            {/*
                                <span id="colort">Wheel Drive System : </span><span id="colorv">Rear</span>
                            */}
                            {/* 
                                <span id="colort">Fuel type : </span><span id="colorv"> Petrol</span>
                             */}
                      </Col>
                        <Col xs={12} md={6}>
                            <p id="pcolor">EXTERIOR</p>
                             <div id="colort"> 	Doors: <span id="colorv"> Smart key </span>  </div> 
                             <div id="colort">	Sensors :<span id="colorv"> Front & Rear </span> </div> 
                             <div id="colort"> Camera :  <span id="colorv">Yes </span> </div> 
                             <div id="colort">Wheel size : <span id="colorv">  17 inch </span> </div>
                             <div id="colort">Lamps: <span id="colorv">Headlamp - Xenon - LED</span> </div>
                        </Col>
                        <span id="breakline"></span>
                        <Col>
                        <p id="pcolor">Description</p>
                        <textarea id="texta" />
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Transaction;

