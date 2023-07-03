import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import PokemonsPage from "./pages/PokemonsPage";
import ErrorPage from "./pages/ErrorPage";
import SliderPage from "./pages/SliderPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemons" element={<PokemonsPage />} />
        {/* <Route path="/pokemons/:name" element={<SinglePokemonPage/>} /> */}
        <Route path="/slider" element={<SliderPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
