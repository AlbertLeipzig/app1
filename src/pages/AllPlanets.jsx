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
      <h1>All Planets</h1>
      <div className="loading">{loading && <h2>Loading...</h2>}</div>
      <div className="planets-container">
        {planets &&
          planets.map((planet) => (
            <article key={planet.name}>
              <h2>{planet.name}</h2>
              <p>rotation period : {planet.rotation_period} hours</p>
              <p>orbital period : {planet.orbital_period} days</p>
              <p>diameter : {planet.diameter} km</p>
              <p>climate : {planet.climate}</p>
              <p>gravity : {planet.gravity}</p>
              <p>terrain : {planet.terrain}</p>
              <p>surface water : {planet.surface_water} %</p>
              <p>population : {planet.population}</p>
              <ul>
                {planet.residents.map((resident) => (
                  <li>{resident}</li>
                ))}
              </ul>
              <ul>
                {planet.films.map((film) => (
                  <li>{film}</li>
                ))}
              </ul>
            </article>
          ))}
      </div>
    </section>
  );
};
