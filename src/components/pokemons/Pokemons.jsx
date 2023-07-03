import { useEffect, useState } from "react";
import PokemonsList from "./pokemons-list/PokemonsList";
import axios from "axios";

const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);

  return (
    <div className="pokemons">
      <PokemonsList data={pokemons} />
    </div>
  );
};

export default Pokemons;
