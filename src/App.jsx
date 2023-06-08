import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { AllCharacters } from './pages/AllCharacters';
import { AllFilms } from './pages/AllFilms';
import { AllPlanets } from './pages/AllPlanets';
import { AllSpaceships } from './pages/AllSpaceships';
import { AllSpecies } from './pages/AllSpecies';
import { SingleCharacter } from './pages/SingleCharacter';
import { SingleFilm } from './pages/SingleFilm';
import { SinglePlanet } from './pages/SinglePlanet';
import { SingleSpaceship } from './pages/SingleSpaceship';
import { SingleSpecie } from './pages/SingleSpecie';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/characters" element={<AllCharacters />} />
        <Route exact path="/films" element={<AllFilms />} />
        <Route exact path="/planets" element={<AllPlanets />} />
        <Route exact path="/spaceships" element={<AllSpaceships />} />
        <Route exact path="/species" element={<AllSpecies />} />
        <Route exact path="/character/:id" element={<SingleCharacter />} />
        <Route exact path="/film/:id" element={<SingleFilm />} />
        <Route exact path="/planet/:id" element={<SinglePlanet />} />
        <Route exact path="/spaceship/:id" element={<SingleSpaceship />} />
        <Route exact path="/specie/:id" element={<SingleSpecie />} />
      </Routes>
    </>
  );
}

export default App;
