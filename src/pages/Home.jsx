import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { NavLink } from 'react-router-dom';

export const Home = () => {
  const data = useContext(DataContext);
  return (
    <section className="home">
      <h1 className="text-center text-4xl my-4 mb-10 text-purple-600 ">Star Wars API</h1>
      <div className="images-container flex mx-5  w-fit max-w-6xl md:mx-auto flex-wrap justify-center gap-4">
        <NavLink to="/spaceships" className="w-full max-w-lg h-30 ">
          <img
            src="https://www.denofgeek.com/wp-content/uploads/2019/12/x-wing.jpg?w=1024"
            alt="spaceship"
            className="object-cover h-full"
          />
        </NavLink>
        <NavLink to="/characters" className="w-full max-w-lg">
          <img
            src="https://lumiere-a.akamaihd.net/v1/images/han-solo-main_a4c8ff79.jpeg?region=0%2C0%2C1920%2C1080"
            alt="characters image"
            className="object-cover h-full"
          />
        </NavLink>
        <NavLink to="/films" className="w-full max-w-lg h-30">
          <img
            src="https://cdn.mos.cms.futurecdn.net/sgQUU6si9oqQzR63ePMssa-970-80.jpg.webp"
            alt="star wars films"
            className="h-full object-cover"
          />
        </NavLink>
        <NavLink to="/planets" className="w-full max-w-lg h-30 ">
          <img
            src="https://exoplanets.nasa.gov/internal_resources/116"
            alt="star wars planets"
            className="object-cover h-full"
          />
        </NavLink>
      </div>
    </section>
  );
};
