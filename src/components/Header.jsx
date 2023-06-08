import { NavLink } from 'react-router-dom';
export const Header = () => {
  return (
    <header>
      <h1>Star Wars</h1>
      <nav>
        <ul>
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
