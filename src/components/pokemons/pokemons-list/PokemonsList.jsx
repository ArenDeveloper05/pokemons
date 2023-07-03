const PokemonsList = ({ data }) => {
  return (
    <div className="pokemons-list">
      {data &&
        data.map(({ name, id, types, sprites }) => {
          return (
            <div className="pokemons-list-item" key={id}>
              <h1>{name}</h1>
              <h3>{types[0].type.name}</h3>
              <img
                src={sprites.other.dream_world.front_default}
                alt="poke-img"
              />
            </div>
          );
        })}
    </div>
  );
};

export default PokemonsList;
