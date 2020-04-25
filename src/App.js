import React, { Component } from 'react';
import { Cards, Chart, CountryPicker } from './components';

export default class App extends Component {

  // constructor(props) {
  //   super(props)
  //   this.state = {
         
  //   }
  // }

  render() {
    return (
      <div>
        <Cards />
        <CountryPicker />
        <Chart />
      </div>
    )
  }
}