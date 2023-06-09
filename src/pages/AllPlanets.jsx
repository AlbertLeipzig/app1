import { useContext, useState, useEffect } from 'react';
import { DataContext } from '../context/DataContext';

export const AllPlanets = () => {
  const [loading, setLoading] = useState(true);

  const { planets } = useContext(DataContext);

  useEffect(() => {
    planets && setLoading(false);
  }, [planets]);

  return (
    <section className="all-planets bg-green-700 py-10">
      <h1 className="text-4xl text-center my-4 text-slate-200">All Planets</h1>
      <div className="loading">{loading && <h2>Loading...</h2>}</div>
      <div className="planets-container mx-20 py-10 px-20 ">
        {planets &&
          planets.map((planet) => (
            <article
              key={planet.name}
              className="border-2 border-purple-400 my-10 py-10 px-10 w-4/12 mx-auto  text-slate-200 all-planets__article"
            >
              <h2 className="text-center text-2xl mb-10">{planet.name}</h2>
              <ul className="leading-10 text-lime-400">
                <li className='flex justify-between'>rotation period : <span className='font-bold text-slate-200'>{planet.rotation_period} hours</span></li>
                <li className='flex justify-between'>orbital period : <span className='font-bold text-slate-200'>{planet.orbital_period} days</span></li>
                <li className='flex justify-between'>diameter : <span className='font-bold text-slate-200'>{planet.diameter} km</span></li>
                <li className='flex justify-between'>climate : <span className='font-bold text-slate-200'>{planet.climate}</span></li>
                <li className='flex justify-between'>gravity : <span className='font-bold text-slate-200'>{planet.gravity}</span></li>
                <li className='flex justify-between'>terrain : <span className='font-bold text-slate-200'>{planet.terrain}</span></li>
                <li className='flex justify-between'>surface water : <span className='font-bold text-slate-200'>{planet.surface_water} %</span></li>
                <li className='flex justify-between'>population : <span className='font-bold text-slate-200'>{planet.population}</span></li>
              </ul>
            </article>
          ))}
      </div>
    </section>
  );
};
