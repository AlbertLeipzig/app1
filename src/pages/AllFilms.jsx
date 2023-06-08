// Order Films according to id
// Separate and order producers

import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../context/DataContext';

export const AllFilms = () => {
  const { films } = useContext(DataContext);

  const [producers, setProducers] = useState([]);

  function getNonRepeatedNames(names) {
    const uniqueNames = [];
    const seenNames = new Set();

    names.forEach((entry) => {
      const entryNames = entry.split(' ');

      entryNames.forEach((name) => {
        if (!seenNames.has(name)) {
          seenNames.add(name);
          uniqueNames.push(name);
        }
      });
    });

    return uniqueNames;
  }

  useEffect(() => {
    if (films) {
      const filmProducers = films.map((film) => film.producer);
      const nonRepeatedProducers = getNonRepeatedNames(filmProducers);
      setProducers(nonRepeatedProducers);
    }
  }, [films]);

  return (
    <section className="all-films">
      <h1>All Films</h1>
      <div className="films-container">
        {films &&
          films.map((film) => (
            <article key={film.title}>
              <h2>
                {film.title} - {film.episode_id}
              </h2>
              <p>created : {film.created}</p>
              <p>created : {film.release_date}</p>
              <p>director : {}</p>
              <p>edited : {}</p>
              <p>{film.opening_crawl}</p>
              <ul>
                <p>characters : </p>
                {film.characters.map((character) => (
                  <li>
                    <a href={character} target="_blank">
                      {character}
                    </a>
                  </li>
                ))}
              </ul>
              <ul>
                {film.planets.map((planet) => (
                  <li>
                    <a href={planet} target="_blank">
                      {planet}
                    </a>
                  </li>
                ))}
              </ul>
              <ul>
                {producers.map((producer) => (
                  <li>{producer}</li>
                ))}
              </ul>
            </article>
          ))}
      </div>
    </section>
  );
};
