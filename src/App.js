import './css/App.css';
import React, {Component} from 'react';
import {SwrMain} from './components/SwrMain';
import ReactGA from 'react-ga';

// if you fork this please don't use this Google tracking code on your own public site
const trackingId = "G-E1305JTTCL"; 
ReactGA.initialize(trackingId, { testMode: process.env.NODE_ENV === 'test' });


class App extends Component {

  render() {
    return (

      <div className="App">
        <SwrMain />
      </div>
    );
  }
}

export default App;
