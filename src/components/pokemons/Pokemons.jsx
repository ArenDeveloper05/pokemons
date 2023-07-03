import { useEffect, useState } from "react";
import PokemonsList from "./pokemons-list/PokemonsList";
import axios from "axios";

const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const APIURL = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";

  useEffect(() => {
    async function getPokemons() {
      try {
        const {
          data: { results },
        } = await axios.get(APIURL);
        for (let i = 0; i < results.length; i++) {
          const name = results[i].name;
          const { data } = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${name}`
          );
          console.log(data);
          setPokemons((prev) => {
            return [
              ...prev,
              {
                name: data.name,
                sprites: data.sprites,
                id: data.id,
                types: data.types,
              },
            ];
          });
        }
        console.log(results);
        // console.log(data.results);
      } catch (error) {
        throw new Error(error.message);
      }
    }
    getPokemons();
  }, []);

  return (
    <div className="pokemons">
      <PokemonsList data={pokemons} />
    </div>
  );
};

export default Pokemons;
