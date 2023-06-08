import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

export const AllCharacters = () => {
  const { people } = useContext(DataContext);
  console.log(people);

  return (
    <section className="all-characters">
      <h1>All Characters</h1>
      {people &&
        people.map((person) => (
          <article key={person.name}>
            <h2>{person.name}</h2>
            <p>Birth Year: {person.birth_year}</p>
            <p>height : {person.height} cm</p>
            <p>mass : {person.mass} kg</p>
            <p>eye color : {person.eye_color}</p>
            <p>hair color : {person.hair_color}</p>
            <a href={person.homeworld} target="_blank">
              homeworld : {person.homeworld}
            </a>
            <ul>
              {person.films.map((film) => (
                <li>{film}</li>
              ))}
            </ul>
            <ul>
              {person.starships.map((ship) => (
                <li>{ship}</li>
              ))}
            </ul>
            <ul>
              {person.vehicles.map((vehicle) => (
                <li>{vehicle}</li>
              ))}
            </ul>
          </article>
        ))}
    </section>
  );
};
