import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../context/DataContext';

export const AllSpecies = () => {
  const { species } = useContext(DataContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    species && setLoading(false);
  }, [species]);

  return (
    <section className="all-species">
      <h1>All Species</h1>
      {loading && <h2>Loading...</h2>}
      <div className="loading">{loading && <h2>Loading...</h2>}</div>
      <div className="species-container">
        {species &&
          species.map((specie) => (
            <article key={specie.name}>
              <h2>{specie.name}</h2>
              <p>classification : {specie.classification}</p>
              <p>designation : {specie.designation}</p>
              <p>average height : {specie.average_height} cm</p>
              <p>average lifespan : {specie.average_lifespan} years</p>
              <p>eye colors : {specie.eye_colors}</p>
              <p>hair colors : {specie.hair_colors}</p>
              <p>languages : {specie.language}</p>
            </article>
          ))}
      </div>
    </section>
  );
};
