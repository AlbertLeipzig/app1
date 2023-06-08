import { NavLink } from 'react-router-dom';
export const Header = () => {
  return (
    <header className='flex justify-between px-20 py-10'>
      <h2 className="text-2xl">Star Wars</h2>
      <nav>
        <ul className='flex gap-x-5'>
          <li>
            <NavLink to="/spaceships">Spaceships</NavLink>
          </li>
          <li>
            <NavLink to="/characters">Characters</NavLink>
          </li>
          <li>
            <NavLink to="/films">Films</NavLink>
          </li>
          <li>
            <NavLink to="/planets">Planets</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
