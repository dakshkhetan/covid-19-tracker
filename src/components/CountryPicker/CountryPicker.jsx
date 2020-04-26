import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import { fetchCountries } from '../../api';

import styles from './CountryPicker.module.css';

const CountryPicker = () => {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };
    fetchAPI();
  }, [setCountries]);

  console.log(countries);

  return (
    <FormControl>
      <NativeSelect>
        <option value="global">Global</option>
      </NativeSelect>
    </FormControl>
  );
}

export default CountryPicker;