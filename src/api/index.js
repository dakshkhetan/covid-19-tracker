import axios from 'axios';

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
      
    // const response = await axios.get(url);
    // console.log(response);
    
    /* const { data } = await axios.get(url);
    const modifiedData = {
      confirmed: data.confirmed,
      recovered: data.recovered,
      deaths: data.deaths,
      lastUpdate: data.lastUpdate,
    };
    return modifiedData; */

    // Cleaner code for above:
    // destructuring javascript objects
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);
    return { confirmed, recovered, deaths, lastUpdate };

  } catch(error) {
    // console.log(error);
  }
}

export const fetchDailyData = async () => {
  try {
    
    const { data } = await axios.get(`${url}/daily`); // 'data' is an array

    // const modifiedData = data.map((dailyData) => ({
    //   confirmed: dailyData.confirmed.total,
    //   deaths: dailyData.deaths.total,
    //   date: dailyData.reportDate,
    // }));
    // return modifiedData;

    // cleaner code (using destructuring and mapping):
    return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));

  } catch(error) {
    // console.log(error);
  }
}