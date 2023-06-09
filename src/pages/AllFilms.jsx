import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../context/DataContext';

export const AllFilms = () => {
  const { films } = useContext(DataContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    films && setLoading(false);
  }, [films]);

  return (
    <section className="all-films bg-blue-900 py-5 mx-5">
      <h1 className="text-4xl text-center my-4 text-slate-200">All Films</h1>
      <div className="loading">{loading && <h2>Loading...</h2>}</div>
      <div className="films-container mx-1 py-10 flex flex-wrap text-slate-100">
        {films &&
          films.map((film) => (
            <article
              key={film.title}
              className="border-2 border-slate-200 my-10 py-10 w-[300px] mx-auto"
            >
              <h2 className="text-center text-2xl mb-10 flex flex-col font-semibold">
                <span className='mb-5 text-slate-50 font-thin'>Episode {film.episode_id}</span>
                {film.title}
              </h2>
              <ul className="leading-10 text-slate-400">
                <li className="flex flex-col text-center justify-between">
                  created
                  <span className="text-teal-200">
                    {film.created.slice(0, 10)}
                  </span>
                </li>
                <li className="flex flex-col text-center justify-between">
                  released
                  <span className="text-teal-200">{film.release_date}</span>
                </li>
                {/* <li>{film.opening_crawl}</li> */}
              </ul>
            </article>
          ))}
      </div>
    </section>
  );
};

// Order Films according to id
// Separate and order producers
