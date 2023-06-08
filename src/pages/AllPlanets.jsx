import { useContext, useState, useEffect } from 'react';
import { DataContext } from '../context/DataContext';

export const AllPlanets = () => {
  const [loading, setLoading] = useState(true);

  const { planets } = useContext(DataContext);

  useEffect(() => {
    planets && setLoading(false);
  }, [planets]);

  return (
    <section className="all-planets">
      <h1 className="text-4xl text-center my-4">All Planets</h1>
      <div className="loading">{loading && <h2>Loading...</h2>}</div>
      <div className="planets-container mx-20 py-10 px-20">
        {planets &&
          planets.map((planet) => (
            <article
              key={planet.name}
              className="border-2 border-red-700 my-10 py-10 px-10  text-neutral-500 all-planets__article"
            >
              <h2 className="text-center text-2xl">{planet.name}</h2>
              <ul>
                <li className="leading-[1.7em]">
                  rotation period : {planet.rotation_period} hours
                </li>
                <li className="leading-10">
                  orbital period : {planet.orbital_period} days
                </li>
                <li className="leading-10">diameter : {planet.diameter} km</li>
                <li className="leading-10">climate : {planet.climate}</li>
                <li className="leading-10">gravity : {planet.gravity}</li>
                <li className="leading-10">terrain : {planet.terrain}</li>
                <li className="leading-10">
                  surface water : {planet.surface_water} %
                </li>
                <li className="leading-10">population : {planet.population}</li>
              </ul>
            </article>
          ))}
      </div>
    </section>
  );
};
