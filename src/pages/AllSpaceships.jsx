import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

export const AllSpaceships = () => {
  const { starships, data } = useContext(DataContext);
  starships && console.log(starships);
  data && console.log(data);

  return (
    <section className="all-spaceships">
      <h1>All Spaceships</h1>
      {starships &&
        starships.map((spaceship) => (
          <article key={spaceship.name}>
            <h2>{spaceship.name}</h2>
            <p>model : {spaceship.model}</p>
            <p>manufacturer : {spaceship.manufacturer}</p>
            <p>MGLT : {spaceship.MGLT}</p>
            <p>cargo capacity : {spaceship.cargo_capacity}</p>
            <p>consumables : {spaceship.consumables}</p>
            <p>cost in credits : {spaceship.cost_in_credits}</p>
            <p>crew : {spaceship.crew}</p>
            <p>hyperdrive rating : {spaceship.hyperdrive_rating}</p>
            <p>length : {spaceship.length} m</p>
            <p>max atmosphering speed : {spaceship.max_atmosphering_speed}</p>
            <p>passengers : {spaceship.passengers}</p>
            <p>starship class : {spaceship.starship_class}</p>
            <ul>
              {spaceship.pilots.map((pilot) => (
                <li>{pilot}</li>
              ))}
            </ul>
            <ul>
              {spaceship.films.map((film) => (
                <li>{film}</li>
              ))}
            </ul>
          </article>
        ))}
    </section>
  );
};

