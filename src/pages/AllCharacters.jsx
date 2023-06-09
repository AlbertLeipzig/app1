import { useContext, useState, useEffect } from 'react';
import { DataContext } from '../context/DataContext';

export const AllCharacters = () => {
  const { people } = useContext(DataContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    people && setLoading(false);
  }, [people]);
  return (
    <section className="all-characters">
      <h1 className="text-4xl text-center my-4 text-yellow-600">
        All Characters
      </h1>
      <div className="loading">{loading && <h2>Loading...</h2>}</div>
      <div className="characters-container mx-20 py-10 px-20">
        {people &&
          people.map((person) => (
            <article
              key={person.name}
              className="border-2 border-yellow-200 my-10 py-10 px-10  mx-auto text-neutral-500 all-characters__article"
            >
              <h2 className="text-center text-2xl mb-10">{person.name}</h2>
              <ul className="leading-10 text-yellow-600">
                <li className="flex justify-between">
                  Birth Year:{' '}
                  <span className="text-neutral-500 font-bold">
                    {person.birth_year}
                  </span>
                </li>
                <li className="flex justify-between">
                  height :{' '}
                  <span className="text-neutral-500 font-bold">
                    {person.height} cm
                  </span>
                </li>
                <li className="flex justify-between">
                  mass :{' '}
                  <span className="text-neutral-500 font-bold">
                    {person.mass} kg
                  </span>
                </li>
                <li className="flex justify-between">
                  eye color :{' '}
                  <span className="text-neutral-500 font-bold">
                    {person.eye_color}
                  </span>
                </li>
                <li className="flex justify-between">
                  hair color :{' '}
                  <span className="text-neutral-500 font-bold">
                    {person.hair_color}
                  </span>
                </li>
                <li>
                  <a
                    href={person.homeworld}
                    target="_blank"
                    className="flex justify-between"
                  >
                    homeworld :{' '}
                    <span className="text-neutral-500 font-bold">
                      {person.homeworld}
                    </span>
                  </a>
                </li>
              </ul>
            </article>
          ))}
      </div>
    </section>
  );
};
