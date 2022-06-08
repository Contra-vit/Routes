import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // install aditional package to work with router  "react-router" and  "react-router-dom"
import React from 'react';
import Main from './Main'; // made import 
import About from './About'; // made import
import Contacts from './Contacts'; // made import
import Other from './Other'; // made import for 404 page

class App extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {

    let arr = { main: 'Main', about: 'About', contacts: 'Contacts', 'other': 404 } // object to use for making menu

    return (
      <Router>            {/* make at the top and at the buttom Router  */}

        <div className="App">

          <header>
            <h1>Menu</h1>  {/* make a title */}
          </header>

          <div>
            {Object.keys(arr).map((elem, i) => {  /*method returns an array of a given object's own enumerable property names,*/
              if(elem != 'other') { // make a condition if its not other do:
                return  <li key={i}> <a href={arr[elem]}>{elem} </a> </li> ;// create list of  <li> which will use in menu  
              } 
              else { //if elem is 'other' just create an ampty paragraphe 
                return <p></p>;   

              }
            })}
          </div>

          <div>
            <Routes>
              <Route exact path='/main' element={<Main />} /> {/* create Ruote which passes to '/' where Main situated */}
              <Route exact path='/about' element={<About />} /> {/* create Ruote which passes to '/about' where About situated */}
              <Route exact path='/contacts' element={<Contacts />} /> {/* create Ruote which passes to '/' where Contacts situated */}
              <Route exact path='*' element={<Other />} /> {/* create Ruote whith no pass (unfound page 404) where 404 situated */}

            </Routes>
          </div>

          <footer className='footer'> {/* create footer with style */}
            footer
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
