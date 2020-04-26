import React, {useState, useEffect} from 'react';
import { Line, Bar } from 'react-chartjs-2';

import {fetchDailyData} from '../../api';

import styles from './Chart.module.css';

const Chart = () => {

  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchMyAPI = async () => {
      const initialDailyData = await fetchDailyData();
      setDailyData(initialDailyData);
    };
    fetchMyAPI(); // to use asynce-await functionality inside useEffect()
  });

  return (
    <div className={styles.container}>
      <h1>Chart</h1>
    </div>
  )
}

export default Chart;