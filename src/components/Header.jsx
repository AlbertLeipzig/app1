import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);


  return (
    <header className="flex justify-between bg-purple-600 mx-4 px-5 py-10 mb-14 md:px-5 lg:mx-32 md">
      <NavLink to="/" onClick={() => setShowMenu(false)}>
        <h2 className="text-xl text-gray-200">Star Wars</h2>
      </NavLink>
      <img
        src="burger.svg"
        alt=""
        className="md:invisible"
        onClick={() => setShowMenu(!showMenu)}
      />
      <nav
        className={`${
          showMenu ? 'absolute flex flex-col top-20 right-16' : 'hidden'
        }  md:flex`}
      >
        <ul className="flex gap-x-5 text-gray-200">
          <li>
            <NavLink to="/spaceships" onClick={() => setShowMenu(false)}>
              Spaceships
            </NavLink>
          </li>
          <li>
            <NavLink to="/characters" onClick={() => setShowMenu(false)}>
              Characters
            </NavLink>
          </li>
          <li>
            <NavLink to="/films" onClick={() => setShowMenu(false)}>
              Films
            </NavLink>
          </li>
          <li>
            <NavLink to="/planets" onClick={() => setShowMenu(false)}>
              Planets
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
