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
      <h1 className="text-4xl text-center my-4">All Species</h1>
      <div className="loading">{loading && <h2>Loading...</h2>}</div>
      <div className="species-container mx-20 py-10 px-20">
        {species &&
          species.map((specie) => (
            <article
              key={specie.name}
              className="border-2 border-red-700 my-10 py-10 px-10 text-neutral-500"
            >
              <h2 className="text-center text-2xl">{specie.name}</h2>
              <ul className='leading-10'>
                <li>classification : {specie.classification}</li>
                <li>designation : {specie.designation}</li>
                <li>average height : {specie.average_height} cm</li>
                <li>average lifespan : {specie.average_lifespan} years</li>
                <li>eye colors : {specie.eye_colors}</li>
                <li>hair colors : {specie.hair_colors}</li>
                <li>languages : {specie.language}</li>
              </ul>
            </article>
          ))}
      </div>
    </section>
  );
};
