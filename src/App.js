import React, { Component } from 'react';
import styles from './App.module.css';
import { Cards, Chart, CountryPicker } from './components/index';
import { fetchData } from './api/index';

export default class App extends Component {

  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {

    const fetchedData = await fetchData();
    // console.log(fetchedData);
    this.setState({data: fetchedData});
    
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    // console.log(fetchedData);
    this.setState({ data: fetchedData, country: country });
  };

  render() {

    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}