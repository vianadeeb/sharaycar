import React, { Component } from "react";
//import ReactDOM from "react-dom";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faBars, faTimes, faSearch } from "@fortawesome/free-solid-svg-icons";
//import { Popover,Text,Pane} from 'evergreen-ui'
//import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import '../assets/css/footer.css';
import { Row, Col } from "react-bootstrap";

class footer extends Component {

  render() {
    return (
      <div id="footer" >

       <Row  style={{ marginRight: 0 }} >
           <Col>
          
           <div id="flexlang">
           <img src={require('../assets/img/iq.png')} id="imglang" />
           <img src={require('../assets/img/en.png')} id="imglang1" />
           </div>
           </Col>
        </Row>

      </div>
    );
  }
}
export default footer;

