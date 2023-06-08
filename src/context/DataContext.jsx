import React, { createContext, useEffect, useState } from 'react';

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState({});

  const getAllData = async () => {
    try {
      const res = await fetch('https://swapi.dev/api/');
      const urls = await res.json();

      const fetchData = async (key) => {
        const response = await fetch(urls[key]);
        const result = await response.json();
        return result.results;
      };

      const fetchedData = await Promise.all(Object.keys(urls).map(fetchData));
      const newData = Object.keys(urls).reduce((acc, key, index) => {
        acc[key] = fetchedData[index];
        return acc;
      }, {});

      setData(newData);
    } catch (err) {
      const error = new Error(err);
      console.error(error);
      throw error;
    }
  };

  useEffect(() => {
    getAllData();
  }, []);


  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export { DataContext, DataProvider };
