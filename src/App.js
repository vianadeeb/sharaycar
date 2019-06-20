import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Navb from './components/navb';
import Footer from './components/footer';
import Card from './components/card';
import './App.css';
import Carnumber from './components/carnumber';
import Cargalleries from './components/carsgalleries';
import Transaction from './components/transaction';
import Slider from './components/slider';
import Filter from './components/filter';
import Skills from './components/wow';
import Motorcycles from './components/motorcycles';
import Transactionm from './components/transactionm';
import Carpart from './components/carpart';
class App extends Component {
  render() { 
   
    return (
  <div>
    
   
       <BrowserRouter>
       <div id='ap'>
       <Navb />
         <Route exact path='/' component={Filter} />
         <Route exact path='/' component={Slider} />
         <Route exact path='/' component={Card} />
         <Route exact path='/carforrent' component={Filter} />
         <Route exact path='/carforrent' component={Card} />
         <Route exact path='/carforsale' component={Filter} />
         <Route exact path='/carforsale' component={Card} />
         <Route exact path='/cargalleries' component={Filter} />
         <Route exact path='/cargalleries' component={Cargalleries} />
         <Route path='/transaction' component={Transaction} />
         {/* <Route exact path='/cargallerieserbil/:id' component={Cargalleries} /> */}
         <Route exact path='/motorcycles' component={Filter} />
         <Route exact path='/motorcycles' component={Motorcycles} />
         <Route exact path='/transactionm' component={Transactionm} />
        <Route exact path='/carnumber' component={Filter} />
         <Route path='/carnumber' component={Carnumber} />
         <Route path='/carpart' component={Carpart} />
         <Route exact path='/carpart' component={Filter} />
         
         </div>
       </BrowserRouter>
     
      <Footer />
     
      <Skills />
 
      </div>
    );
  }
}

export default App;


