import { useContext, useState, useEffect } from 'react';
import { DataContext } from '../context/DataContext';

export const AllSpaceships = () => {
  const { starships, data } = useContext(DataContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    starships && setLoading(false);
  }, [starships]);

  return (
    <section className="all-spaceships">
      <h1 className="text-4xl text-center my-4 text-purple-900">All Spaceships</h1>
      <div className="loading">{loading && <h2>Loading...</h2>}</div>
      <div className="spaceships-container mx-20 py-10 px-20">
        {starships &&
          starships.map((spaceship) => (
            <article
              key={spaceship.name}
              className=" border-2 border-purple-700 my-10 py-10 px-10 text-neutral-500 w-6/12 mx-auto"
            >
              <h2 className="text-center text-2xl mb-10">{spaceship.name}</h2>
              <ul className="leading-10 text-purple-500">
                <li className="flex justify-between">
                  model :{' '}
                  <span className="font-bold text-neutral-500">
                    {spaceship.model}
                  </span>
                </li>
                <li className="flex justify-between">
                  manufacturer :{' '}
                  <span className="font-bold text-neutral-500">
                    {spaceship.manufacturer}
                  </span>
                </li>
                <li className="flex justify-between">
                  MGLT :{' '}
                  <span className="font-bold text-neutral-500">
                    {spaceship.MGLT}
                  </span>
                </li>
                <li className="flex justify-between">
                  cargo capacity :{' '}
                  <span className="font-bold text-neutral-500">
                    {spaceship.cargo_capacity}
                  </span>
                </li>
                <li className="flex justify-between">
                  consumables :{' '}
                  <span className="font-bold text-neutral-500">
                    {spaceship.consumables}
                  </span>
                </li>
                <li className="flex justify-between">
                  cost in credits :{' '}
                  <span className="font-bold text-neutral-500">
                    {spaceship.cost_in_credits}
                  </span>
                </li>
                <li className="flex justify-between">
                  crew :{' '}
                  <span className="font-bold text-neutral-500">
                    {spaceship.crew}
                  </span>
                </li>
                <li className="flex justify-between">
                  hyperdrive rating :{' '}
                  <span className="font-bold text-neutral-500">
                    {spaceship.hyperdrive_rating}
                  </span>
                </li>
                <li className="flex justify-between">
                  length :{' '}
                  <span className="font-bold text-neutral-500">
                    {spaceship.length} m
                  </span>
                </li>
                <li className="flex justify-between">
                  max atmosphering speed :{' '}
                  <span className="font-bold text-neutral-500">
                    {spaceship.max_atmosphering_speed}
                  </span>
                </li>
                <li className="flex justify-between">
                  passengers :{' '}
                  <span className="font-bold text-neutral-500">
                    {spaceship.passengers}
                  </span>
                </li>
                <li className="flex justify-between">
                  starship class :{' '}
                  <span className="font-bold text-neutral-500">
                    {spaceship.starship_class}
                  </span>
                </li>
              </ul>
            </article>
          ))}
      </div>
    </section>
  );
};
