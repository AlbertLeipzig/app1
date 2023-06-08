import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

export const Home = () => {
  const data = useContext(DataContext);
  console.log(data)
  return (
    <section className="home">
      <h1>Star Wars API</h1>
    </section>
  );
};
