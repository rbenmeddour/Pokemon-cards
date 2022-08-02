import "./App.css";
import { useEffect, useState } from "react";

const App = () => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const request = await fetch("https://pokeapi.co/api/v2/pokemon/1");
    const response = await request.json();
    setPokemon(response);
  };
  // console.log(pokemon.types);

  const randomPokemon = () => {
    const random = Math.floor(Math.random() * 151) + 1;
    fetch(`https://pokeapi.co/api/v2/pokemon/${random}`)
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  };

  if (!pokemon) {
    return <div></div>;
  }
  return (
    <div className="App">
      <img src={pokemon.sprites.other["official-artwork"].front_default}></img>
      <h1>{pokemon.name}</h1>
      <p>Height : {pokemon.height}</p>
      <p>Weight : {pokemon.weight}</p>
      <p>Type :</p>
      <ul>
        <p>
          {" "}
          {pokemon.types.map((type) => (
            <li key={type.type.name}>{type.type.name}</li>
          ))}
        </p>
      </ul>
      <button onClick={randomPokemon}>Random Pokemon</button>
    </div>
  );
};

export default App;
