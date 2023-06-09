import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../context/DataContext';

export const AllFilms = () => {
  const { films } = useContext(DataContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    films && setLoading(false);
  }, [films]);

  return (
    <section className="all-films bg-blue-900 mx-20 py-10 px-20">
      <h1 className="text-4xl text-center my-4 text-slate-200">All Films</h1>
      <div className="loading">{loading && <h2>Loading...</h2>}</div>
      <div className="films-container mx-20 py-10 px-20 text-slate-100">
        {films &&
          films.map((film) => (
            <article
              key={film.title}
              className="border-2 border-slate-200 my-10 py-10 px-10 w-4/12 mx-auto"
            >
              <h2 className="text-center text-2xl mb-10">
                {film.title} - {film.episode_id}
              </h2>
              <ul className="leading-10 text-slate-400">
                <li className="flex justify-between">
                  created :{' '}
                  <span className="text-teal-200">{film.created}</span>
                </li>
                <li className="flex justify-between">
                  released :{' '}
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
