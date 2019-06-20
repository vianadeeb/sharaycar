import React, { Component } from "react";
import { Select, SearchInput } from 'evergreen-ui';
import '../assets/css/filter.css';
import {Row, Col,NavDropdown } from "react-bootstrap";
class Filter extends Component {
  render() {
    return (
      <div id = "searching1" >
        {/* <Row style={{ marginRight: 0 }} id="search11">
          <Col> */}
          <div class="dropdown">
     <button class="dropbtn">Price </button>
     <div class="dropdown-content">
       {/* <Link to={'/cargallerieserbil'+this.props.match.params.id}>Erbil</Link> */}
       {/* <NavDropdown.Item href="{'/'+ this.props.match.params.id}">Erbil</NavDropdown.Item> */}
       <NavDropdown.Item href="/cargallerieserbil">500-8000</NavDropdown.Item>
       <NavDropdown.Divider />
       <NavDropdown.Item href="#action/3.4">All</NavDropdown.Item>
     </div>
   </div>



   <div class="dropdown">
     <button class="dropbtn">Mileage </button>
     <div class="dropdown-content">
       <NavDropdown.Item href="#action/3.1">123</NavDropdown.Item>
       <NavDropdown.Divider />
       <NavDropdown.Item href="#action/3.4">All</NavDropdown.Item>
     </div>
   </div>



   <div class="dropdown">
     <button class="dropbtn">Take the</button>
     <div class="dropdown-content">
       <NavDropdown.Item href="/carparterbil">Us</NavDropdown.Item>
       <NavDropdown.Item href="#action/3.2">Gulf</NavDropdown.Item>
       <NavDropdown.Divider />
       <NavDropdown.Item href="#action/3.4">All</NavDropdown.Item>
     </div>
   </div>



   <div class="dropdown">
     <button class="dropbtn">Brand</button>
     <div class="dropdown-content">
       <NavDropdown.Item href="#action/3.1">LandCrouse</NavDropdown.Item>
       <NavDropdown.Divider />
       <NavDropdown.Item href="#action/3.4">All</NavDropdown.Item>
     </div>
   </div>


   <div class="dropdown">
     <button class="dropbtn">Class </button>
     <div class="dropdown-content">
       <NavDropdown.Item href="/carnumbererbil">Toyota</NavDropdown.Item>
       <NavDropdown.Divider />
       <NavDropdown.Item href="#action/3.4">All</NavDropdown.Item>
     </div>
   </div>


   <div class="dropdown">
     <button class="dropbtn">Year</button>
     <div class="dropdown-content" id="dropd">
       <NavDropdown.Item href="#action/3.1">2019-2008</NavDropdown.Item>
       <NavDropdown.Item href="#action/3.1">2019-2008</NavDropdown.Item>
       <NavDropdown.Item href="#action/3.1">2019-2008</NavDropdown.Item>
       <NavDropdown.Item href="#action/3.1">2019-2008</NavDropdown.Item>
       <NavDropdown.Item href="#action/3.1">2019-2008</NavDropdown.Item>
       <NavDropdown.Item href="#action/3.1">2019-2008</NavDropdown.Item>
       <NavDropdown.Item href="#action/3.1">2019-2008</NavDropdown.Item>
       <NavDropdown.Item href="#action/3.1">2019-2008</NavDropdown.Item>
       <NavDropdown.Item href="#action/3.1">2019-2008</NavDropdown.Item>
       <NavDropdown.Item href="#action/3.1">2019-2008</NavDropdown.Item>
       <NavDropdown.Item href="#action/3.1">2019-2008</NavDropdown.Item>
       <NavDropdown.Item href="#action/3.1">2019-2008</NavDropdown.Item>
       <NavDropdown.Item href="#action/3.1">2019-2008</NavDropdown.Item>
       <NavDropdown.Item href="#action/3.1">2019-2008</NavDropdown.Item>
       <NavDropdown.Item href="#action/3.1">2019-2008</NavDropdown.Item>
       <NavDropdown.Item href="#action/3.1">2019-2008</NavDropdown.Item>
       <NavDropdown.Item href="#action/3.1">2019-2008</NavDropdown.Item>
       <NavDropdown.Item href="#action/3.1">2019-2008</NavDropdown.Item>
       <NavDropdown.Item href="#action/3.1">2019-2008</NavDropdown.Item>
       <NavDropdown.Item href="#action/3.1">2019-2008</NavDropdown.Item>
       <NavDropdown.Item href="#action/3.1">2019-2008</NavDropdown.Item>
       <NavDropdown.Item href="#action/3.1">2019-2008</NavDropdown.Item>
       <NavDropdown.Item href="#action/3.1">2019-2008</NavDropdown.Item>
       <NavDropdown.Item href="#action/3.1">2019-2008</NavDropdown.Item>
       <NavDropdown.Item href="#action/3.1">2019-2008</NavDropdown.Item>
       <NavDropdown.Item href="#action/3.1">2019-2008</NavDropdown.Item>
       <NavDropdown.Item href="#action/3.1">2019-2008</NavDropdown.Item>
       <NavDropdown.Divider />
       <NavDropdown.Item href="#action/3.4">All</NavDropdown.Item>
     </div>
   </div>

<div class="dropdown" id="margleft">
<button class="dropbtn">City</button>
<div class="dropdown-content">
  <NavDropdown.Item href="#action/3.1">Baghdad</NavDropdown.Item>
  <NavDropdown.Divider />
  <NavDropdown.Item href="#action/3.4">All</NavDropdown.Item>
</div>
</div>
        <SearchInput placeholder="Filter traits..." height={35} width="300px" className="searinput"
            />


          {/* </Col>
        </Row> */}
        </div >
    

    );
  }
}
export default Filter;

